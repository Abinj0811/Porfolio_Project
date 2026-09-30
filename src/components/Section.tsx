import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

/** Consistent section shell: numbered mono eyebrow, heading, optional intro. */
export default function Section({ id, index, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="text-subtle">{index} /</span> {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
