import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Award, ChevronDown } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';
import {
  accordionBody,
  staggerContainer,
  staggerChild,
  reducedVariants,
} from '@/lib/motion';

export function Experience() {
  const [openIdx, setOpenIdx] = useState(0);
  const prefersReduced = useReducedMotion() ?? false;

  const listV  = reducedVariants(staggerContainer(0.07, 0.05), prefersReduced);
  const cardV  = reducedVariants(staggerChild, prefersReduced);
  const bodyV  = prefersReduced
    ? {
        collapsed: { opacity: 0, height: 0, transition: { duration: 0.15 } },
        expanded:  { opacity: 1, height: 'auto', transition: { duration: 0.15 } },
      }
    : accordionBody;

  return (
    <Section id="experience" className="border-t border-default">
      <SectionHeader
        eyebrow="Techverito · Social Alpha · IDSL · 2017 – present"
        title="Nine years of production engineering"
        description="Four years as Senior SRE owning AWS platforms end-to-end, preceded by DevOps engineering across multi-cloud migrations and infrastructure automation from 2017."
      />

      <motion.div
        variants={listV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-10 space-y-2"
      >
        {experience.map((job, i) => {
          const open = openIdx === i;
          const monogram = job.company.slice(0, 2).toUpperCase();

          return (
            <motion.div
              key={job.company + job.period}
              variants={cardV}
              className={`overflow-hidden rounded-xl border bg-elev transition-[border-color] duration-200 ${
                open ? 'border-accent-500/40' : 'border-default hover:border-accent-500/20'
              }`}
            >
              {/* Accordion header */}
              <button
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500"
              >
                <div className="flex items-center gap-4">
                  {/* Monogram — accent ring on open */}
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-[rgb(var(--bg))] font-mono text-sm font-semibold text-accent-500 transition-[border-color] duration-200 ${
                    open ? 'border-accent-500/30' : 'border-default'
                  }`}>
                    {monogram}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <h3 className="text-base font-semibold">{job.company}</h3>
                      <span className="font-mono text-xs text-muted">{job.period}</span>
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-2">
                      <span className="text-sm text-accent-500">{job.role}</span>
                      {'client' in job && job.client && (
                        <span className="inline-flex items-center gap-1 rounded border border-accent-500/25 bg-accent-500/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-500">
                          Client: {job.client}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chevron rotates via CSS — no Framer needed for a single property */}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Accordion body — sequenced height → opacity on open, opacity → height on close */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key={`body-${job.company}`}
                    variants={bodyV}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="overflow-hidden"
                  >
                    <div className="border-t border-default px-5 pb-6 pt-5 sm:px-6">
                      <p className="text-sm leading-relaxed text-muted">{job.summary}</p>

                      {/* Career progression (IDSL only) */}
                      {'progression' in job && Array.isArray(job.progression) && (
                        <div className="mt-5">
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                            Progression
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {job.progression.map((step: string, si: number) => (
                              <div key={step} className="flex items-center gap-1.5">
                                <span className="rounded border border-default bg-[rgb(var(--bg))] px-2 py-0.5 text-xs text-muted">
                                  {step}
                                </span>
                                {si < (job.progression as string[]).length - 1 && (
                                  <span className="text-xs text-accent-500/50" aria-hidden="true">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2" aria-label="Key responsibilities">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500/60" aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Achievement callout */}
                      {'achievement' in job && job.achievement && (
                        <div className="mt-5 flex gap-3 rounded-lg border border-accent-500/20 bg-accent-500/5 p-4">
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-medium">{job.achievement.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{job.achievement.detail}</p>
                          </div>
                        </div>
                      )}

                      {/* Stack tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                        {job.stack.map((s) => (
                          <span key={s} className="tag">{s}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
