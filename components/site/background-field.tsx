"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Fixed, full-viewport backdrop that reacts to page scroll with a *smooth,
 * always-readable* nature progression:
 *   warm paper  ->  light sage  ->  soft moss
 * It never goes dark, so dark text stays high-contrast the whole way down.
 * The pine artwork drifts with parallax and a faint engineering grid keeps
 * the technical edge.
 */
export function BackgroundField() {
  const { scrollYProgress } = useScroll();

  // Two overlapping light layers crossfade in sequence — a continuous,
  // gentle deepening with no hard jumps and no dark slab.
  const sageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const mossOpacity = useTransform(scrollYProgress, [0.45, 1], [0, 1]);
  // Pine branches drift up slowly and stay softly visible throughout.
  const pineY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const pineOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.32]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* Warm paper base with a soft top-left light */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_0%,#f7f5ec_0%,#eceadd_45%,#e4e2d3_100%)]" />

      {/* Stage 1: light sage */}
      <motion.div
        style={{ opacity: sageOpacity }}
        className="absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_100%,#cdd3b0_0%,#dadec3_55%,#e6e6d4_100%)]"
      />

      {/* Stage 2: soft moss — the deepest point, still light enough to read on */}
      <motion.div
        style={{ opacity: mossOpacity }}
        className="absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_100%,#aab690_0%,#bcc6a2_55%,#cdd2b6_100%)]"
      />

      {/* Pine artwork with parallax. The layer is oversized (135% tall, pulled
          up 10%) so the parallax shift never exposes its edge, and a bottom
          mask fades the leaves out softly instead of hard-cutting. */}
      <motion.div
        style={{
          y: pineY,
          opacity: pineOpacity,
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%)",
        }}
        className="absolute inset-x-0 -top-[10%] h-[135%] hidden md:block"
      >
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top mix-blend-multiply"
        />
      </motion.div>

      {/* Engineering grid texture */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Soft vignette to keep edges grounded (kept light) */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_60%,rgb(60_71_61_/_0.10)_100%)]" />
    </div>
  );
}
