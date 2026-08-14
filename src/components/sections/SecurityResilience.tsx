import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { additionalExperience, securityResilienceCards } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

const drFlow = [
  'Reliability',
  'Resilience',
  'Backup & Recovery',
  'Disaster Recovery',
  'Recovery Validation',
  'Operational Readiness',
];

const soc2Flow = [
  'Cloud Infrastructure',
  'Security Controls',
  'Automated Scripts',
  'Evidence Collection',
  'Drata',
  'SOC 2 Evidence',
  'Audit Readiness',
];

const devSecOpsFlow = [
  'Source Control',
  'CI/CD',
  'Code Scan',
  'Container Scan',
  'Security Validation',
  'Deployment',
  'Runtime Security',
  'Monitoring',
];

export function SecurityResilience() {
  return (
    <Section id="security-dr" className="border-t border-default">
      <SectionHeader
        eyebrow="Security & DR"
        title="Security engineering and disaster recovery"
        description="Building secure and resilient cloud environments through infrastructure security, security automation, disaster recovery planning, backup and recovery practices, and operational readiness."
      />

      {/* Three capability cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {securityResilienceCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-default bg-elev p-6 transition-colors hover:border-accent-500/30"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={card.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-default bg-[rgb(var(--bg))] px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 overflow-hidden rounded-2xl border border-default bg-elev"
      >
        <div className="border-b border-default p-5 sm:p-6">
          <div className="font-mono text-xs uppercase tracking-wider text-accent-500">
            {additionalExperience.subtitle}
          </div>
          <h3 className="mt-2 text-lg font-semibold">{additionalExperience.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{additionalExperience.description}</p>
        </div>

        <div className="grid gap-px bg-[rgb(var(--border))] sm:grid-cols-3">
          {additionalExperience.areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-elev p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 text-accent-500">
                <Icon name={area.icon} className="h-4 w-4" />
                <span className="font-mono text-xs font-medium uppercase tracking-wider">{area.title}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {area.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-xs leading-relaxed text-muted">
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Engineering flows */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {/* DevSecOps flow */}
        <FlowCard label="DevSecOps pipeline" steps={devSecOpsFlow} />
        {/* DR flow */}
        <FlowCard label="Disaster recovery lifecycle" steps={drFlow} vertical />
        {/* SOC 2 flow */}
        <FlowCard label="SOC 2 compliance automation" steps={soc2Flow} />
      </div>
    </Section>
  );
}

function FlowCard({ label, steps, vertical = false }: { label: string; steps: string[]; vertical?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-default bg-elev p-5 sm:p-6"
    >
      <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">{label}</div>
      <div className={`flex gap-2 ${vertical ? 'flex-col' : 'flex-wrap items-center'}`}>
        {steps.map((step, i, arr) => (
          <div key={step} className={`flex items-center gap-2 ${vertical ? '' : ''}`}>
            <span className="rounded-lg border border-default bg-[rgb(var(--bg))] px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))]">
              {step}
            </span>
            {i < arr.length - 1 && (
              <span className={`text-accent-500/50 ${vertical ? 'self-center' : ''}`}>
                {vertical ? '↓' : '→'}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
