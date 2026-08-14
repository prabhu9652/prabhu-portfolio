import { motion } from 'framer-motion';
import { philosophy } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Philosophy() {
  return (
    <Section id="philosophy" className="border-t border-default">
      <SectionHeader eyebrow="Engineering Philosophy" title="Principles that shape every system I build" />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {philosophy.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="rounded-2xl border border-default bg-elev p-6 transition-colors hover:border-accent-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
                <Icon name={p.icon} className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-semibold">{p.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
