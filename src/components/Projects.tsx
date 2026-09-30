import { projects } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [lead, ...rest] = projects;

  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Featured work"
      title="Systems I've designed and built."
      intro="From grounded RAG over regulatory documents to multimodal document understanding and edge computer vision — each project below covers the problem, approach, my role and the result."
    >
      <div className="space-y-6">
        <Reveal>
          <ProjectCard project={lead} index={0} featured />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90} className="h-full">
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
