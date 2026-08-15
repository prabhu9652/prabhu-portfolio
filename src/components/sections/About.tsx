import { motion, useReducedMotion } from 'framer-motion';
import { capabilities } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';
import { staggerContainer, staggerChild, reducedVariants } from '@/lib/motion';

const summary =
  'Nine years in production — running cloud infrastructure, Kubernetes platforms and CI/CD pipelines across AWS, Azure, GCP and DigitalOcean. Focused on infrastructure reliability, observability and security automation, with additional experience applying production engineering practices to AI/RAG infrastructure.';

export function About() {
  const prefersReduced = useReducedMotion() ?? false;

  const gridV  = reducedVariants(staggerContainer(0.06, 0.1), prefersReduced);
  const childV = reducedVariants(staggerChild, prefersReduced);

  return (
    <Section id="about" className="border-t border-default">
      <SectionHeader
        eyebrow="SRE · DevOps · DevSecOps · Cloud · Platform"
        title="Engineering specializations"
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
            /*
             * flex flex-col h-full ensures equal row heights across the grid.
             * hover:-translate-y-0.5 is a 2px lift — visible and intentional.
             * No ambient glow — the effect was clipped by overflow-hidden and invisible.
             */
            className="flex h-full flex-col rounded-xl border border-default bg-elev p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent-500/50"
          >
            {/*
             * Icon box uses a tinted background so it reads as
             * distinct from the card surface in both light and dark mode.
             */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500">
              <Icon name={cap.icon} className="h-4 w-4" />
            </div>
            <h3 className="mt-3.5 text-sm font-semibold">{cap.title}</h3>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">{cap.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
