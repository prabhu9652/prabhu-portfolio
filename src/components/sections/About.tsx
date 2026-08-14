import { motion } from 'framer-motion';
import { capabilities } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="What I Do"
        title="Engineering reliable, secure cloud platforms"
        description="SRE, DevOps, DevSecOps and cloud platform engineering are the primary practice — across AWS, Azure, GCP and DigitalOcean, with multi-cloud Kubernetes, CI/CD, security, disaster recovery, compliance automation and AI engineering covering the full production lifecycle."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl border border-default bg-elev p-6 transition-colors hover:border-accent-500/30"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={cap.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{cap.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{cap.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
