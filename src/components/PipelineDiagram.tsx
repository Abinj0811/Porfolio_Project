import { pipelineStages } from "@/data/portfolio";

/**
 * Visualises the end-to-end AI pipeline Abin builds (from the résumé summary).
 * Each stage pulses in turn via a staggered CSS animation — no JS required.
 */
export default function PipelineDiagram() {
  const step = 1.5; // seconds between stages; total cycle defined in globals.css (10.5s)

  return (
    <figure
      className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_0_0_var(--line)]"
      aria-label="End-to-end AI pipeline: ingest, chunk, embed, retrieve, orchestrate, evaluate, observe"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="font-mono text-[11px] text-subtle">rag_pipeline.py</span>
      </div>

      <ol className="space-y-2 p-4 sm:p-5">
        {pipelineStages.map((stage, i) => (
          <li
            key={stage.key}
            className="stage flex items-center gap-3 rounded-lg border border-line px-3 py-2.5"
            style={{ animationDelay: `${i * step}s` }}
          >
            <span className="w-5 shrink-0 font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <span className="w-24 shrink-0 font-mono text-sm font-medium text-fg">{stage.label}</span>
            <span className="truncate text-xs text-muted sm:text-sm">{stage.detail}</span>
          </li>
        ))}
      </ol>

      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-subtle">
        <span className="text-accent">$</span> ingestion → retrieval → orchestration → evaluation → monitoring
        <span className="caret ml-0.5 text-accent">▍</span>
      </figcaption>
    </figure>
  );
}
