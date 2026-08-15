import { motion, useReducedMotion } from 'framer-motion';
import { securityResilienceCards } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';
import {
  staggerContainer,
  staggerChild,
  fadeUp,
  pipelineContainer,
  pipelineStep,
  reducedVariants,
} from '@/lib/motion';

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

export function SecurityResilience() {
  const prefersReduced = useReducedMotion() ?? false;

  const cardsV   = reducedVariants(staggerContainer(0.09, 0.05), prefersReduced);
  const cardV    = reducedVariants(staggerChild, prefersReduced);
  const panelV   = reducedVariants(fadeUp(0, 10), prefersReduced);
  const pipeV    = reducedVariants(pipelineContainer, prefersReduced);
  const stepV    = reducedVariants(pipelineStep, prefersReduced);

  return (
    <Section id="security-dr" className="border-t border-default">
      <SectionHeader
        eyebrow="Security engineering & disaster recovery"
        title="Security, resilience and compliance"
        description="Security is embedded into the delivery lifecycle, not bolted on at the end. Disaster recovery is planned, tested and validated — not improvised during an incident."
      />

      {/* Capability cards — staggered, equal height */}
      <motion.div
        variants={cardsV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-10 grid gap-3 md:grid-cols-3"
      >
        {securityResilienceCards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardV}
            className="flex h-full flex-col rounded-xl border border-default bg-elev p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent-500/50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500">
              <Icon name={card.icon} className="h-4 w-4" />
            </div>
            <h3 className="mt-3.5 text-sm font-semibold">{card.title}</h3>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">{card.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-default bg-[rgb(var(--bg))] px-1.5 py-0.5 text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two-column detail panels */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {/* Security tooling — fades up */}
        <motion.div
          variants={panelV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-xl border border-default bg-elev p-5"
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
            Security Engineering
          </p>
          <div className="flex flex-wrap gap-1.5">
            {securityTools.map((t) => (
              <span
                key={t}
                className="cursor-default rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))]"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* DR lifecycle — steps stagger in sequentially */}
        <motion.div
          variants={panelV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-xl border border-default bg-elev p-5"
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
            Disaster Recovery Lifecycle
          </p>
          <motion.div
            variants={pipeV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col gap-1.5"
          >
            {drFlow.map((step, i, arr) => (
              <motion.div key={step} variants={stepV} className="flex items-center gap-1.5">
                <span className="cursor-default rounded-md border border-default bg-[rgb(var(--bg))] px-3 py-1 text-xs text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))]">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-xs text-accent-500/40" aria-hidden="true">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
