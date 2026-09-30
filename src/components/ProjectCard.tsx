import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { ArrowRight } from "./Icons";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

function Label({ children }: { children: React.ReactNode }) {
  return <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{children}</h4>;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 sm:p-8 ${
        featured ? "lg:p-10" : ""
      }`}
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-accent">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
              {project.name}
            </Link>
          </h3>
        </div>
        <span className="font-mono text-sm text-subtle transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
      </header>

      <p className="mt-4 text-base leading-relaxed text-muted">{project.summary}</p>

      <div className={`mt-6 grid gap-6 ${featured ? "lg:grid-cols-2 lg:gap-10" : ""}`}>
        <div className="space-y-5">
          <div>
            <Label>Problem</Label>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <Label>Solution</Label>
            <ul className="mt-2 space-y-2">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <Label>My contribution</Label>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.contribution}</p>
          </div>
          <div className="rounded-lg border-l-2 border-accent bg-accent-soft px-4 py-3">
            <Label>Outcome</Label>
            <p className="mt-1.5 text-sm leading-relaxed text-fg">{project.outcome}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-7">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}`}
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
          aria-label={`Read the ${project.name} case study`}
        >
          Case study & architecture
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
