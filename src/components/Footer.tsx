/* ─────────────────────────────────────────────
   Stitch V2 — Footer
   Mobile: stacks identity → nav → social → copy.
   1px #292824 top border. No shadows.
   ───────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
] as const;

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/SAYOK3117' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayok-biswas-479123387/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/sayok_biswas__07/' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="w-full border-t border-outline bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">

        {/* Main footer row — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 sm:py-12 border-b border-outline">

          {/* Identity */}
          <div className="flex flex-col gap-1.5">
            <p className="font-[Geist] text-sm font-normal text-on-surface">
              Sayok Biswas
            </p>
            <p className="font-mono text-[10px] text-muted">
              CSE @ PSIT Kanpur
            </p>
          </div>

          {/* Page nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-on-surface transition-colors py-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <nav aria-label="Social links" className="sm:text-right">
            <ul className="flex flex-wrap sm:justify-end gap-x-5 gap-y-2.5" role="list">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in new tab)`}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-on-surface transition-colors py-1 inline-block"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright strip */}
        <div className="py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-muted">
            © {year} Sayok Biswas
          </p>
          <p className="font-mono text-[10px] text-muted">
            Built with React · TypeScript · Vite
          </p>
        </div>

      </div>
    </footer>
  );
}
