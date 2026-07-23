"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

type Project = {
  title: string;
  icon?: string;
  type: string;
  status: string;
  tagline: string;
  description: string;
  stack: string[];
  focus: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
};

type ProjectGridProps = {
  projects: Project[];
};

/**
 * All projects visible at once as compact cards (icon + title + one-liner).
 * Clicking a card expands it in place to full width with the complete
 * description, stack, focus list, and links. One card open at a time.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  const toggle = (title: string) => {
    const next = openTitle === title ? null : title;
    setOpenTitle(next);
    if (next) {
      // The card jumps rows when it goes full-width; keep it in view.
      requestAnimationFrame(() => {
        cardRefs.current
          .get(title)
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project, i) => {
        const open = openTitle === project.title;
        const status = project.status.toLowerCase();
        const isComplete =
          status.includes("enhanced") ||
          status.includes("complete") ||
          status.includes("hosted") ||
          status.includes("live");

        return (
          <article
            key={project.title}
            ref={(el) => {
              if (el) cardRefs.current.set(project.title, el);
              else cardRefs.current.delete(project.title);
            }}
            className={`group scroll-mt-20 rounded-2xl border bg-paper/85 shadow-[0_1px_0_rgba(22,32,26,0.04)] backdrop-blur-sm transition duration-300 ${
              open
                ? "border-pine/40 shadow-[0_24px_60px_-30px_rgba(12,21,15,0.55)] sm:col-span-2"
                : "border-ink/10 hover:-translate-y-1 hover:border-pine/40 hover:shadow-[0_24px_60px_-30px_rgba(12,21,15,0.55)]"
            }`}
          >
            {/* Compact header — always visible, toggles the detail */}
            <button
              type="button"
              onClick={() => toggle(project.title)}
              aria-expanded={open}
              className="flex w-full flex-col gap-3 rounded-2xl p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine md:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="label-mono text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    isComplete
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      isComplete ? "bg-emerald-600" : "bg-amber-500"
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {project.icon ? (
                  <span className="relative block size-12 shrink-0 overflow-hidden rounded-xl shadow-[0_3px_10px_-2px_rgba(20,40,26,0.35)] ring-1 ring-ink/5 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Image
                      src={project.icon}
                      alt=""
                      aria-hidden="true"
                      width={96}
                      height={96}
                      unoptimized
                      className="size-full object-cover"
                    />
                  </span>
                ) : null}
                <h3 className="font-display text-xl tracking-tight text-ink md:text-2xl">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-end justify-between gap-4">
                <p className="text-sm leading-6 text-ink-soft">
                  {project.tagline}
                </p>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 text-ink-soft transition duration-300 group-hover:border-pine group-hover:text-pine ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown aria-hidden="true" size={16} strokeWidth={2} />
                </span>
              </div>
            </button>

            {/* Expanded detail — animates open via the 0fr -> 1fr grid trick */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-line/70 p-5 pt-4 md:p-6 md:pt-5">
                  <p className="text-base leading-relaxed text-ink-soft md:text-sm md:leading-6">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="label-mono rounded-md border border-ink/10 bg-paper-2/60 px-2.5 py-1 text-[0.68rem] text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-line/70 pt-5">
                    <p className="label-mono text-pine">What it demonstrates</p>
                    <ul className="mt-3 grid gap-2.5 text-sm text-ink-soft sm:grid-cols-2">
                      {project.focus.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[6px] size-1.5 shrink-0 rounded-full bg-emerald-600 ring-2 ring-emerald-600/15"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper transition hover:bg-pine"
                      >
                        {project.demoLabel || "Live Demo"}
                      </a>
                    ) : null}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-ink/20 px-5 py-3 text-center text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
                      >
                        View Repository
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
