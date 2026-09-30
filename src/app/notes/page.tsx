import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoteList from "@/components/NoteList";
import { getAllNotes } from "@/lib/notes";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Notes",
  description: `Technical notes by ${profile.name} on RAG, agentic AI and document intelligence.`,
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <Navbar showNotes={notes.length > 0} />
      <main className="mx-auto max-w-4xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Notes</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">Writing on building AI systems.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Short technical notes on RAG, agents and document AI — what worked, what didn&apos;t, and why.
        </p>
        <div className="mt-12">
          {notes.length > 0 ? (
            <NoteList notes={notes} />
          ) : (
            <p className="rounded-xl border border-dashed border-line p-8 text-center text-muted">
              No notes published yet — check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
