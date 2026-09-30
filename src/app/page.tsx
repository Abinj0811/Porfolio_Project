import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { education, experience, profile, skillGroups } from "@/data/portfolio";
import { hasPublishedNotes } from "@/lib/notes";
import { siteUrl } from "@/lib/site";

export default function Home() {
  const sameAs = [profile.linkedin, profile.github].filter(Boolean);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          description: profile.tagline,
          url: siteUrl,
          email: `mailto:${profile.email}`,
          sameAs,
          address: { "@type": "PostalAddress", addressLocality: "Kozhikode", addressRegion: "Kerala", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: education.institution },
          hasOccupation: { "@type": "Occupation", name: profile.title },
          knowsAbout: skillGroups.flatMap((g) => g.skills).slice(0, 30),
          affiliation: { "@type": "Organization", name: experience.company },
        }}
      />
      <Navbar showNotes={hasPublishedNotes()} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
