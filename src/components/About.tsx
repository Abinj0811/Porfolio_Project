import { about, experience, profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  const facts = [
    { label: "Experience", value: `${profile.experienceSummary} in AI/ML` },
    { label: "Most recent", value: experience.company },
    { label: "Education", value: "B.Tech, Computer Science" },
    { label: "Based in", value: profile.location },
  ];

  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering GenAI that holds up in production.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{f.label}</dt>
                <dd className="text-sm font-medium text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
