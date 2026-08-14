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
        eyebrow="Featured Engineering Projects"
        title="Production systems I've designed and operated"
        description="Case studies spanning multi-account AWS platforms, Kubernetes delivery, cloud migrations, observability, security and AI systems."
      />

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
              filter === cat
                ? 'border-accent-500/40 bg-accent-500/10 text-accent-500'
                : 'border-default bg-elev text-muted hover:text-[rgb(var(--text))] hover:border-accent-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const open = expanded === project.id;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-elev transition-colors ${
                  open ? 'border-accent-500/30' : 'border-default hover:border-accent-500/20'
                }`}
              >
                <button
                  onClick={() => setExpanded(open ? null : project.id)}
                  className="flex items-start justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent-500">{project.id}</span>
                      <span className="rounded-md border border-default bg-[rgb(var(--bg))] px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted">{project.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className="px-5 sm:px-6">
                  <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-4 sm:px-6">
                        <ul className="space-y-2">
                          {project.points.map((pt) => (
                            <li key={pt} className="flex gap-3 text-sm text-muted">
                              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-500/60" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-default px-5 py-4 sm:px-6">
                  {project.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </Section>
  );
}
