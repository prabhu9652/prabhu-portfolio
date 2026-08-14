import { motion } from 'framer-motion';
import { securityResilienceCards } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

const securityTools = [
  'AWS IAM', 'AWS WAF', 'GuardDuty', 'Inspector',
  'Security Hub', 'KMS', 'Secrets Manager', 'AWS Config',
  'Trivy', 'SonarQube',
];

const drFlow = [
  'Production',
  'Backup Mechanisms',
  'DR Environment',
  'Recovery Trigger',
  'Validation',
  'Operational Readiness',
];

const devSecOpsFlow = [
  'Source Control',
  'CI/CD',
  'Code Scan',
  'Container Scan',
  'Security Validation',
  'Deploy',
  'Runtime Security',
  'Monitoring',
];

const soc2Flow = [
  'Infrastructure Controls',
  'Automation Scripts',
  'Evidence Collection',
  'Drata',
  'SOC 2 Evidence',
  'Audit Readiness',
];

export function SecurityResilience() {
  return (
    <Section id="security-dr" className="border-t border-default">
      <SectionHeader
        eyebrow="Security & DR"
        title="Security engineering and disaster recovery"
        description="Security is embedded into the delivery lifecycle, not bolted on at the end. Disaster recovery is planned, tested and validated — not improvised during an incident."
      />

      {/* Three high-level capability cards */}
      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {securityResilienceCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-default bg-elev p-5 transition-all hover:border-accent-500/40 hover:-translate-y-0.5"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={card.icon} className="h-4 w-4" />
            </div>
            <h3 className="mt-3.5 text-sm font-semibold">{card.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{card.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {card.tags.map((tag) => (
                <span key={tag} className="rounded border border-default bg-[rgb(var(--bg))] px-1.5 py-0.5 text-[10px] text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Two-column split: Security tools list + DR flow */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* Security tooling */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="rounded-xl border border-default bg-elev p-5"
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">Security Engineering</p>
          <div className="flex flex-wrap gap-1.5">
            {securityTools.map((t) => (
              <span key={t} className="rounded-lg border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))] cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* DR lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="rounded-xl border border-default bg-elev p-5"
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">Disaster Recovery</p>
          <div className="flex flex-col gap-1.5">
            {drFlow.map((step, i, arr) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className="rounded-md border border-default bg-[rgb(var(--bg))] px-3 py-1 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))] cursor-default">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-accent-500/40 text-xs" aria-hidden="true">↓</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom row: DevSecOps pipeline + SOC 2 flow */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FlowStrip label="DevSecOps pipeline" steps={devSecOpsFlow} />
        <FlowStrip label="SOC 2 compliance automation" steps={soc2Flow} />
      </div>
    </Section>
  );
}

function FlowStrip({ label, steps }: { label: string; steps: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className="rounded-xl border border-default bg-elev p-5"
    >
      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <div className="flex flex-wrap items-center gap-1.5">
        {steps.map((step, i, arr) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className="rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))] cursor-default">
              {step}
            </span>
            {i < arr.length - 1 && <span className="text-accent-500/40 text-xs" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
