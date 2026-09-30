import { about, profile } from "@/data/portfolio";
import PipelineDiagram from "./PipelineDiagram";
import { ArrowRight, Download, GitHub, LinkedIn, MapPin } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {profile.title}
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{profile.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core focus areas">
            {about.focusAreas.slice(0, 4).map((area) => (
              <li key={area} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              View featured work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent"
            >
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent"
              >
                <Download /> Résumé
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
            <span>{profile.experienceSummary} building ML & GenAI systems</span>
            <span className="flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted transition-colors hover:text-accent"
              >
                <LinkedIn className="h-4 w-4" />
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-muted transition-colors hover:text-accent"
                >
                  <GitHub className="h-4 w-4" />
                </a>
              )}
            </span>
          </div>
        </div>

        <PipelineDiagram />
      </div>
    </section>
  );
}
