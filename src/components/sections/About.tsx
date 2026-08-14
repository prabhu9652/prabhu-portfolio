import { motion } from 'framer-motion';
import { capabilities } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

// Concise engineering-focused summary shown above the capability grid
const summary =
  'Nine years designing, automating and operating production cloud environments — from bare infrastructure and Kubernetes platforms through CI/CD, observability, security and AI-powered applications. The work spans AWS, Azure, GCP and DigitalOcean, with Terraform as the IaC layer and Python as the automation language.';

export function About() {
  return (
    <Section id="about" className="border-t border-default">
      <SectionHeader
        eyebrow="9 years · AWS · Kubernetes · Terraform"
        title="Senior SRE & Cloud Engineer"
        description={summary}
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-xl border border-default bg-elev p-5 transition-all hover:border-accent-500/40 hover:-translate-y-0.5"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={cap.icon} className="h-4 w-4" />
            </div>
            <h3 className="mt-3.5 text-sm font-semibold">{cap.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{cap.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
