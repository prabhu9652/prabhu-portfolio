import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MapPin, Award } from 'lucide-react';
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
          return (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`overflow-hidden rounded-2xl border bg-elev transition-colors ${
                open ? 'border-accent-500/30' : 'border-default'
              }`}
            >
              <button
                onClick={() => setOpenIdx(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] font-mono text-sm font-semibold text-accent-500">
                    {job.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold sm:text-lg">{job.company}</h3>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted sm:text-sm">
                      <span className="font-medium text-accent-500">{job.role}</span>
                      <span className="font-mono">{job.period}</span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>

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

                      {job.progression && (
                        <div className="mt-5">
                          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Career progression</div>
                          <div className="flex flex-wrap items-center gap-2">
                            {job.progression.map((step, si) => (
                              <div key={step} className="flex items-center gap-2">
                                <span className="rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted">
                                  {step}
                                </span>
                                {si < job.progression.length - 1 && (
                                  <span className="text-accent-500/60">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/60" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {job.achievement && (
                        <div className="mt-5 flex gap-3 rounded-xl border border-accent-500/20 bg-accent-500/5 p-4">
                          <Award className="h-5 w-5 shrink-0 text-accent-500" />
                          <div>
                            <div className="text-sm font-medium">{job.achievement.title}</div>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{job.achievement.detail}</p>
                          </div>
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {job.stack.map((s) => (
                          <span key={s} className="tag">
                            {s}
                          </span>
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
