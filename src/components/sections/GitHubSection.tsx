import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function GitHubSection() {
  const hasGithub = Boolean(profile.github);

  return (
    <Section id="github" className="border-t border-default">
      <SectionHeader
        eyebrow="Open Source & Engineering"
        title="Code and contributions"
        description={hasGithub ? 'Recent repositories, languages and contribution activity.' : 'A GitHub profile link can be connected here to display repositories, languages and contribution activity.'}
      />

      <div className="mt-10">
        {hasGithub ? (
          <div className="rounded-2xl border border-default bg-elev p-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-500 hover:underline"
            >
              <Github className="h-5 w-5" />
              View GitHub profile
            </a>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-default bg-elev p-10 text-center"
          >
            <Github className="h-8 w-8 text-muted" />
            <p className="mt-4 max-w-md text-sm text-muted">
              GitHub profile is not linked yet. Once a profile URL is provided, this section will display
              repositories, languages, recent projects, stars and contribution activity — fetched live from the
              GitHub API.
            </p>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
