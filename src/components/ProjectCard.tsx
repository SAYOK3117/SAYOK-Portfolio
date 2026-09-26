import { motion } from 'framer-motion';
import { type Project } from '../data/projects';

/* ─────────────────────────────────────────────
   Stitch V2 — Secondary ProjectCard
   Mobile-safe: min touch targets, no overflow
   ───────────────────────────────────────────── */

interface ProjectCardProps {
  project: Project;
  index: number;
}

function CardInner({ project }: { project: Project }) {
  return (
    <div className="group bg-[#111111] border border-[#252525] hover:border-[#3E3E3E] transition-colors h-full flex flex-col">
      {/* Top bar */}
      <div className="flex items-center px-4 sm:px-6 py-3 sm:py-3.5 border-b border-[#252525]">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B8A98A] leading-tight">
          {project.context}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[#E5E2E1] text-lg sm:text-xl font-normal tracking-tight leading-snug font-[Geist]">
            {project.title}
          </h3>
          <p className="text-[#A1A19A] text-sm leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#252525]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase tracking-wide text-[#6F6D68] border border-[#252525] bg-[#0D0D0D] px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
          <CardInner project={project} />
        </a>
      ) : (
        <CardInner project={project} />
      )}
    </motion.div>
  );
}
