import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Stitch V2 — Contact
   Mobile: headline full-width, action panel below.
   Touch targets: min 44px height on buttons/links.
   No phone number (per PRD §9.6).
   ───────────────────────────────────────────── */

const EMAIL = 'sayokbiswas538@gmail.com';

const SOCIAL = [
  { label: 'GitHub',   handle: 'SAYOK3117',           href: 'https://github.com/SAYOK3117' },
  { label: 'LinkedIn', handle: 'sayok-biswas',         href: 'https://www.linkedin.com/in/sayok-biswas-479123387/' },
  { label: 'LeetCode', handle: 'sayok_biswas__07',     href: 'https://leetcode.com/u/sayok_biswas__07/' },
] as const;

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

            {/* Social links — full-width rows */}
            <div className="flex flex-col gap-px bg-outline">
              {SOCIAL.map(({ label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`contact-${label.toLowerCase()}-link`}
                  aria-label={`${label} profile (opens in new tab)`}
                  className="flex items-center justify-between px-5 sm:px-6 py-4 bg-surface-container hover:bg-surface-container-high transition-colors group min-h-[52px]"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-secondary">
                      {label}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {handle}
                    </span>
                  </div>
                  <span aria-hidden="true" className="font-mono text-[10px] text-muted group-hover:text-on-surface-variant transition-colors">
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
