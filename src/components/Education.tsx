import { education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { GraduationCap } from "./Icons";

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Foundations.">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
          <div className="flex gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-fg sm:text-xl">{education.degree}</h3>
              <p className="mt-1 text-base text-muted">{education.institution}</p>
              <p className="text-sm text-subtle">{education.university}</p>
            </div>
          </div>
          <p className="font-mono text-sm text-muted sm:text-right">{education.period}</p>
        </div>
      </Reveal>
    </Section>
  );
}
