import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * Notes are Markdown files in /content/notes.
 * Frontmatter: title, date (YYYY-MM-DD), summary, tags (list), draft (true/false).
 * Drafts are visible in `npm run dev` and hidden from production builds.
 */
const NOTES_DIR = path.join(process.cwd(), "content", "notes");
const showDrafts = process.env.NODE_ENV !== "production";

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
};

export type Note = NoteMeta & { html: string };

function readNoteFile(file: string): { meta: NoteMeta; body: string } {
  const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");
  const words = content.split(/\s+/).filter(Boolean).length;
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date,
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      draft: data.draft === true,
      readingMinutes: Math.max(1, Math.round(words / 220)),
    },
    body: content,
  };
}

function noteFiles(): string[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

export function getAllNotes(): NoteMeta[] {
  return noteFiles()
    .map((f) => readNoteFile(f).meta)
    .filter((n) => showDrafts || !n.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string): Note | null {
  const file = `${slug}.md`;
  if (!noteFiles().includes(file)) return null;
  const { meta, body } = readNoteFile(file);
  if (meta.draft && !showDrafts) return null;
  return { ...meta, html: marked.parse(body, { async: false }) };
}

export function formatDate(date: string): string {
  const d = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

export function hasPublishedNotes(): boolean {
  return getAllNotes().length > 0;
}
