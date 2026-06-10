"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, type WheelEvent } from "react";

type Project = {
  title: string;
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

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * Math.min(560, rail.clientWidth * 0.88),
      behavior: "smooth",
    });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const delta =
      Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    const canScrollLeft = rail.scrollLeft > 0;
    const canScrollRight =
      Math.ceil(rail.scrollLeft + rail.clientWidth) < rail.scrollWidth;

    if ((delta < 0 && canScrollLeft) || (delta > 0 && canScrollRight)) {
      event.preventDefault();
      rail.scrollBy({ left: delta, behavior: "auto" });
    }
  };

  return (
    <div className="relative">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Scroll projects left"
          onClick={() => scrollByCard(-1)}
          className="grid size-10 place-items-center rounded-full border border-emerald-200 bg-white/85 text-emerald-900 shadow-sm shadow-emerald-950/5 transition hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <ArrowLeft aria-hidden="true" size={18} strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Scroll projects right"
          onClick={() => scrollByCard(1)}
          className="grid size-10 place-items-center rounded-full border border-emerald-200 bg-white/85 text-emerald-900 shadow-sm shadow-emerald-950/5 transition hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
        </button>
      </div>

      <div
        ref={railRef}
        onWheel={handleWheel}
        className="project-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-6 pb-6 scroll-smooth md:mx-0 md:px-0"
      >
        {projects.map((project) => {
          const status = project.status.toLowerCase();
          const isComplete =
            status.includes("enhanced") ||
            status.includes("complete") ||
            status.includes("hosted") ||
            status.includes("live");

          return (
            <article
              key={project.title}
              className="flex min-h-[36rem] w-[min(86vw,34rem)] shrink-0 snap-start flex-col rounded-lg border border-emerald-200 bg-white/90 p-7 shadow-sm shadow-emerald-950/5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md md:w-[34rem]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-emerald-700">
                  {project.type}
                </p>
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    isComplete
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-emerald-950">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-stone-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-emerald-100 pt-5">
                <p className="text-sm font-semibold text-stone-800">
                  What it demonstrates
                </p>
                <ul className="mt-3 grid gap-2 text-sm text-stone-600 sm:grid-cols-2">
                  {project.focus.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-emerald-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-900"
                  >
                    {project.demoLabel || "Live Demo"}
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-300 px-5 py-3 text-center text-sm font-semibold text-emerald-900 transition hover:border-emerald-600 hover:bg-emerald-50"
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