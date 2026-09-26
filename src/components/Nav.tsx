import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/* ─────────────────────────────────────────────
   Stitch V2 — Nav
   Scroll-aware: bg deepens + border brightens
   once user has scrolled past 8px.
   Smooth anchor clicks with offset for fixed nav.
   prefers-reduced-motion: collapses all motion.
   ───────────────────────────────────────────── */

const NAV_LINKS = [
  { name: 'About',        href: '#about' },
  { name: 'Work',         href: '#projects' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Journey',      href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact',      href: '#contact' },
];

export function Nav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  /* Scroll detection — passive listener, no continuous work */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on resize to md+ */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Smooth anchor scroll with nav-height offset */
  const handleAnchor = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    const el = id ? document.getElementById(id) : document.documentElement;
    if (!el) return;
    const navH = window.innerWidth >= 768 ? 64 : 56; // h-16 / h-14
    const top  = id
      ? el.getBoundingClientRect().top + window.scrollY - navH
      : 0;
    window.scrollTo({ top, behavior: shouldReduce ? 'auto' : 'smooth' });
  }, [shouldReduce]);

  const drawerVariants = {
    hidden:  { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0  },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0D0D0D] border-[#3E3E3E]'
          : 'bg-[#0D0D0D]/95 backdrop-blur-sm border-[#252525]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 h-14 md:h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleAnchor(e, '#')}
          className="font-mono text-xs sm:text-sm tracking-widest text-white uppercase font-semibold hover:text-[#B8A98A] transition-colors duration-200"
        >
          SAYOK BISWAS
        </a>

        {/* Desktop nav */}
        <nav 
          className="hidden md:flex items-center gap-7" 
          aria-label="Primary navigation"
          onMouseLeave={() => setHoveredNav(null)}
        >
          <AnimatePresence>
            <div className="flex items-center gap-7 text-xs font-mono text-[#A1A19A]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className="relative hover:text-white transition-colors duration-200 py-1 z-10"
                >
                  {link.name}
                  {hoveredNav === link.name && !shouldReduce && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute -inset-x-3 -inset-y-1.5 bg-[#1A1A1A] border border-[#3E3E3E] rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredNav('Resume')}
              className="relative font-mono text-xs text-[#E5E2E1] hover:text-white border border-[#252525] hover:border-[#B8A98A] px-3 py-1.5 transition-colors duration-200 uppercase tracking-wider flex items-center gap-1.5 z-10"
            >
              Resume <span className="text-[#B8A98A]">↗</span>
              {hoveredNav === 'Resume' && !shouldReduce && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-[#1A1A1A] border border-[#3E3E3E] rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
            </a>
          </AnimatePresence>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#A1A19A] hover:text-white transition-colors duration-200 p-2 -mr-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            key="mobile-nav"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={shouldReduce ? {} : drawerVariants}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="md:hidden bg-[#0D0D0D] border-b border-[#252525]"
          >
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#A1A19A] hover:text-white hover:bg-[#141414] transition-colors duration-150 px-5 sm:px-6 py-4 border-b border-[#252525] min-h-[48px]"
                  onClick={(e) => handleAnchor(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#B8A98A] hover:bg-[#141414] transition-colors duration-150 px-5 sm:px-6 py-4 min-h-[48px]"
                onClick={() => setOpen(false)}
              >
                <span>Resume</span>
                <span>↗</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
