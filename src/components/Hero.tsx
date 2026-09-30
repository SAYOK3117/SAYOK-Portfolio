import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.554-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.536-1.387-.554-1.902-.039l-10.1 10.241c-.466.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l4.332 4.363c.467.467 1.111.662 1.824.662s1.357-.195 1.824-.662l2.697-2.606c.514-.515 1.365-.497 1.9.038.536.536.554 1.387.039 1.901z"/>
  </svg>
);

function PhotoCard() {
  return (
    <div className="border border-outline bg-surface-container p-2 sm:p-3 group transition-colors duration-300 hover:border-secondary w-full max-w-sm mx-auto lg:max-w-none">
      <div className="overflow-hidden border border-outline bg-background aspect-[3/4] sm:aspect-auto">
        <img
          src="/portrait.jpg"
          alt="Sayok Biswas — CSE student, PSIT Kanpur"
          className="w-full h-full sm:h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] block"
          style={{ filter: 'none' }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      {/* Caption bar */}
      <div className="px-3.5 py-3 border-t border-outline bg-surface-container flex items-center justify-between">
        <span className="font-mono text-xs text-on-surface font-medium tracking-wide">
          Sayok Biswas
        </span>
        <span className="font-mono text-xs text-on-surface-variant">
          PSIT Kanpur
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-32 border-b border-outline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center lg:items-start">

        {/* ── Left column ── */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="mb-6 sm:mb-8 md:mb-10">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-outline bg-surface-container text-[10px] font-mono text-secondary mb-5 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 bg-secondary inline-block" />
              CSE Student @ PSIT Kanpur
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface font-[Geist] uppercase mb-6 lg:mb-5"
            >
              SAYOK BISWAS
            </motion.h2>

            {/* Mobile Photo (Hidden on Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block lg:hidden mb-8 w-full"
            >
              <PhotoCard />
            </motion.div>

            {/* Hero headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-normal tracking-tight text-on-surface font-[Geist] leading-[1.15] mb-5 sm:mb-6"
            >
              Building software.<br />
              Exploring AI.<br />
              <span className="text-on-surface-variant">Learning by shipping.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-on-surface max-w-xl font-normal leading-relaxed"
            >
              CSE student building software and exploring AI.
            </motion.p>
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-6 md:pt-8 border-t border-outline"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3.5 sm:py-2.5 bg-secondary text-on-primary font-mono text-xs uppercase tracking-wider font-medium hover:bg-secondary-fixed transition-colors min-h-[48px] w-full sm:w-auto"
            >
              Selected Work ↓
            </a>
            {/* Secondary CTA — Resume PDF */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 sm:py-2.5 bg-transparent border border-outline text-on-surface hover:text-on-surface hover:border-secondary font-mono text-xs uppercase tracking-wider transition-colors min-h-[48px] w-full sm:w-auto"
            >
              Resume ↗
            </a>

            <div className="hidden sm:block h-4 w-px bg-outline mx-1" aria-hidden="true" />

            {/* Social icon links */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 mt-2 sm:mt-0 w-full sm:w-auto">
              <a href="https://github.com/SAYOK3117" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-on-surface hover:scale-110 transition-all p-2" aria-label="GitHub">
                <Github className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/sayok-biswas-479123387/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-on-surface hover:scale-110 transition-all p-2" aria-label="LinkedIn">
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a href="https://leetcode.com/u/sayok_biswas__07/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-on-surface hover:scale-110 transition-all p-2" aria-label="LeetCode">
                <LeetCodeIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right column: Desktop Photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block lg:col-span-5"
        >
          <PhotoCard />
        </motion.div>

      </div>
    </section>
  );
}
