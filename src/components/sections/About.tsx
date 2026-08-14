import { motion, useReducedMotion } from 'framer-motion';
import { capabilities } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';
import { staggerContainer, staggerChild, reducedVariants } from '@/lib/motion';

const summary =
  'Nine years in production — running cloud infrastructure, Kubernetes platforms and CI/CD pipelines across AWS, Azure, GCP and DigitalOcean. Strong in observability, DevSecOps and platform automation, with recent work on AI/RAG infrastructure using Amazon Bedrock and LangGraph.';

export function About() {
  const prefersReduced = useReducedMotion() ?? false;

  const gridV  = reducedVariants(staggerContainer(0.06, 0.1), prefersReduced);
  const childV = reducedVariants(staggerChild, prefersReduced);

  return (
    <Section id="about" className="border-t border-default">
      <SectionHeader
        eyebrow="SRE · DevOps · DevSecOps · Cloud · AI"
        title="Senior Site Reliability Engineer"
        description={summary}
      />

      <motion.div
        variants={gridV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {capabilities.map((cap) => (
          <motion.div
            key={cap.title}
            variants={childV}
            className="group relative overflow-hidden rounded-xl border border-default bg-elev p-5 transition-[border-color,transform] duration-200 hover:border-accent-500/40 hover:-translate-y-px"
          >
            {/* Ambient glow — opacity only, no layout change */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={cap.icon} className="h-4 w-4" />
            </div>
            <h3 className="relative mt-3.5 text-sm font-semibold">{cap.title}</h3>
            <p className="relative mt-1.5 text-xs leading-relaxed text-muted">{cap.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
