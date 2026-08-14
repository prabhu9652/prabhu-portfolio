import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronDown } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Experience() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Section id="experience" className="border-t border-default">
      <SectionHeader
        eyebrow="Professional Experience"
        title="A career built on reliability and automation"
        description="Nine years progressing from Linux and automation foundations into senior SRE and cloud platform engineering — with security, disaster recovery, compliance automation and AI engineering as growing capabilities."
      />

      <div className="mt-12 space-y-3">
        {experience.map((job, i) => {
          const open = openIdx === i;
          const monogram = job.company.slice(0, 2).toUpperCase();
          return (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`overflow-hidden rounded-2xl border bg-elev transition-colors ${
                open ? 'border-accent-500/30' : 'border-default'
              }`}
            >
              {/* Accordion header */}
              <button
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500"
              >
                <div className="flex items-center gap-4">
                  {/* Monogram */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] font-mono text-sm font-semibold text-accent-500">
                    {monogram}
                  </div>

                  <div>
                    {/* Employer */}
                    <h3 className="text-base font-semibold sm:text-lg">{job.company}</h3>

                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      {/* Role */}
                      <span className="text-sm font-medium text-accent-500">{job.role}</span>
                      {/* Period */}
                      <span className="font-mono text-xs text-muted">{job.period}</span>
                    </div>

                    {/* Client badge — only shown when a client field exists */}
                    {'client' in job && job.client && (
                      <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-md border border-accent-500/25 bg-accent-500/10 px-2 py-0.5">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent-500/70">
                          Client
                        </span>
                        <span className="text-xs font-semibold text-accent-500">
                          {job.client}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Accordion body */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-default px-5 pb-6 pt-5 sm:px-6">
                      <p className="text-sm leading-relaxed text-muted">{job.summary}</p>

                      {/* Career progression (IDSL) */}
                      {'progression' in job && job.progression && (
                        <div className="mt-5">
                          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                            Career progression
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            {job.progression.map((step: string, si: number) => (
                              <div key={step} className="flex items-center gap-2">
                                <span className="rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted">
                                  {step}
                                </span>
                                {si < job.progression.length - 1 && (
                                  <span className="text-accent-500/60" aria-hidden="true">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2.5" aria-label="Key responsibilities">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/60" aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Achievement callout */}
                      {'achievement' in job && job.achievement && (
                        <div className="mt-5 flex gap-3 rounded-xl border border-accent-500/20 bg-accent-500/5 p-4">
                          <Award className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                          <div>
                            <div className="text-sm font-medium">{job.achievement.title}</div>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{job.achievement.detail}</p>
                          </div>
                        </div>
                      )}

                      {/* Stack tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
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
