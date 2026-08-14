import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/ui/Section';

export function GitHubSection() {
  return (
    <Section id="github" className="border-t border-default">
      <SectionHeader
        eyebrow="Open Source & Engineering"
        title="Code and contributions"
        description="Public repositories, projects and engineering work on GitHub."
      />

      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-default bg-elev"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-default p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">prabhu9652</div>
                <div className="text-xs text-muted">github.com/prabhu9652</div>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))]"
            >
              View Profile
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted">
              Engineering work spanning cloud infrastructure automation, Kubernetes configurations, DevSecOps tooling,
              observability setups, AI/RAG applications and operational scripts. View repositories, project history
              and code contributions on GitHub.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Infrastructure Automation', 'Kubernetes', 'DevSecOps', 'Python', 'Terraform', 'AI / RAG'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-default bg-[rgb(var(--bg))] px-2.5 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-400 transition-colors"
              >
                <Github className="h-4 w-4" />
                github.com/prabhu9652
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
