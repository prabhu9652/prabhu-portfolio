import { motion, useReducedMotion } from 'framer-motion';
import { techStack } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';
import { fadeUp, staggerContainer, staggerChild, reducedVariants } from '@/lib/motion';

const lifecycle = [
  'Cloud (AWS / Azure / GCP)',
  'IaC (Terraform)',
  'Kubernetes',
  'CI/CD',
  'Deployment',
  'Observability',
  'Security',
  'DR / Recovery',
];

export function TechStack() {
  const prefersReduced = useReducedMotion() ?? false;

  const stripV  = reducedVariants(fadeUp(0.05, 10), prefersReduced);
  const groupsV = reducedVariants(staggerContainer(0.06, 0.1), prefersReduced);
  const groupV  = reducedVariants(staggerChild, prefersReduced);

  return (
    <Section id="stack" className="border-t border-default">
      <SectionHeader
        eyebrow="Technology domains"
        title="Tools across the full platform lifecycle"
        description="Organized by engineering domain — not an exhaustive list, but the technologies I use daily to design, automate and operate production systems."
      />

      {/* Lifecycle strip — scrollable on mobile */}
      <motion.div
        variants={stripV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        aria-label="Engineering lifecycle"
        className="relative mt-8 mask-fade-r"
      >
        <div className="overflow-x-auto pb-1">
          <div className="flex min-w-max items-center rounded-xl border border-default bg-elev">
            {lifecycle.map((stage, i) => (
              <div key={stage} className="flex items-center">
                <span
                  className={`px-4 py-3 text-xs font-medium ${
                    i === 0 ? 'text-accent-500' : 'text-muted'
                  }`}
                >
                  {stage}
                </span>
                {i < lifecycle.length - 1 && (
                  <span className="text-xs text-accent-500/40" aria-hidden="true">›</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Domain groups — staggered entrance */}
      <motion.div
        variants={groupsV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-8 space-y-6"
      >
        {techStack.map((group) => (
          <motion.div key={group.category} variants={groupV}>
            <div className="mb-3 flex items-center gap-3">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">
                {group.category}
              </h3>
              <div className="h-px flex-1 bg-[rgb(var(--border))]" aria-hidden="true" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex cursor-default items-center rounded-md border border-default bg-[rgb(var(--bg))] px-3 py-1.5 text-xs text-muted transition-[color,border-color] duration-150 hover:border-accent-500/50 hover:text-[rgb(var(--text))]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
