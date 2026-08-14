import { Download, Eye } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { downloadResume, viewResume } from '@/utils/resume';
import { Section } from '@/components/ui/Section';

export function Resume() {
  const hasResume = Boolean(profile.resumeUrl);

  return (
    <Section id="resume" className="border-t border-default">
      <div className="overflow-hidden rounded-3xl border border-default bg-elev">
        <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 dot-pattern opacity-30 mask-fade-b" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-accent-500/10 blur-[100px]" />

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want the complete engineering profile?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
            The homepage is a summary. The resume has the full detail — roles, scope, stack and outcomes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hasResume ? (
              <>
                <button
                  onClick={() => viewResume(profile.resumeUrl)}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-400"
                >
                  <Eye className="h-4 w-4" />
                  View Resume
                </button>
                <button
                  onClick={() => downloadResume(profile.resumeUrl)}
                  className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--text))] hover:border-accent-500/40"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
              </>
            ) : (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-400"
              >
                <Download className="h-4 w-4" />
                Request Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
