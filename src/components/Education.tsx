import { certifications, education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { Award, GraduationCap } from "./Icons";

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education & certifications" title="Foundations.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              <GraduationCap /> Education
            </div>
            <h3 className="mt-4 text-lg font-semibold text-fg sm:text-xl">{education.degree}</h3>
            <p className="mt-2 text-base text-muted">{education.institution}</p>
            <p className="text-sm text-subtle">{education.university}</p>
            <p className="mt-4 font-mono text-sm text-muted">{education.period}</p>
          </div>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              <Award /> Certifications
            </div>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((cert) => (
                <li key={cert} className="py-3 text-sm text-muted first:pt-0 last:pb-0">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
