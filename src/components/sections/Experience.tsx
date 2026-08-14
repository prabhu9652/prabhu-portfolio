import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronDown } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Experience() {
  // First entry open by default so content is immediately visible
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Section id="experience" className="border-t border-default">
      <SectionHeader
        eyebrow="Techverito · Social Alpha · IDSL"
        title="Nine years of production engineering"
        description="From Linux and automation foundations at IDSL through DevOps at Social Alpha to senior SRE work at Techverito — progressing in scope, depth and responsibility at each stage."
      />

      <div className="mt-12 space-y-2">
        {experience.map((job, i) => {
          const open = openIdx === i;
          const monogram = job.company.slice(0, 2).toUpperCase();

          return (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`overflow-hidden rounded-xl border bg-elev transition-colors ${
                open ? 'border-accent-500/40' : 'border-default hover:border-accent-500/20'
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] font-mono text-sm font-semibold text-accent-500">
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
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Body */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-default px-5 pb-6 pt-5 sm:px-6">
                      <p className="text-sm leading-relaxed text-muted">{job.summary}</p>

                      {/* Career progression (IDSL) */}
                      {'progression' in job && Array.isArray(job.progression) && (
                        <div className="mt-5">
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">Progression</p>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {job.progression.map((step: string, si: number) => (
                              <div key={step} className="flex items-center gap-1.5">
                                <span className="rounded border border-default bg-[rgb(var(--bg))] px-2 py-0.5 text-xs text-muted">
                                  {step}
                                </span>
                                {si < (job.progression as string[]).length - 1 && (
                                  <span className="text-accent-500/50 text-xs" aria-hidden="true">→</span>
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
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500/70" aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Achievement */}
                      {'achievement' in job && job.achievement && (
                        <div className="mt-5 flex gap-3 rounded-lg border border-accent-500/20 bg-accent-500/5 p-4">
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-medium">{job.achievement.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{job.achievement.detail}</p>
                          </div>
                        </div>
                      )}

                      {/* Stack */}
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
      </div>
    </Section>
  );
}
