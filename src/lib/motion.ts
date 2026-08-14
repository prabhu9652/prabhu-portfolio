/**
 * Motion system — single source of truth.
 *
 * Principles:
 *  - Fast and minimal. No animation exceeds 400ms.
 *  - Hierarchy: micro (hover/press) → component (accordion, menu) → section (stagger) → hero (storytelling).
 *  - prefers-reduced-motion is respected via reducedVariants() in every component.
 *  - CSS transitions must target explicit properties — transition-all is banned.
 */

import type { Variants } from 'framer-motion';

// ---------------------------------------------------------------------------
// Easing curves
// ---------------------------------------------------------------------------

/** Standard ease-out — used for most enter transitions */
export const ease = [0.25, 0.46, 0.45, 0.94] as const;

/** Decelerate — used for things coming to rest (accordion close, menu close) */
export const easeOut = [0.0, 0.0, 0.2, 1.0] as const;

// ---------------------------------------------------------------------------
// Duration scale (seconds)
// ---------------------------------------------------------------------------

export const dur = {
  fast: 0.18,
  base: 0.28,
  slow: 0.4,
} as const;

// ---------------------------------------------------------------------------
// Fade-up — standard section / card enter
// ---------------------------------------------------------------------------

export const fadeUp = (delay = 0, distance = 14): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease, delay } },
});

// ---------------------------------------------------------------------------
// Stagger container — parent that drives children stagger
// The container itself carries no opacity so whileInView triggers correctly.
// ---------------------------------------------------------------------------

export const staggerContainer = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Stagger child — fades up */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease } },
};

/** Stagger child — slides in from the left */
export const staggerChildX: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: dur.base, ease } },
};

// ---------------------------------------------------------------------------
// Accordion body
// Open:  height expands first, then opacity fades in.
// Close: opacity fades first, then height collapses.
// ---------------------------------------------------------------------------

export const accordionBody: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height:  { duration: dur.base, ease: easeOut, delay: dur.fast },
      opacity: { duration: dur.fast, ease },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height:  { duration: dur.base, ease },
      opacity: { duration: dur.base, ease, delay: dur.fast },
    },
  },
};

// ---------------------------------------------------------------------------
// Pipeline step stagger — AI and DR vertical flows
// ---------------------------------------------------------------------------

export const pipelineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
};

export const pipelineStep: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: dur.base, ease } },
};

// ---------------------------------------------------------------------------
// Mobile navigation menu
// ---------------------------------------------------------------------------

export const mobileMenu: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      height:  { duration: dur.base, ease: easeOut },
      opacity: { duration: dur.fast, ease },
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      height:  { duration: dur.base, ease },
      opacity: { duration: dur.fast, ease, delay: 0.04 },
    },
  },
};

export const mobileMenuContainer: Variants = {
  closed: {},
  open: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } },
};

export const mobileMenuItem: Variants = {
  closed: { opacity: 0, x: -8 },
  open:   { opacity: 1, x: 0, transition: { duration: dur.base, ease } },
};

// ---------------------------------------------------------------------------
// Hero entrance — fast stagger for page-load storytelling
// ---------------------------------------------------------------------------

export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease } },
};

export const heroStats: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: dur.slow, ease, delay: 0.38 } },
};

// ---------------------------------------------------------------------------
// reducedVariants — strips positional transforms for prefers-reduced-motion
// Content remains visible; only movement is removed, not opacity.
// ---------------------------------------------------------------------------

export function reducedVariants(variants: Variants, prefersReduced: boolean): Variants {
  if (!prefersReduced) return variants;

  const reduced: Variants = {};
  for (const key of Object.keys(variants)) {
    const v = variants[key];
    if (typeof v === 'object' && v !== null) {
      const { x: _x, y: _y, scale: _scale, ...rest } = v as Record<string, unknown>;
      reduced[key] = rest;
    } else {
      reduced[key] = v;
    }
  }
  return reduced;
}
