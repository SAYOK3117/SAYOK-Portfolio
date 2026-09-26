/* ─────────────────────────────────────────────
   Stitch V2 — Footer
   Mobile: stacks identity → nav → social → copy.
   1px #252525 top border. No shadows.
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
    <footer role="contentinfo" className="w-full border-t border-[#252525] bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Main footer row — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 sm:py-12 border-b border-[#252525]">

          {/* Identity */}
          <div className="flex flex-col gap-1.5">
            <p className="font-[Geist] text-sm font-normal text-[#E5E2E1]">
              Sayok Biswas
            </p>
            <p className="font-mono text-[10px] text-[#6F6D68]">
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
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A1A19A] hover:text-[#E5E2E1] transition-colors py-1 inline-block"
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
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A1A19A] hover:text-[#E5E2E1] transition-colors py-1 inline-block"
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
          <p className="font-mono text-[10px] text-[#6F6D68]">
            © {year} Sayok Biswas
          </p>
          <p className="font-mono text-[10px] text-[#6F6D68]">
            Built with React · TypeScript · Vite
          </p>
        </div>

      </div>
    </footer>
  );
}
