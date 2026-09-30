import type { Project } from "@/data/portfolio";

type Props = {
  architecture: Project["architecture"];
  title?: string;
};

function Arrow() {
  return (
    <span aria-hidden className="flex shrink-0 items-center justify-center text-subtle md:px-1">
      <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/**
 * Data-driven architecture diagram. Each lane renders as a flow of steps:
 * left-to-right on desktop, top-to-bottom on mobile.
 */
export default function ArchitectureDiagram({ architecture, title = "Architecture" }: Props) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{title}</span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </span>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        {architecture.lanes.map((lane) => (
          <div key={lane.name}>
            <p className="mb-2.5 font-mono text-xs text-accent">{lane.name}</p>
            <ol className="flex flex-col gap-1.5 md:flex-row md:items-stretch md:gap-0" aria-label={`${lane.name} flow`}>
              {lane.steps.map((step, i) => (
                <li key={step.label} className="contents">
                  {i > 0 && <Arrow />}
                  <div className="flex-1 rounded-lg border border-line bg-surface-2 px-3 py-2.5 transition-colors hover:border-accent/60 md:min-w-0">
                    <p className="text-sm font-medium leading-snug text-fg">{step.label}</p>
                    {step.detail && <p className="mt-0.5 text-xs leading-snug text-muted">{step.detail}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {architecture.caption && (
        <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted sm:px-6">
          {architecture.caption}
        </figcaption>
      )}
    </figure>
  );
}
