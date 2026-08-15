import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '@/lib/motion';

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  const prefersReduced = useReducedMotion() ?? false;
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : fadeUp(0, 12);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-72px' }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow && (
        /*
         * Eyebrow: metadata-level, not heading-level.
         * Uses 10px / widest tracking so it reads as a label, not a title.
         */
        <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {description && (
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = '',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section-padding py-16 sm:py-20 ${className}`}
    >
      <div className="container-max">{children}</div>
    </section>
  );
}
