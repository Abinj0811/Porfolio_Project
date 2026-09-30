import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ArrowRight } from "@/components/Icons";
import { formatDate, getAllNotes, getNote } from "@/lib/notes";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const notes = getAllNotes();
  // Next.js needs at least one param for a static route; an unknown slug simply 404s.
  return notes.length > 0 ? notes.map((n) => ({ slug: n.slug })) : [{ slug: "_none" }];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: { title: note.title, description: note.summary, type: "article", publishedTime: note.date },
    robots: note.draft ? { index: false } : undefined,
  };
}

export default async function NotePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: note.title,
          description: note.summary,
          datePublished: note.date,
          url: `${siteUrl}/notes/${note.slug}`,
          keywords: note.tags.join(", "),
          author: { "@type": "Person", name: profile.name, url: siteUrl },
        }}
      />
      <Navbar showNotes />
      <main className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
        <Link
          href="/notes"
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          All notes
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          <p className="font-mono text-xs text-subtle">
            {formatDate(note.date)} · {note.readingMinutes} min read
            {note.draft && <span className="ml-2 text-accent">· Draft (hidden in production)</span>}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{note.title}</h1>
          {note.summary && <p className="mt-4 text-lg leading-relaxed text-muted">{note.summary}</p>}
        </header>

        <article className="prose-note mt-10 max-w-none" dangerouslySetInnerHTML={{ __html: note.html }} />

        <div className="mt-14 rounded-xl border border-line bg-surface p-6">
          <p className="text-sm text-muted">
            Written by <span className="font-medium text-fg">{profile.name}</span>, {profile.title}.
          </p>
          <Link href="/#contact" className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Get in touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
