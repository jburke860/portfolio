import Image from "next/image";
import { ProjectCarousel } from "@/components/project-carousel";
import { BackgroundField } from "@/components/site/background-field";
import { Hero } from "@/components/site/hero";
import { Reveal } from "@/components/site/reveal";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteNav } from "@/components/site/site-nav";
import { demoProjects, site, skills, workHighlights } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden font-sans text-ink">
      <BackgroundField />
      <ScrollProgress />
      <SiteNav name={site.name} />

      <Hero resume={site.resume} />

      {/* WORK */}
      <section id="work" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Selected Technical Work"
              title="Sanitized experience summaries"
              description="Some work is summarized at a high level due to contractual and confidentiality constraints. No proprietary code, customer details, restricted datasets, or sensitive system information is included."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {workHighlights.map((item, i) => (
              <Reveal as="article" delay={i * 0.08} key={item.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper/85 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-pine/40 hover:shadow-[0_24px_60px_-30px_rgba(12,21,15,0.55)]">
                  <span className="label-mono text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 label-mono text-pine">{item.type}</p>
                  <h3 className="mt-3 font-display text-xl tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-ink-soft">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((skill) => (
                      <span
                        key={skill}
                        className="label-mono rounded-md border border-ink/10 bg-paper-2/60 px-2.5 py-1 text-[0.68rem] text-ink-soft"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto pt-8 label-mono text-ink-soft/70">
                    Non-confidential summary
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Public Demo Projects"
              title="Built in the open, for review"
              description="Implementation ability shown with open data, local tooling, and non-sensitive workflows across backend APIs, AI retrieval, and computer vision."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 mb-8 rounded-2xl border border-ink/10 bg-paper-2/70 p-6 backdrop-blur-sm">
              <p className="label-mono text-pine">Project demo status</p>
              <p className="mt-3 max-w-5xl text-sm leading-6 text-ink-soft">
                SentinelGrid, ProjectPulse, and the Open Computer Vision
                Detection Dashboard are available as live public demos. The
                Technical Paper AI Search Assistant runs as a local demo through
                its GitHub setup instructions. Each repository includes setup or
                review instructions for exploring the project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ProjectCarousel projects={demoProjects} />
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Technical Strengths"
              title="Skills & tools"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {skills.map((group, i) => (
              <Reveal delay={i * 0.07} key={group.category}>
                <div className="h-full rounded-2xl border border-ink/10 bg-paper/85 p-6 backdrop-blur-sm transition duration-300 hover:border-pine/40">
                  <h3 className="font-display text-lg tracking-tight text-ink">
                    {group.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-pine">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="About"
              title="Rooted in Connecticut."
            />
          </Reveal>
          <div className="mt-12 grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
            <Reveal delay={0.1}>
              <figure className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-[0_24px_60px_-34px_rgba(20,40,26,0.5)]">
                <Image
                  src="/img-8471.jpeg"
                  alt="Jeremy hiking on a fallen tree in the Connecticut woods"
                  width={3024}
                  height={4032}
                  sizes="(min-width: 768px) 42vw, 90vw"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="label-mono flex items-center gap-2 border-t border-line/70 px-4 py-3 text-ink-soft">
                  <span className="size-1.5 rounded-full bg-emerald-600" />
                  On the trail · Connecticut
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                I&apos;m Jeremy. I grew up in Hebron, Connecticut, where I went
                to RHAM High School and played football. A lot of who I am is
                still rooted in this corner of New England: hiking, swimming,
                and being out in the woods, plus a borderline unreasonable
                devotion to every Boston sports team and the UConn Huskies.
              </p>
              <p>
                I studied at the University of Connecticut and was lucky enough
                to watch the Huskies go back to back, winning two national
                championships while I was there. That same mix of curiosity and
                competitiveness is what pulls me toward engineering. I like
                taking messy, real world problems apart and building software
                that actually holds up.
              </p>
              <p>
                These days I work at the intersection of software, applied AI,
                and technical R&amp;D, building with computer vision, sensor
                fusion, simulation, and automation to turn complex data and
                system behavior into tools people can rely on.
              </p>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line/70 pt-6 sm:grid-cols-3">
                <div>
                  <dt className="label-mono text-pine">Hometown</dt>
                  <dd className="mt-1 text-sm text-ink">Hebron, CT</dd>
                </div>
                <div>
                  <dt className="label-mono text-pine">High School</dt>
                  <dd className="mt-1 text-sm text-ink">RHAM · Football</dd>
                </div>
                <div>
                  <dt className="label-mono text-pine">University</dt>
                  <dd className="mt-1 text-sm text-ink">UConn</dd>
                </div>
                <div>
                  <dt className="label-mono text-pine">Off the clock</dt>
                  <dd className="mt-1 text-sm text-ink">Hiking · Swimming</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="label-mono text-pine">Loyal to</dt>
                  <dd className="mt-1 text-sm text-ink">
                    Boston sports + UConn
                  </dd>
                </div>
              </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-emerald-950/20 bg-pine/95 p-8 shadow-[0_30px_80px_-40px_rgba(20,40,26,0.6)] backdrop-blur-md md:p-14">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <div className="flex items-center gap-3 label-mono text-emerald-300">
                    <span>05</span>
                    <span className="h-px w-10 bg-emerald-300/40" />
                    <span>Contact</span>
                  </div>
                  <h2 className="mt-4 font-display text-4xl tracking-tight text-paper md:text-5xl">
                    Let&apos;s build something.
                  </h2>
                  <p className="mt-5 max-w-xl text-emerald-50/80">
                    Open to software engineering, applied AI, automation, and
                    R&amp;D-focused technical software roles.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="rounded-full bg-paper px-6 py-3.5 text-center text-sm font-semibold text-ink transition hover:bg-emerald-100"
                  >
                    Email me
                  </a>
                  <a
                    href={site.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-200/40 px-6 py-3.5 text-center text-sm font-semibold text-paper transition hover:bg-white/10"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-200/40 px-6 py-3.5 text-center text-sm font-semibold text-paper transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 label-mono text-ink-soft/70 md:flex-row">
          <p>&copy; 2026 {site.name}</p>
          <p>Next.js · TypeScript · Tailwind · Vercel</p>
        </div>
      </footer>
    </main>
  );
}
