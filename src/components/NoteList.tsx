import Link from "next/link";
import { formatDate, type NoteMeta } from "@/lib/notes";
import { ArrowRight } from "./Icons";

export default function NoteList({ notes }: { notes: NoteMeta[] }) {
  return (
    <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
      {notes.map((note) => (
        <li key={note.slug}>
          <Link
            href={`/notes/${note.slug}`}
            className="group flex flex-col gap-2 p-5 transition-colors hover:bg-surface-2 sm:flex-row sm:items-start sm:gap-8 sm:p-6"
          >
            <span className="shrink-0 font-mono text-xs text-subtle sm:w-28 sm:pt-1">{formatDate(note.date)}</span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 text-base font-medium text-fg">
                {note.title}
                {note.draft && (
                  <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[10px] uppercase text-accent">
                    Draft
                  </span>
                )}
              </span>
              {note.summary && <span className="mt-1 block text-sm leading-relaxed text-muted">{note.summary}</span>}
              {note.tags.length > 0 && (
                <span className="mt-3 flex flex-wrap gap-1.5">
                  {note.tags.map((t) => (
                    <span key={t} className="rounded bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                      {t}
                    </span>
                  ))}
                </span>
              )}
            </span>
            <ArrowRight className="hidden h-4 w-4 shrink-0 text-subtle transition-all group-hover:translate-x-1 group-hover:text-accent sm:mt-1 sm:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
