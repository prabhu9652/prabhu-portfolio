import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { mobileMenu, mobileMenuContainer, mobileMenuItem, reducedVariants } from '@/lib/motion';

// Derived from navLinks so the two never go out of sync.
// Hero is tracked for scroll-spy but has no nav link.
const sectionIds = ['hero', ...navLinks.map((l) => l.href.slice(1))];

export function Navbar({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const prefersReduced = useReducedMotion() ?? false;

  const menuV     = reducedVariants(mobileMenu, prefersReduced);
  const menuWrapV = reducedVariants(mobileMenuContainer, prefersReduced);
  const menuItemV = reducedVariants(mobileMenuItem, prefersReduced);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[border-color,background-color,backdrop-filter] duration-200 ${
        scrolled
          ? 'border-b border-default bg-[rgb(var(--bg))]/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-max flex h-16 items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="Prabhu Karni — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev font-mono text-sm font-semibold text-accent-500 transition-[border-color] duration-150 group-hover:border-accent-500/50">
            PK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{profile.name}</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] ${
                  isActive ? 'font-medium text-[rgb(var(--text))]' : 'text-muted hover:text-[rgb(var(--text))]'
                }`}
              >
                {link.label}
                {/* Sliding underline — spring physics */}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent-500"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            onClick={onToggleTheme}
            whileTap={prefersReduced ? {} : { scale: 0.92 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: 15, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Resume CTA */}
          <a
            href="#contact"
            className="hidden rounded-lg border border-accent-500/40 bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-500 transition-[background-color,border-color] duration-150 hover:bg-accent-500/20 sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            Resume
          </a>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileTap={prefersReduced ? {} : { scale: 0.92 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: 15, scale: 0.8 }}
                transition={{ duration: 0.12 }}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile drawer — height opens first, items stagger in */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            variants={menuV}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden border-b border-default bg-[rgb(var(--bg))] lg:hidden"
          >
            <motion.div
              variants={menuWrapV}
              initial="closed"
              animate="open"
              exit="closed"
              className="container-max flex flex-col gap-1 px-5 py-4 sm:px-8"
            >
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={menuItemV}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm transition-[color,background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                      isActive
                        ? 'bg-accent-500/10 font-medium text-accent-500'
                        : 'text-muted hover:bg-elev hover:text-[rgb(var(--text))]'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                variants={menuItemV}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg border border-accent-500/40 bg-accent-500/10 px-3 py-2.5 text-sm font-medium text-accent-500 transition-[background-color] duration-150 hover:bg-accent-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
