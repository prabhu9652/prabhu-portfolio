import { motion } from 'framer-motion';
import { techStack } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function TechStack() {
  return (
    <Section id="expertise" className="border-t border-default">
      <SectionHeader
        eyebrow="Technology Stack"
        title="Tools across the cloud-native landscape"
        description="Organized by domain — from cloud and infrastructure through containers, CI/CD, observability, security, databases, programming and AI engineering."
      />

      <div className="mt-12 space-y-8">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
          >
            <div className="flex items-center gap-3">
              <h3 className="font-mono text-sm font-medium text-accent-500">{group.category}</h3>
              <div className="h-px flex-1 bg-[rgb(var(--border))]" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="group inline-flex cursor-default items-center rounded-lg border border-default bg-elev px-3 py-1.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-accent-500/40 hover:text-[rgb(var(--text))]"
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
