import { projects } from "@/data/portfolio";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Project case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) ?? projects[0];
  return renderOgImage({
    eyebrow: `Case study · ${project.category}`,
    title: project.name,
    subtitle: project.summary,
    chips: project.tech.slice(0, 4),
  });
}
