"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  icon?: string;
  type: string;
  status: string;
  description: string;
  stack: string[];
  focus: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * Math.min(560, rail.clientWidth * 0.88),
      behavior: "smooth",
    });
  };

  // Translate vertical wheel into smooth 1:1 horizontal scrolling, using a
  // native non-passive listener so preventDefault works and there's no jump.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onWheel = (event: WheelEvent) => {
      // Leave genuine horizontal gestures (trackpads) to the browser.
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const atStart = rail.scrollLeft <= 0;
      const atEnd =
        Math.ceil(rail.scrollLeft + rail.clientWidth) >= rail.scrollWidth - 1;

      // At an edge and scrolling further out: let the page scroll normally.
      if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) return;

      event.preventDefault();
      rail.scrollLeft += event.deltaY;
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, []);

  // Track whether we're at the far left/right so the edge fade only appears on
  // a side when there's more content to scroll toward it.
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  const updateEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const atStart = rail.scrollLeft <= 1;
    const atEnd =
      Math.ceil(rail.scrollLeft + rail.clientWidth) >= rail.scrollWidth - 1;
    setEdges((prev) =>
      prev.atStart === atStart && prev.atEnd === atEnd
        ? prev
        : { atStart, atEnd }
    );
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    updateEdges();
    rail.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      rail.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const fade = "5%";
  const maskImage = `linear-gradient(to right, ${
    edges.atStart ? "black" : "transparent"
  } 0%, black ${fade}, black calc(100% - ${fade}), ${
    edges.atEnd ? "black" : "transparent"
  } 100%)`;

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between">
        <p className="label-mono text-ink-soft">
          Projects · scroll or drag
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll projects left"
            onClick={() => scrollByCard(-1)}
            disabled={edges.atStart}
            className="grid size-10 place-items-center rounded-full border border-ink/15 bg-paper/80 text-ink transition hover:border-pine hover:bg-pine hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Scroll projects right"
            onClick={() => scrollByCard(1)}
            disabled={edges.atEnd}
            className="grid size-10 place-items-center rounded-full border border-ink/15 bg-paper/80 text-ink transition hover:border-pine hover:bg-pine hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        style={{ WebkitMaskImage: maskImage, maskImage }}
        className="project-scrollbar -mx-6 flex gap-5 overflow-x-auto overscroll-x-contain px-6 pb-6 pt-3 md:mx-0 md:px-0"
      >
        {projects.map((project, i) => {
          const status = project.status.toLowerCase();
          const isComplete =
            status.includes("enhanced") ||
            status.includes("complete") ||
            status.includes("hosted") ||
            status.includes("live");

          return (
            <article
              key={project.title}
              className="group flex min-h-[36rem] w-[min(86vw,34rem)] shrink-0 flex-col rounded-2xl border border-ink/10 bg-paper/85 p-7 shadow-[0_1px_0_rgba(22,32,26,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-pine/40 hover:shadow-[0_24px_60px_-30px_rgba(12,21,15,0.55)] md:w-[34rem]"
            >
              <div className="flex items-center justify-between">
                <span className="label-mono text-ink-soft">
                  {String(i + 1).padStart(2, "0")} / {project.type}
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

              <div className="mt-5 flex items-center gap-4">
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
                <h3 className="font-display text-2xl tracking-tight text-ink">
                  {project.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-ink-soft">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="label-mono rounded-md border border-ink/10 bg-paper-2/60 px-2.5 py-1 text-[0.68rem] text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-line/70 pt-5">
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

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
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
            </article>
          );
        })}
      </div>
    </div>
  );
}
