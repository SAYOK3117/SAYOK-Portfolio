import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 — Skills & Stack
   3-column editorial grid, 2 rows:
   Row 1: Languages | Frontend | Backend
   Row 2: AI / ML  | Geospatial & Foundations | Developer Tools
   Mobile: single column, full-width stacked.
   No ratings, bars, or proficiency levels.
   ───────────────────────────────────────────── */

interface SkillCol {
  category: string;
  note?: string;
  skills: string[];
}

const ROW1: SkillCol[] = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Flask'],
  },
];

const ROW2: SkillCol[] = [
  {
    category: 'AI / ML',
    note: 'actively developing',
    skills: [
      'Agentic AI',
      'Multi-Agent Systems',
      'Reinforcement Learning',
      'LLM Integration',
      'Generative AI',
    ],
  },
  {
    category: 'Geospatial & Foundations',
    skills: [
      'Leaflet',
      'OpenStreetMap',
      'Data Structures & Algorithms (C++)',
    ],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Vercel', 'Google Stitch', 'Antigravity IDE'],
  },
];

function SkillColumn({ col, delay }: { col: SkillCol; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay }}
      className="bg-background p-5 sm:p-7 flex flex-col gap-4 sm:gap-5"
    >
      <div className="flex items-baseline gap-3 flex-wrap">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
          {col.category}
        </p>
        {col.note && (
          <span className="font-mono text-[9px] text-muted italic">
            {col.note}
          </span>
        )}
      </div>

      <ul className="flex flex-col gap-2" role="list">
        {col.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2.5 text-sm text-on-surface leading-snug">
            <span aria-hidden="true" className="w-1 h-1 shrink-0 bg-outline-hover" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full border-b border-outline bg-background"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-32">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pb-4 border-b border-outline mb-0">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary block mb-1.5">
              SKILLS &amp; STACK
            </span>
            <h2
              id="skills-heading"
              className="text-xl md:text-3xl font-normal text-on-surface tracking-tight font-[Geist]"
            >
              Stack
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hidden sm:inline-block pb-0.5">
            Actively Developing
          </span>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline border-b border-outline">
          {ROW1.map((col, i) => (
            <SkillColumn key={col.category} col={col} delay={i * 0.06} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline">
          {ROW2.map((col, i) => (
            <SkillColumn key={col.category} col={col} delay={0.18 + i * 0.06} />
          ))}
        </div>

        <p className="mt-6 sm:mt-8 font-mono text-[10px] text-muted leading-relaxed max-w-lg">
          AI / GenAI / Agentic AI listed as actively developing areas — not
          claimed as mastery. All entries sourced from verified project work.
        </p>
      </div>
    </section>
  );
}
