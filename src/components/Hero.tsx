import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 Hero — architectural SVG diagram
   Sourced verbatim from design/stitch-export/code.html
   No fake metrics or system data.
   ───────────────────────────────────────────── */
function AgentDiagram() {
  return (
    <div className="flex flex-col items-center w-full font-mono text-[10px] md:text-xs">
      {/* Coordinator Agent */}
      <div className="w-full sm:w-3/4 border border-[#B8A98A] bg-[#111111] py-2.5 px-2 text-center text-[#E5E2E1] font-medium tracking-wide">
        Coordinator Agent
      </div>

      {/* Vertical connector */}
      <div className="w-px h-5 border-l border-dashed border-[#6F6D68] opacity-70"></div>

      {/* Sub-agents Row */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-2 text-center text-[#A1A19A] font-medium">
          Spatial Agent
        </div>
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-2 text-center text-[#A1A19A] font-medium">
          Reasoning Agent
        </div>
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-2 text-center text-[#A1A19A] font-medium">
          Advisory Agent
        </div>
      </div>

      {/* Vertical connector */}
      <div className="w-px h-5 border-l border-dashed border-[#6F6D68] opacity-70"></div>

      {/* Synthesis */}
      <div className="w-full sm:w-3/4 border border-[#B8A98A] bg-[#111111] py-2.5 px-2 text-center text-[#E5E2E1] font-medium tracking-wide">
        Synthesis & UI Canvas
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-32 border-b border-[#252525]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* ── Left column ── */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="mb-8 md:mb-10">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#252525] bg-[#141414] text-[10px] font-mono text-[#B8A98A] mb-5 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#B8A98A] inline-block" />
              CSE Student @ PSIT Kanpur
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white font-[Geist] uppercase mb-4 sm:mb-5"
            >
              SAYOK BISWAS
            </motion.h2>

            {/* Hero headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-normal tracking-tight text-white font-[Geist] leading-[1.15] mb-5 sm:mb-6"
            >
              Building software.<br />
              Exploring AI.<br />
              <span className="text-[#A1A19A]">Learning by shipping.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base md:text-lg text-[#E5E2E1] max-w-xl font-normal leading-relaxed"
            >
              CSE student building software and exploring AI.
            </motion.p>
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-6 md:pt-8 border-t border-[#252525]"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3.5 sm:py-2.5 bg-white text-[#0D0D0D] font-mono text-xs uppercase tracking-wider font-medium hover:bg-[#C9BC9F] transition-colors min-h-[48px] w-full sm:w-auto"
            >
              Selected Work ↓
            </a>
            {/* Secondary CTA — Resume PDF */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 sm:py-2.5 bg-transparent border border-[#252525] text-[#E5E2E1] hover:text-white hover:border-[#B8A98A] font-mono text-xs uppercase tracking-wider transition-colors min-h-[48px] w-full sm:w-auto"
            >
              Resume ↗
            </a>

            <div className="hidden sm:block h-4 w-px bg-[#252525] mx-1" aria-hidden="true" />

            {/* Social inline links */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 text-xs font-mono text-[#A1A19A] mt-2 sm:mt-0 w-full sm:w-auto">
              <a href="https://github.com/SAYOK3117"   target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/sayok-biswas-479123387/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/sayok_biswas__07/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2">LeetCode ↗</a>
            </div>
          </motion.div>
        </div>

        {/* ── Right column: architectural diagram ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="border border-[#252525] bg-[#141414] p-4 sm:p-6 md:p-7">
            {/* Card header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#252525] mb-4 sm:mb-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8A98A]">
                SYSTEM ARCHITECTURE
              </span>
              <span className="font-mono text-[10px] text-[#A1A19A]">
                AGENT COORDINATION
              </span>
            </div>

            {/* SVG diagram */}
            <div className="border border-[#252525] bg-[#111111] p-3 sm:p-5 mb-4 sm:mb-6">
              <AgentDiagram />
            </div>

            {/* Metadata rows */}
            <div className="space-y-2 text-[10px] font-mono text-[#A1A19A]">
              <div className="flex items-center justify-between">
                <span className="text-[#B8A98A] font-medium">Model:</span>
                <span>Autonomous multi-agent consensus</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#B8A98A] font-medium">Interface:</span>
                <span>Reactive map visualization</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
