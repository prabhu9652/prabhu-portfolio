import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-default">
      <div className="container-max section-padding py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev font-mono text-sm font-semibold text-accent-500">
              PK
            </span>
            <div>
              <div className="text-sm font-semibold">{profile.name}</div>
              <div className="text-xs text-muted">{profile.roleContext}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-accent-500"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-accent-500"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-accent-500"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-3 py-2 text-xs text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))]"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
