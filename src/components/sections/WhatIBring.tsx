import { motion } from 'framer-motion';
import { whatIBring } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

export function WhatIBring() {
  return (
    <Section id="what-i-bring" className="border-t border-default">
      <SectionHeader
        eyebrow="What I Bring"
        title="Senior production engineering, end to end"
        description="Nine years of hands-on production engineering — from infrastructure design and cloud automation through DevSecOps, reliability, disaster recovery and AI engineering."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {whatIBring.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-default bg-elev p-6 transition-colors hover:border-accent-500/30"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={pillar.icon} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering lifecycle strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 overflow-hidden rounded-2xl border border-default bg-elev p-5 sm:p-6"
      >
        <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          Production engineering lifecycle
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            'Design',
            'Infrastructure',
            'Deployment',
            'Observability',
            'Security',
            'Reliability',
            'Disaster Recovery',
            'Compliance',
            'Automation',
            'Continuous Improvement',
          ].map((stage, i, arr) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="rounded-lg border border-default bg-[rgb(var(--bg))] px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))]">
                {stage}
              </span>
              {i < arr.length - 1 && <span className="text-accent-500/40">→</span>}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
