import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 — Achievements
   Minimal. Only verified facts from PRD.
   Mobile: card full-width, stacked columns.
   ───────────────────────────────────────────── */
export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="w-full border-b border-[#252525] bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-32">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pb-4 border-b border-[#252525] mb-10 md:mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A] block mb-1.5">
              05 / ACHIEVEMENTS
            </span>
            <h2
              id="achievements-heading"
              className="text-xl md:text-3xl font-normal text-white tracking-tight font-[Geist]"
            >
              Recognition
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A1A19A] hidden sm:inline-block pb-0.5">
            2026
          </span>
        </div>

        {/* Achievement card — stacks on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-12 gap-px bg-[#252525] max-w-3xl"
        >
          {/* Left: event */}
          <div className="sm:col-span-5 bg-[#141414] px-5 sm:px-7 py-6 sm:py-7 flex flex-col justify-between gap-5 sm:gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A]">
                Hackathon
              </p>
              <h3 className="text-[#E5E2E1] text-base sm:text-lg font-normal tracking-tight font-[Geist]">
                Smart India Hackathon 2026
              </h3>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1.5 border border-[#B8A98A] text-[#B8A98A] self-start">
              Round 2 Ongoing
            </span>
          </div>

          {/* Right: project detail */}
          <div className="sm:col-span-7 bg-[#111111] px-5 sm:px-7 py-6 sm:py-7 flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A]">
                Project
              </p>
              <h4 className="text-[#E5E2E1] text-xl sm:text-2xl font-normal tracking-tight font-[Geist]">
                ORCA
              </h4>
              <p className="text-[#A1A19A] text-sm leading-relaxed">
                Marine EcOsystem Reasoning with Collaborative Agents
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-[#252525]">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#6F6D68]">Status</span>
                <span className="font-mono text-[10px] text-[#A1A19A]">Round 2 — Ongoing</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#6F6D68]">Scope</span>
                <span className="font-mono text-[10px] text-[#A1A19A]">National</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#6F6D68]">Year</span>
                <span className="font-mono text-[10px] text-[#A1A19A]">2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-8 sm:mt-10 font-mono text-[10px] text-[#6F6D68] leading-relaxed max-w-lg">
          Additional achievements and statistics will be added when confirmed.
        </p>
      </div>
    </section>
  );
}
