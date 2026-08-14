import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Education() {
  return (
    <Section id="education" className="border-t border-default">
      <SectionHeader
        eyebrow="Education"
        title="Academic background"
        description="Undergraduate engineering education that formed the analytical and technical foundation for a career in software, infrastructure and cloud engineering."
      />

      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border border-default bg-elev"
        >
          <div className="flex items-start gap-5 p-6 sm:p-8">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] text-accent-500">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug">{education.institution}</h3>

              <p className="mt-1 text-sm text-muted">{education.university}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {/* Degree */}
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-default bg-[rgb(var(--bg))] px-3 py-1.5 text-sm font-medium">
                  {education.degree}
                </span>
                {/* Branch */}
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-default bg-[rgb(var(--bg))] px-3 py-1.5 text-sm text-muted">
                  {education.branch}
                </span>
              </div>

              <div className="mt-4">
                <span className="font-mono text-xs text-muted">Graduated</span>
                <span className="ml-2 font-mono text-xs font-medium text-accent-500">{education.graduation}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
