import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = [
  'hero',
  'about',
  'experience',
  'projects',
  'stack',
  'security-dr',
  'ai',
  'contact',
];

export function Navbar({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-default bg-[rgb(var(--bg))]/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="container-max flex h-16 items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2.5" aria-label="Prabhu Karni — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev font-mono text-sm font-semibold text-accent-500 transition-colors group-hover:border-accent-500/50">
            PK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{profile.name}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex" role="list">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                role="listitem"
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] ${
                  isActive
                    ? 'text-[rgb(var(--text))] font-medium'
                    : 'text-muted hover:text-[rgb(var(--text))]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-colors hover:text-[rgb(var(--text))] hover:border-accent-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#resume"
            className="hidden rounded-lg border border-accent-500/40 bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-500 transition-colors hover:bg-accent-500/20 sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-b border-default bg-[rgb(var(--bg))] lg:hidden"
          >
            <div className="container-max flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                      isActive
                        ? 'bg-accent-500/10 text-accent-500 font-medium'
                        : 'text-muted hover:bg-elev hover:text-[rgb(var(--text))]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#resume"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg border border-accent-500/40 bg-accent-500/10 px-3 py-2.5 text-sm font-medium text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
