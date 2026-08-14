import { motion } from 'framer-motion';
import { techStack } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

// Production engineering lifecycle — shown as an architecture flow strip
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
  return (
    <Section id="stack" className="border-t border-default">
      <SectionHeader
        eyebrow="Cloud · IaC · Containers · Security · AI"
        title="Tools across the full platform lifecycle"
        description="Organized by engineering domain — not an exhaustive list, but the technologies I use daily to design, automate and operate production systems."
      />

      {/* Architecture lifecycle strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-8 overflow-x-auto pb-1"
      >
        <div className="flex min-w-max items-center rounded-xl border border-default bg-elev">
          {lifecycle.map((stage, i) => (
            <div key={stage} className="flex items-center">
              <div className={`px-4 py-3 text-xs font-medium transition-colors hover:text-accent-500 ${
                i === 0 ? 'text-accent-500' : 'text-muted'
              }`}>
                {stage}
              </div>
              {i < lifecycle.length - 1 && (
                <span className="text-accent-500/30 text-sm" aria-hidden="true">›</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Domain groups */}
      <div className="mt-8 space-y-6">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: gi * 0.04 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-accent-500">{group.category}</h3>
              <div className="h-px flex-1 bg-[rgb(var(--border))]" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-lg border border-default bg-elev px-3 py-1.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-accent-500/40 hover:text-[rgb(var(--text))] cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
