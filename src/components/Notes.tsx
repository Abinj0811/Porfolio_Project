import Link from "next/link";
import { getAllNotes } from "@/lib/notes";
import Section from "./Section";
import Reveal from "./Reveal";
import NoteList from "./NoteList";
import { ArrowRight } from "./Icons";

/** Homepage section with the latest notes. Renders nothing until a note is published. */
export default function Notes() {
  const notes = getAllNotes();
  if (notes.length === 0) return null;

  return (
    <Section
      id="notes"
      index="06"
      eyebrow="Notes"
      title="Writing on building AI systems."
      intro="Short technical notes on RAG, agents and document AI — what worked, what didn't, and why."
    >
      <Reveal>
        <NoteList notes={notes.slice(0, 3)} />
        {notes.length > 3 && (
          <Link
            href="/notes"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            All notes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </Reveal>
    </Section>
  );
}
