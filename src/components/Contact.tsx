import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 — Contact
   Mobile: headline full-width, action panel below.
   Touch targets: min 44px height on buttons/links.
   No phone number (per PRD §9.6).
   ───────────────────────────────────────────── */

const GithubIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89C18.8 3.53 18.5 2 18.5 2s-1.2 0-3.2 1.5a11.5 11.5 0 0 0-6 0C7.3 2 6.1 2 6.1 2s-.3 1.53.2 3.11A5.5 5.5 0 0 0 4.8 9c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M4 19c-1.33 0-2.67-1-4-3" />
  </svg>
);

const LinkedinIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.554-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.536-1.387-.554-1.902-.039l-10.1 10.241c-.466.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l4.332 4.363c.467.467 1.111.662 1.824.662s1.357-.195 1.824-.662l2.697-2.606c.514-.515 1.365-.497 1.9.038.536.536.554 1.387.039 1.901z"/>
  </svg>
);

const EMAIL = 'sayokbiswas538@gmail.com';

const SOCIAL = [
  { label: 'GitHub',   handle: 'SAYOK3117',           href: 'https://github.com/SAYOK3117', Icon: GithubIcon },
  { label: 'LinkedIn', handle: 'sayok-biswas',         href: 'https://www.linkedin.com/in/sayok-biswas-479123387/', Icon: LinkedinIcon },
  { label: 'LeetCode', handle: 'sayok_biswas__07',     href: 'https://leetcode.com/u/sayok_biswas__07/', Icon: LeetCodeIcon },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fail silently
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full border-b border-outline bg-background"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-32">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pb-4 border-b border-outline mb-10 md:mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary block mb-1.5">
              CONTACT
            </span>
            <h2
              id="contact-heading"
              className="text-xl md:text-3xl font-normal text-on-surface tracking-tight font-[Geist]"
            >
              Contact
            </h2>
          </div>
        </div>

        {/* ── Two-column body — stacks on mobile ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <h3 className="text-on-surface text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] font-[Geist] mb-4 sm:mb-6">
              Let's build something.
            </h3>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Open to software engineering internships and collaborations.
            </p>
          </motion.div>

          {/* Right: action panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-3 sm:gap-4"
          >
            {/* Email card */}
            <div className="border border-outline bg-surface-container p-5 sm:p-6 flex flex-col gap-4 sm:gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary mb-2">
                  Email
                </p>
                <p className="font-mono text-xs sm:text-sm text-on-surface break-all">
                  {EMAIL}
                </p>
              </div>

              {/* Action buttons — stacked on very small, inline on sm+ */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] border border-outline text-on-surface-variant hover:border-outline-hover hover:text-on-surface transition-colors min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <rect x="4" y="1" width="7" height="8" stroke="currentColor" strokeWidth="1"/>
                        <rect x="1" y="3" width="7" height="8" stroke="currentColor" strokeWidth="1"/>
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  id="send-email-link"
                  aria-label="Send email"
                  className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] bg-secondary text-on-primary hover:bg-secondary-fixed transition-colors min-h-[44px]"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <rect x="1" y="2" width="10" height="8" stroke="currentColor" strokeWidth="1"/>
                    <path d="M1 3l5 4 5-4" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Social links — highly attractive glowing cards */}
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ label, handle, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`contact-${label.toLowerCase()}-link`}
                  aria-label={`${label} profile (opens in new tab)`}
                  className="group flex items-center justify-between px-5 sm:px-6 py-4 rounded-xl border border-outline bg-surface-container hover:bg-surface-container-high hover:border-secondary hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(184,155,114,0.15)] transition-all duration-300 min-h-[72px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full border border-outline group-hover:border-secondary/50 bg-background text-on-surface-variant group-hover:text-secondary group-hover:bg-secondary/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.1em] text-on-surface group-hover:text-secondary transition-colors duration-300">
                        {label}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs text-muted group-hover:text-on-surface-variant transition-colors duration-300">
                        {handle}
                      </span>
                    </div>
                  </div>
                  <span aria-hidden="true" className="font-mono text-[14px] text-muted group-hover:text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
