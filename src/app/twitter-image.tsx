import { profile } from "@/data/portfolio";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${profile.name} — ${profile.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: profile.title,
    title: profile.name,
    subtitle: profile.tagline,
    chips: ["RAG", "Agentic AI · LangGraph", "Document AI", "LLM Evaluation"],
  });
}



