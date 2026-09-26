import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 — About
   Two-column: portrait (5/12) + bio (7/12)
   Mobile: stacks portrait first, bio below.
   Tokens: Geist headline, JetBrains Mono labels
   Borders: 1px #252525, no radius, no shadows
   ───────────────────────────────────────────── */

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full border-b border-[#252525] bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pb-4 border-b border-[#252525] mb-10 md:mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A] block mb-1.5">
              01 / PROFILE
            </span>
            <h2
              id="about-heading"
              className="text-xl md:text-3xl font-normal text-white tracking-tight font-[Geist]"
            >
              About
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A1A19A] hidden sm:inline-block pb-0.5">
            STUDENT &amp; BUILDER
          </span>
        </div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* ── Portrait column (5/12) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            {/* Double-border portrait card */}
            <div className="border border-[#252525] bg-[#141414] p-2 group transition-colors duration-300 hover:border-[#B8A98A]">
              <div className="overflow-hidden border border-[#252525] bg-[#080808]">
                <img
                  src="/portrait.jpg"
                  alt="Sayok Biswas — CSE student, PSIT Kanpur"
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] block"
                  style={{ filter: 'none' }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              {/* Caption bar */}
              <div className="px-3.5 py-3 border-t border-[#252525] bg-[#141414] flex items-center justify-between">
                <span className="font-mono text-xs text-white font-medium tracking-wide">
                  Sayok Biswas
                </span>
                <span className="font-mono text-xs text-[#A1A19A]">
                  PSIT Kanpur
                </span>
              </div>
            </div>

            {/* Metadata strip below portrait */}
            <div className="mt-3 border border-[#252525] bg-[#141414]">
              <div className="flex items-center border-b border-[#252525]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B8A98A] px-3 sm:px-4 py-2.5 border-r border-[#252525] w-24 sm:w-28 shrink-0">
                  Degree
                </span>
                <span className="font-mono text-[10px] text-[#A1A19A] px-3 sm:px-4 py-2.5">
                  B.Tech CSE — 2nd Year
                </span>
              </div>
              <div className="flex items-center border-b border-[#252525]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B8A98A] px-3 sm:px-4 py-2.5 border-r border-[#252525] w-24 sm:w-28 shrink-0">
                  Location
                </span>
                <span className="font-mono text-[10px] text-[#A1A19A] px-3 sm:px-4 py-2.5">
                  Kanpur, India
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B8A98A] px-3 sm:px-4 py-2.5 border-r border-[#252525] w-24 sm:w-28 shrink-0">
                  Status
                </span>
                <span className="font-mono text-[10px] text-[#A1A19A] px-3 sm:px-4 py-2.5">
                  SIH 2026 — Round 2 Ongoing
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Bio column (7/12) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-7 md:gap-10 pt-0 lg:pt-1"
          >
            {/* PRD-approved bio */}
            <div className="border-l-2 border-[#B8A98A] pl-4 sm:pl-6 py-1">
              <p className="text-base md:text-xl text-[#E5E2E1] font-normal leading-relaxed font-[Geist]">
                I'm a Computer Science student at PSIT Kanpur building software
                and exploring AI through hackathons and college projects. My
                current focus is ORCA, a multi-agent system built for Smart India
                Hackathon 2026 that reasons over marine ecosystem data — I've
                worked on its frontend, its tactical map and advisory interfaces,
                and its explainable multi-agent workflow. Alongside that, I've
                built an AI-based grievance platform, a reinforcement-learning
                train control system, a multi-agent traffic system, and an AI
                interviewer tool. I'm actively developing my skills in Generative
                AI and agentic systems while building toward a software engineering
                role.
              </p>
            </div>

            {/* Two info panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="border border-[#252525] bg-[#141414] p-5 sm:p-6 flex flex-col gap-3">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A]">
                  Academic Base
                </h3>
                <p className="text-sm text-[#A1A19A] leading-relaxed">
                  Computer Science and Engineering undergraduate pursuing core
                  foundations in algorithmic complexity, data structures, and
                  computer science systems.
                </p>
              </div>
              <div className="border border-[#252525] bg-[#141414] p-5 sm:p-6 flex flex-col gap-3">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A]">
                  Engineering Focus
                </h3>
                <p className="text-sm text-[#A1A19A] leading-relaxed">
                  Active emphasis on building complete web applications,
                  interactive geospatial tools, and multi-agent coordination
                  frameworks.
                </p>
              </div>
            </div>

            {/* Stack quick-view row */}
            <div className="border border-[#252525] bg-[#141414] p-4 sm:p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A] mb-3 sm:mb-4">
                Current Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Python', 'FastAPI', 'Leaflet', 'Agentic AI', 'C++'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wide text-[#A1A19A] border border-[#252525] bg-[#0D0D0D] px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
