import { ProjectCarousel } from "@/components/project-carousel";
import { demoProjects, site, skills, workHighlights } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,#d9f99d_0,#f7fee7_28%,#fafaf9_58%,#f5f5f4_100%)] font-sans text-stone-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden bg-[url('/background.png')] bg-cover bg-center bg-no-repeat opacity-90 lg:block"
      />

      <nav className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-7">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-emerald-950"
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
          <a href="#work" className="hover:text-emerald-800">
            Work
          </a>
          <a href="#demos" className="hover:text-emerald-800">
            Public Demos
          </a>
          <a href="#skills" className="hover:text-emerald-800">
            Skills
          </a>
          <a href="#contact" className="hover:text-emerald-800">
            Contact
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-12 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur">
            Applied AI Engineer • Computer Vision • Sensor Fusion • R&D Software
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-emerald-950 md:text-7xl">
            I build AI-driven software tools for technical, real-world systems.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            I am a computer engineer focused on applied AI, computer vision,
            sensor fusion, simulation, and automation tools. My work connects
            software engineering with technical R&D, helping turn complex data
            and system behavior into useful, reliable outputs.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#demos"
              className="rounded-full bg-emerald-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900"
            >
              View Public Demo Projects
            </a>
            <a
              href={site.resume}
              className="rounded-full border border-emerald-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-emerald-900 transition hover:border-emerald-600 hover:bg-white"
            >
              Download Resume
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
            <div className="rounded-lg border border-emerald-100 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="text-2xl font-bold text-emerald-950">AI / ML</p>
              <p className="mt-2 text-sm text-stone-600">
                Computer vision, fusion, automation, and LLM-based tools.
              </p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="text-2xl font-bold text-emerald-950">R&D</p>
              <p className="mt-2 text-sm text-stone-600">
                Technical software for engineering programs and simulations.
              </p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="text-2xl font-bold text-emerald-950">Build</p>
              <p className="mt-2 text-sm text-stone-600">
                Practical tools, clean interfaces, and reliable workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative z-10 border-t border-emerald-100 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Selected Technical Work
              </p>
              <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
                Sanitized experience summaries
              </h2>
            </div>
            <p className="max-w-xl text-stone-600">
              Some work is summarized at a high level due to contractual and
              confidentiality constraints. No proprietary code, customer details,
              restricted datasets, or sensitive system information is included.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-emerald-100 bg-white/80 p-6 shadow-sm shadow-emerald-950/5 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
              >
                <p className="text-sm font-medium text-emerald-700">
                  {item.type}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-stone-600">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                    Non-confidential summary
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="demos"
        className="relative z-10 border-t border-emerald-100 bg-white/35 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Public Demo Projects
              </p>
              <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
                Public projects built for review
              </h2>
            </div>
            <p className="max-w-xl text-stone-600">
              These projects demonstrate implementation ability using open data,
              local tooling, and non-sensitive workflows across AI retrieval,
              computer vision visualization, and backend API architecture.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm shadow-emerald-950/5">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
              Local Demo Note
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-700">
              These portfolio projects are local technical demos rather than
              deployed production applications. They cover local AI retrieval,
              computer vision dashboarding, and backend API architecture using
              public, non-sensitive workflows. Each GitHub repository includes
              setup instructions and the local workflow needed to run or review
              the project.
            </p>
          </div>

          <ProjectCarousel projects={demoProjects} />
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 border-t border-emerald-100 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Technical Strengths
          </p>
          <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
            Skills & Tools
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-emerald-100 bg-white/75 p-6 shadow-sm shadow-emerald-950/5"
              >
                <h3 className="font-semibold text-emerald-950">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-stone-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 border-t border-emerald-100 px-6 py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
              Software engineer with an R&D mindset.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              I work at the intersection of software engineering, AI, simulation,
              and technical research. My experience includes computer vision
              pipelines, multi-spectral sensor workflows, physics-based modeling,
              and AI-powered internal tools for automation and decision support.
            </p>
            <p>
              I am interested in software engineering roles where I can build
              useful systems, work with complex data, and contribute to products
              that require both strong engineering judgment and practical
              implementation.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 border-t border-emerald-100 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl rounded-lg border border-emerald-200 bg-emerald-950 p-8 text-white shadow-lg shadow-emerald-950/20 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let&apos;s connect.
              </h2>
              <p className="mt-4 max-w-2xl text-emerald-50/80">
                I am open to software engineering, applied AI, automation, and
                R&D-focused technical software roles.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50"
              >
                Email Me
              </a>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-200 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-200 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-emerald-100 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 text-sm text-stone-500 md:flex-row">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
