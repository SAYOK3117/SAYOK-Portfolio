import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 — Journey
   Desktop: horizontal editorial table rows.
   Mobile: each row stacks period / title / context
   cleanly — no horizontal overflow.
   ───────────────────────────────────────────── */

interface JourneyEntry {
  period: string;
  title: string;
  context: string;
  tag?: string;
  ongoing?: boolean;
}

const entries: JourneyEntry[] = [
  { period: 'Jan 2026', title: 'AI Interviewer',  context: 'College Mini Project' },
  { period: 'Feb 2026', title: 'SmartFlow',        context: 'Scaler School Project' },
  { period: 'Jul 2026', title: 'Nagrik Setu',      context: 'College SIH Internal' },
  { period: 'Aug 2026', title: 'TrainControl',     context: 'College SIH Internal', tag: 'Secondary Project' },
  { period: '2026',     title: 'ORCA',             context: 'Smart India Hackathon 2026', tag: 'Round 2 Ongoing', ongoing: true },
];

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="w-full border-b border-outline bg-background"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-32">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pb-4 border-b border-outline mb-0">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary block mb-1.5">
              JOURNEY
            </span>
            <h2
              id="journey-heading"
              className="text-xl md:text-3xl font-normal text-on-surface tracking-tight font-[Geist]"
            >
              Build log
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hidden sm:inline-block pb-0.5">
            2026
          </span>
        </div>

        {/* ── Desktop column header ── */}
        <div className="hidden md:grid grid-cols-12 border-b border-outline py-3">
          <span className="col-span-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">#</span>
          <span className="col-span-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Period</span>
          <span className="col-span-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Project</span>
          <span className="col-span-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Context</span>
          <span className="col-span-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted text-right">Tag</span>
        </div>

        {/* ── Entry rows ── */}
        <ol role="list">
          {entries.map((entry, i) => (
            <motion.li
              key={entry.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`border-b border-outline transition-colors duration-150 ${
                entry.ongoing
                  ? 'bg-surface-container hover:bg-surface-container-high'
                  : 'bg-background hover:bg-surface-container'
              }`}
            >
              {/* Desktop row */}
              <div className="hidden md:grid grid-cols-12 items-center py-5">
                <span className="col-span-1 font-mono text-[10px] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
                  {entry.period}
                </span>
                <span className={`col-span-3 font-[Geist] text-base font-normal tracking-tight ${entry.ongoing ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  {entry.title}
                </span>
                <span className="col-span-4 font-mono text-[10px] text-muted tracking-wide">
                  {entry.context}
                </span>
                <span className="col-span-2 flex justify-end">
                  {entry.tag && (
                    <span className={`font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-1 border ${entry.ongoing ? 'border-secondary text-secondary' : 'border-outline text-muted'}`}>
                      {entry.tag}
                    </span>
                  )}
                </span>
              </div>

              {/* Mobile row — compact, no overflow */}
              <div className="md:hidden py-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant shrink-0">
                    {entry.period}
                  </span>
                  {entry.tag && (
                    <span className={`font-mono text-[9px] uppercase tracking-[0.1em] px-2 py-0.5 border shrink-0 ${entry.ongoing ? 'border-secondary text-secondary' : 'border-outline text-muted'}`}>
                      {entry.tag}
                    </span>
                  )}
                </div>
                <span className={`block font-[Geist] text-base font-normal tracking-tight mb-0.5 ${entry.ongoing ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  {entry.title}
                </span>
                <span className="block font-mono text-[10px] text-muted">
                  {entry.context}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* ── Callout below table ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6"
        >
          <div className="border-l-2 border-secondary pl-4 sm:pl-5">
            <p className="text-on-surface text-base sm:text-lg font-normal leading-snug font-[Geist]">
              5 projects. One year.
            </p>
            <p className="text-muted font-mono text-[10px] mt-1">
              Jan 2026 → ongoing
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-secondary inline-block" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              ORCA — Active
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
