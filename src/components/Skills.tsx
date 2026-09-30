import { skillGroups } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="The toolkit behind the work."
      intro="Grouped by where they sit in the stack — from LLM orchestration and retrieval down to vision models and deployment."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={(i % 4) * 70} className="h-full">
            <div className="h-full rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
              <h3 className="text-sm font-semibold text-fg">{group.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
