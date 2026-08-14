import { motion } from 'framer-motion';
import { development } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Development() {
  return (
    <Section id="engineering" className="border-t border-default">
      <SectionHeader eyebrow="Development Capabilities" title="I Build, Not Just Operate" />

      <blockquote className="mt-8 max-w-3xl border-l-2 border-accent-500/40 pl-5 text-base leading-relaxed text-muted sm:text-lg">
        {development.quote}
      </blockquote>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {development.groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-default bg-elev p-5 transition-colors hover:border-accent-500/20"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={group.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-default bg-[rgb(var(--bg))] px-2 py-1 text-xs text-muted">
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
