import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.name} — ${profile.name}`, description: project.summary, type: "article" },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr] md:gap-10">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          description: project.summary,
          url: `${siteUrl}/projects/${project.slug}`,
          keywords: project.tech.join(", "),
          author: { "@type": "Person", name: profile.name, url: siteUrl },
        }}
      />
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs text-accent">
            <span className="text-subtle">Case study {String(index + 1).padStart(2, "0")} /</span> {project.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{project.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
          {project.links && project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-fg transition-colors hover:border-accent"
                >
                  {l.label} <ArrowUpRight />
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="mt-12">
          <Block label="Problem">
            <p className="text-base leading-relaxed text-muted sm:text-lg">{project.problem}</p>
          </Block>

          <Block label="What I built">
            <ul className="space-y-3">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">My role · </span>
              {project.contribution}
            </p>
          </Block>

          <Block label="Key decisions">
            <ol className="space-y-4">
              {project.decisions.map((d, i) => (
                <li key={d.decision} className="rounded-xl border border-line bg-surface p-5">
                  <p className="flex gap-3 text-base font-medium text-fg">
                    <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {d.decision}
                  </p>
                  <p className="mt-2 pl-8 text-sm leading-relaxed text-muted">
                    <span className="text-subtle">Why: </span>
                    {d.why}
                  </p>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Outcome">
            <div className="rounded-lg border-l-2 border-accent bg-accent-soft px-5 py-4">
              <p className="text-base leading-relaxed text-fg">{project.outcome}</p>
            </div>
          </Block>

          {project.lessons && project.lessons.length > 0 && (
            <Block label="Lessons learned">
              <ul className="space-y-3">
                {project.lessons.map((l) => (
                  <li key={l} className="text-base leading-relaxed text-muted">
                    {l}
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>

        <nav className="mt-6 grid gap-4 border-t border-line pt-10 sm:grid-cols-2" aria-label="More">
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Next case study</span>
            <span className="mt-2 flex items-center justify-between gap-3 text-base font-medium text-fg">
              {next.name}
              <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/#contact"
            className="group rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Hiring?</span>
            <span className="mt-2 flex items-center justify-between gap-3 text-base font-medium text-fg">
              Get in touch
              <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
