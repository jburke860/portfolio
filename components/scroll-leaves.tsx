"use client";

import { useEffect, useState } from "react";

type LeafClusterProps = {
  side: "left" | "right";
  top: string;
  size: number;
  rotation: number;
  travel: number;
  progress: number;
};

function LeafCluster({
  side,
  top,
  size,
  rotation,
  travel,
  progress,
}: LeafClusterProps) {
  const offset = (progress - 0.5) * travel;
  const spin = (progress - 0.5) * 10;
  const sidePosition =
    side === "left"
      ? { left: "max(0.5rem, calc((100vw - 64rem) / 2 - 9.5rem))" }
      : { right: "max(0.5rem, calc((100vw - 64rem) / 2 - 9.5rem))" };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 240"
      className="fixed text-emerald-900/35"
      style={{
        ...sidePosition,
        top,
        width: size,
        transform: `translate3d(0, ${offset}px, 0) rotate(${
          rotation + spin
        }deg) scaleX(${side === "right" ? -1 : 1})`,
      }}
    >
      <path
        d="M16 218C28 166 54 111 103 42"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M50 147C22 137 13 108 29 84c33 3 53 25 49 59-9 7-18 9-28 4Z"
        fill="#a7f3d0"
        opacity="0.36"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M83 95C57 78 58 46 82 27c31 15 42 43 23 69-11 3-19 2-22-1Z"
        fill="#bef264"
        opacity="0.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M96 170c-28-4-45 17-46 47 27 10 56-2 68-29-4-9-10-14-22-18Z"
        fill="#6ee7b7"
        opacity="0.28"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M112 55c-19 22-13 50 12 69 27-18 35-49 15-72-11-2-20 0-27 3Z"
        fill="#ecfccb"
        opacity="0.62"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M31 112c17 12 34 22 51 27M74 45c10 19 18 37 26 55M58 207c25-7 43-17 57-30M121 67c-1 24 0 42 5 56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ScrollLeaves() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden [@media(min-width:1320px)]:block">
      <LeafCluster
        side="left"
        top="18vh"
        size={150}
        rotation={-18}
        travel={96}
        progress={progress}
      />
      <LeafCluster
        side="left"
        top="58vh"
        size={120}
        rotation={8}
        travel={150}
        progress={progress}
      />
      <LeafCluster
        side="right"
        top="30vh"
        size={136}
        rotation={15}
        travel={118}
        progress={progress}
      />
      <LeafCluster
        side="right"
        top="72vh"
        size={108}
        rotation={-7}
        travel={160}
        progress={progress}
      />
    </div>
  );
}
