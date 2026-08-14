import { motion } from 'framer-motion';
import { engineeringDomains } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function EngineeringDomains() {
  return (
    <Section id="domains" className="border-t border-default">
      <SectionHeader
        eyebrow="Engineering Domains"
        title="Full-spectrum production engineering"
        description="SRE, DevOps, DevSecOps and cloud engineering spanning the complete production lifecycle — from infrastructure design through delivery, security, observability, recovery and compliance."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-default bg-elev">
        {/* Header row */}
        <div className="grid grid-cols-[120px_1fr] gap-px bg-[rgb(var(--border))] sm:grid-cols-[160px_1fr]">
          <div className="bg-[rgb(var(--bg))] px-4 py-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Domain</span>
          </div>
          <div className="bg-[rgb(var(--bg))] px-4 py-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Core Capabilities</span>
          </div>
        </div>

        {/* Domain rows */}
        <div className="divide-y divide-[rgb(var(--border))]">
          {engineeringDomains.map((row, i) => (
            <motion.div
              key={row.domain}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="grid grid-cols-[120px_1fr] gap-px bg-[rgb(var(--border))] transition-colors hover:bg-accent-500/[0.03] sm:grid-cols-[160px_1fr]"
            >
              <div className="bg-elev px-4 py-4">
                <span className="font-mono text-sm font-medium text-accent-500">{row.domain}</span>
              </div>
              <div className="bg-elev px-4 py-4">
                <div className="flex flex-wrap gap-2">
                  {row.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
