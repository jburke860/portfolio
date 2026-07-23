"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type HeroProps = {
  resume: string;
};

export function Hero({ resume }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // The vertical parallax is only safe on wider screens. On mobile the hero is
  // tall and vertically centered, so drifting the content downward makes it
  // overlap the scroll cue and the section below — there we fade only.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Content drifts down slightly and fades as you scroll past the hero.
  const yValue = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y = isDesktop ? yValue : 0;
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-24 md:min-h-[92vh] md:pt-28"
    >
      <motion.div style={reduce ? undefined : { y, opacity }}>
        {/* Technical eyebrow */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-soft">
          <span className="inline-flex items-center gap-2 label-mono text-pine">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
            </span>
            Open to work
          </span>
          <span className="hidden h-3 w-px bg-line sm:block" />
          <span className="label-mono">
            Manchester, CT · 41.78&deg;N 72.52&deg;W
          </span>
        </div>

        {/* Editorial display headline */}
        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl sm:leading-[1.02] md:text-7xl">
          I build software for{" "}
          <span className="italic text-pine">technical, real-world</span>{" "}
          systems.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          Computer engineer working in applied AI: computer vision, sensor
          fusion, simulation, and automation. I turn complex data and system
          behavior into useful, reliable software.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#demos"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-pine sm:w-auto"
          >
            View public demos
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href={resume}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine sm:w-auto"
          >
            Download résumé
          </a>
        </div>

        {/* Discipline strip — technical, monospace (desktop only) */}
        <div className="mt-16 hidden flex-wrap gap-x-8 gap-y-3 border-t border-line/70 pt-6 label-mono text-ink-soft md:flex">
          <span>Applied AI</span>
          <span>Computer Vision</span>
          <span>Sensor Fusion</span>
          <span>Simulation</span>
          <span>R&amp;D Software</span>
        </div>
      </motion.div>

      {/* Scroll cue — a glowing dot travels down a track, with a bouncing chevron */}
      <motion.div
        style={reduce ? undefined : { opacity }}
        className="absolute bottom-8 left-6 hidden items-center gap-3 label-mono text-ink-soft md:flex"
      >
        <span className="relative block h-12 w-px overflow-hidden rounded-full bg-ink-soft/20">
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-emerald-500 to-emerald-600"
            style={{ filter: "drop-shadow(0 0 6px rgba(16,185,129,0.9))" }}
            animate={reduce ? undefined : { y: ["-20px", "48px"] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
        <span>Scroll</span>
        <motion.span
          aria-hidden="true"
          className="text-emerald-600"
          style={{ filter: "drop-shadow(0 0 5px rgba(16,185,129,0.7))" }}
          animate={reduce ? undefined : { y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.span>
      </motion.div>
    </section>
  );
}
