import { motion } from 'framer-motion';
import { capabilities } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="What I Do"
        title="Engineering reliable cloud platforms"
        description="SRE, DevOps and cloud engineering are the primary practice — complemented by application development and AI engineering capabilities that turn automation, integrations and intelligent systems into production reality."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-default bg-elev p-6 transition-colors hover:border-accent-500/30"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={cap.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{cap.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{cap.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
