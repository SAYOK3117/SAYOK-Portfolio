import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

/* ─────────────────────────────────────────────
   Stitch V2 — ORCA Architecture SVG
   Abstract 5-agent topology from PRD contributions.
   No fake metrics or invented node labels.
   ───────────────────────────────────────────── */
function OrcaArchDiagram() {
  const topNodes = [
    { x: 80,  label: 'Spatial' },
    { x: 190, label: 'Reasoning' },
    { x: 300, label: 'Advisory' },
  ];
  const botNodes = [
    { x: 120, label: 'Ingestion' },
    { x: 260, label: 'Synthesis' },
  ];
  const coordY = 22;
  const topY   = 82;
  const botY   = 142;

  return (
    <svg
      viewBox="0 0 380 190"
      fill="none"
      stroke="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {topNodes.map((n) => (
        <line key={`c-${n.label}`}
          x1={190} y1={coordY + 22} x2={n.x} y2={topY - 12}
          stroke="#6F6D68" strokeOpacity="0.65" strokeDasharray="3 3" />
      ))}
      <line x1={80}  y1={topY + 22} x2={120} y2={botY - 12} stroke="#6F6D68" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1={190} y1={topY + 22} x2={120} y2={botY - 12} stroke="#6F6D68" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1={190} y1={topY + 22} x2={260} y2={botY - 12} stroke="#6F6D68" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1={300} y1={topY + 22} x2={260} y2={botY - 12} stroke="#6F6D68" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1={120} y1={botY + 22} x2={260} y2={botY + 22} stroke="#6F6D68" strokeOpacity="0.4" strokeDasharray="3 3" />
      <line x1={190} y1={botY + 22} x2={190} y2={botY + 34} stroke="#6F6D68" strokeOpacity="0.4" strokeDasharray="3 3" />

      <rect x={108} y={coordY} width={164} height={22} fill="#111111" stroke="#B8A98A" strokeWidth="1" />
      <text x={190} y={coordY + 15} textAnchor="middle" fill="#E5E2E1"
        fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">
        Coordinator Agent
      </text>

      {topNodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x - 52} y={topY - 12} width={104} height={22} fill="#111111" stroke="#3E3E3E" strokeWidth="1" />
          <text x={n.x} y={topY + 4} textAnchor="middle" fill="#A1A19A"
            fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500">
            {n.label} Agent
          </text>
        </g>
      ))}

      {botNodes.map((n, i) => (
        <g key={n.label}>
          <rect x={n.x - 58} y={botY - 12} width={116} height={22}
            fill="#111111" stroke={i === 1 ? '#B8A98A' : '#3E3E3E'} strokeWidth="1" />
          <text x={n.x} y={botY + 4} textAnchor="middle"
            fill={i === 1 ? '#E5E2E1' : '#A1A19A'}
            fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500">
            {n.label} Layer
          </text>
        </g>
      ))}

      <rect x={135} y={botY + 34} width={110} height={20} fill="#111111" stroke="#B8A98A" strokeWidth="1" />
      <text x={190} y={botY + 48} textAnchor="middle" fill="#B8A98A"
        fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500">
        UI / Tactical Map
      </text>
    </svg>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32">

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
