type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "ink" | "paper";
};

/** Numbered, editorial section header: mono eyebrow + serif display title. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "ink",
}: SectionHeadingProps) {
  const isPaper = tone === "paper";

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div
          className={`flex items-center gap-3 label-mono ${
            isPaper ? "text-emerald-200" : "text-pine"
          }`}
        >
          <span>{index}</span>
          <span className={`h-px w-10 ${isPaper ? "bg-emerald-200/50" : "bg-line"}`} />
          <span>{eyebrow}</span>
        </div>
        <h2
          className={`mt-4 font-display text-3xl tracking-tight md:text-5xl ${
            isPaper ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={`max-w-md text-sm leading-relaxed ${
            isPaper ? "text-paper/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
