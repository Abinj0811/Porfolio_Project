import { contact, profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRight, GitHub, LinkedIn, Mail, MapPin, Phone } from "./Icons";

export default function Contact() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
    {
      label: "LinkedIn",
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: profile.linkedin,
      icon: LinkedIn,
      external: true,
    },
    ...(profile.github
      ? [
          {
            label: "GitHub",
            value: profile.github.replace(/^https?:\/\/(www\.)?/, ""),
            href: profile.github,
            icon: GitHub,
            external: true,
          },
        ]
      : []),
    ...(profile.showPhone && profile.phone
      ? [
          {
            label: "Phone",
            value: profile.phone,
            href: `tel:${profile.phone.replace(/\s/g, "")}`,
            icon: Phone,
            external: false,
          },
        ]
      : []),
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow={contact.eyebrow}
      title={contact.title}
      intro={
        profile.openToWork.enabled
          ? `${profile.openToWork.message} — ${contact.openToWorkIntro}`
          : contact.intro
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="group flex h-full flex-col justify-between gap-10 rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">{contact.sayHelloLabel}</span>
            <span className="flex items-end justify-between gap-4">
              <span className="text-xl font-semibold tracking-tight break-all text-fg sm:text-3xl">{profile.email}</span>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </Reveal>

        <Reveal delay={100}>
          <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</span>
                    <span className="block truncate text-sm text-fg">{value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-subtle transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 px-5 py-4">
              <MapPin className="h-4 w-4 text-accent" />
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Location</span>
                <span className="block text-sm text-fg">{profile.location}</span>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
