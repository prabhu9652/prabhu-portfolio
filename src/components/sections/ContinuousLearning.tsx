import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { learningFocus } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function ContinuousLearning() {
  return (
    <Section id="learning" className="border-t border-default">
      <SectionHeader
        eyebrow="Continuous Learning"
        title="Always deepening the practice"
        description="No invented certifications — just the focus areas I actively study and apply."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {learningFocus.map((area, i) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-xl border border-default bg-elev p-4 transition-colors hover:border-accent-500/30"
          >
            <BookOpen className="h-4 w-4 shrink-0 text-accent-500" />
            <span className="text-sm text-muted">{area}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
