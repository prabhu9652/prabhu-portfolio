import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { projectCategories, projects } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section id="projects" className="border-t border-default">
      <SectionHeader
        eyebrow="Projects"
        title="Engineering case studies"
        description="Eight production systems — each showing architecture decisions, technologies used and engineering challenges solved."
      />

      {/* Filter bar */}
      <div className="mt-8 flex flex-wrap gap-1.5" role="group" aria-label="Filter projects by category">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setExpanded(null); }}
            aria-pressed={filter === cat}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
              filter === cat
                ? 'border-accent-500/40 bg-accent-500/10 text-accent-500'
                : 'border-default bg-elev text-muted hover:border-accent-500/30 hover:text-[rgb(var(--text))]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const open = expanded === project.id;
            const hasFlow = 'flow' in project && Array.isArray(project.flow);
            const hasAchievement = 'achievement' in project && project.achievement;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className={`flex flex-col overflow-hidden rounded-xl border bg-elev transition-colors ${
                  open ? 'border-accent-500/40' : 'border-default hover:border-accent-500/20'
                }`}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setExpanded(open ? null : project.id)}
                  aria-expanded={open}
                  className="flex items-start justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500 sm:p-6"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] font-medium text-accent-500/80">{project.id}</span>
                      <span className="rounded border border-default bg-[rgb(var(--bg))] px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-base font-semibold">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-muted">{project.subtitle}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>
                  </div>
                  <ChevronDown
                    className={`mt-0.5 h-4 w-4 shrink-0 text-muted/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 sm:px-6">
                        <ul className="space-y-1.5" aria-label="Project details">
                          {project.points.map((pt) => (
                            <li key={pt} className="flex gap-2.5 text-sm text-muted">
                              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500/60" aria-hidden="true" />
                              {pt}
                            </li>
                          ))}
                        </ul>

                        {/* Engineering flow */}
                        {hasFlow && (
                          <div className="mt-4">
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">Flow</p>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {(project as typeof project & { flow: string[] }).flow.map((step, si, arr) => (
                                <div key={step} className="flex items-center gap-1.5">
                                  <span className="rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted hover:border-accent-500/40 hover:text-[rgb(var(--text))] transition-colors cursor-default">
                                    {step}
                                  </span>
                                  {si < arr.length - 1 && <span className="text-accent-500/40 text-xs" aria-hidden="true">→</span>}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievement */}
                        {hasAchievement && (
                          <div className="mt-4 rounded-lg border border-accent-500/20 bg-accent-500/5 p-3">
                            <p className="text-xs font-medium text-accent-500">{(project as typeof project & { achievement: { title: string; detail: string } }).achievement.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{(project as typeof project & { achievement: { title: string; detail: string } }).achievement.detail}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stack tags — always visible */}
                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-default px-5 py-3 sm:px-6">
                  {project.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </Section>
  );
}
