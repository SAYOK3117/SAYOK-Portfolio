import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

/* ─────────────────────────────────────────────
   Stitch V2 — ORCA Architecture SVG
   Abstract 5-agent topology from PRD contributions.
   No fake metrics or invented node labels.
   ───────────────────────────────────────────── */
function OrcaArchDiagram() {
  return (
    <div className="flex flex-col items-center w-full font-mono text-[9px] sm:text-[10px] md:text-xs">
      <div className="w-full sm:w-3/4 border border-[#B8A98A] bg-[#111111] py-2.5 px-2 text-center text-[#E5E2E1] font-medium tracking-wide">
        Coordinator Agent
      </div>

      <div className="w-px h-5 border-l border-dashed border-[#6F6D68] opacity-70"></div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-1 text-center text-[#A1A19A] font-medium">
          Spatial Agent
        </div>
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-1 text-center text-[#A1A19A] font-medium">
          Reasoning Agent
        </div>
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-1 text-center text-[#A1A19A] font-medium">
          Advisory Agent
        </div>
      </div>

      <div className="w-px h-5 border-l border-dashed border-[#6F6D68] opacity-70"></div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="flex-1 border border-[#3E3E3E] bg-[#111111] py-2.5 px-1 text-center text-[#A1A19A] font-medium">
          Ingestion Layer
        </div>
        <div className="flex-1 border border-[#B8A98A] bg-[#111111] py-2.5 px-1 text-center text-[#E5E2E1] font-medium tracking-wide">
          Synthesis Layer
        </div>
      </div>

      <div className="w-px h-5 border-l border-dashed border-[#6F6D68] opacity-70"></div>

      <div className="w-full sm:w-2/3 border border-[#B8A98A] bg-[#111111] py-2.5 px-2 text-center text-[#B8A98A] font-medium tracking-wide">
        UI / Tactical Map
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Stitch V2 — Projects
   Mobile: all columns stack vertically.
   ───────────────────────────────────────────── */
export function Projects() {
  const flagship  = projects.find((p) => p.flagship)!;
  const secondary = projects.filter((p) => !p.flagship);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full border-b border-[#252525] bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-32">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pb-4 border-b border-[#252525] mb-10 md:mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A] block mb-1.5">
              02 / SELECTED WORK
            </span>
            <h2
              id="projects-heading"
              className="text-xl md:text-3xl font-normal text-white tracking-tight font-[Geist]"
            >
              Projects
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A1A19A] hidden sm:inline-block pb-0.5">
            2026
          </span>
        </div>

        {/* ════════════════════════════
            ORCA — Flagship block
        ════════════════════════════ */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="border border-[#252525] bg-[#111111] mb-3 sm:mb-4 hover:border-[#4A4A4A] transition-colors duration-200"
        >
          {/* Card header bar */}
          <div className="flex items-center justify-between px-4 sm:px-7 py-3 sm:py-3.5 border-b border-[#252525]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A]">
              Flagship Project
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#A1A19A]">
              {flagship.context}
            </span>
          </div>

          {/* Two-column body — stacks on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left: title + contributions + stack */}
            <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col gap-6 sm:gap-8 border-b lg:border-b-0 lg:border-r border-[#252525]">

              <div>
                <h3 className="text-[#E5E2E1] text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.1] font-[Geist] mb-2">
                  {flagship.title}
                </h3>
                <p className="text-[#A1A19A] text-sm leading-relaxed">
                  {flagship.subtitle}
                </p>
              </div>

              {/* Contributions */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A] mb-3 sm:mb-4">
                  Contributions
                </p>
                <ul className="space-y-2">
                  {flagship.contributions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1 h-1 shrink-0 bg-[#6F6D68]" />
                      <span className="text-[#E5E2E1] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack pills */}
              <div className="mt-auto">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A] mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {flagship.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] uppercase tracking-wide text-[#A1A19A] border border-[#252525] bg-[#0D0D0D] px-2 sm:px-2.5 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: ORCA diagram + metadata */}
            <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col gap-5 sm:gap-7">

              <div className="flex items-center justify-between border-b border-[#252525] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8A98A]">
                  5-Agent Neural Brain
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A1A19A]">
                  Architecture
                </span>
              </div>

              {/* Architecture SVG — scales naturally on mobile */}
              <div className="border border-[#252525] bg-[#111111] p-3 sm:p-5">
                <OrcaArchDiagram />
              </div>

              {/* Metadata rows — PRD-verified only */}
              <div className="space-y-2 border border-[#252525] bg-[#141414] p-3 sm:p-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#B8A98A] uppercase tracking-[0.15em]">Context</span>
                  <span className="text-[#A1A19A]">Smart India Hackathon 2026</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#B8A98A] uppercase tracking-[0.15em]">Interface</span>
                  <span className="text-[#A1A19A]">Tactical Map · Advisory Card</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#B8A98A] uppercase tracking-[0.15em]">Geo layer</span>
                  <span className="text-[#A1A19A]">Leaflet / OpenStreetMap</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#B8A98A] uppercase tracking-[0.15em]">Status</span>
                  <span className="text-[#A1A19A]">Round 2 — Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ════════════════════════════
            Secondary projects — 2-col grid
        ════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#252525]">
          {secondary.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
