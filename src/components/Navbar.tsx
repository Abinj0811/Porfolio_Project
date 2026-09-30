"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { Close, Menu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="/" className="group flex items-center gap-2.5 font-mono text-sm text-fg">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-line font-semibold text-accent transition-colors group-hover:border-accent">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name.toLowerCase().replace(" ", "_")}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-line" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-5 pb-5 md:hidden">
          <ul className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-base text-muted last:border-0 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
