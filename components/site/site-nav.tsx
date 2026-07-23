"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

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

  // Close the mobile menu on Escape, and auto-close once we cross into the
  // desktop breakpoint (where the full nav takes over).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="label-mono font-semibold text-ink transition hover:text-pine"
          onClick={() => setOpen(false)}
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
          className="label-mono hidden rounded-full border border-ink/20 px-4 py-2 text-ink transition hover:border-pine hover:bg-pine hover:text-paper md:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-pine hover:text-pine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine md:hidden"
        >
          {open ? (
            <X aria-hidden="true" size={20} strokeWidth={2} />
          ) : (
            <Menu aria-hidden="true" size={20} strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-line/70 bg-paper/95 backdrop-blur-md transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-base transition-colors ${
                active === link.id
                  ? "bg-paper-2/70 text-ink"
                  : "text-ink-soft hover:bg-paper-2/50 hover:text-pine"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-paper transition hover:bg-pine"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
