"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "demos", label: "Public Demos" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function SiteNav({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="label-mono font-semibold text-ink transition hover:text-pine"
        >
          {name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition-colors ${
                active === link.id
                  ? "text-ink"
                  : "text-ink-soft hover:text-pine"
              }`}
            >
              <span className="relative">
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-pine transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="label-mono rounded-full border border-ink/20 px-4 py-2 text-ink transition hover:border-pine hover:bg-pine hover:text-paper"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
