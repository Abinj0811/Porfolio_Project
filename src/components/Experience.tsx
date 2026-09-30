import { experience } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Experience" title="Where I've shipped AI into production.">
      <Reveal>
        <div className="rounded-xl border border-line bg-surface">
          <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{experience.headline}</h3>
              <p className="mt-1 text-base text-muted">
                {experience.company} <span className="text-subtle">· {experience.location}</span>
              </p>
            </div>
            <div className="font-mono text-sm sm:text-right">
              <p className="text-fg">{experience.period}</p>
              <p className="text-subtle">{experience.duration}</p>
            </div>
          </div>

          <div className="grid gap-px bg-line sm:grid-cols-2">
            {experience.highlights.map((h) => (
              <div key={h.area} className="bg-surface p-6 transition-colors hover:bg-surface-2 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{h.area}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-6 py-4 font-mono text-xs text-subtle sm:px-8">
            <span className="text-muted">Role history</span>
            {experience.roles.map((r) => (
              <span key={r.period}>
                {r.title} · {r.period}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
