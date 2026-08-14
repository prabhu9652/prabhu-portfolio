import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Eye, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { education, profile } from '@/data/portfolio';
import { CopyButton } from '@/components/ui/CopyButton';
import { downloadResume, viewResume } from '@/utils/resume';
import { Section } from '@/components/ui/Section';

export function Contact() {
  const hasResume = Boolean(profile.resumeUrl);
  const hasGithub = Boolean(profile.github);

  return (
    <Section id="contact" className="border-t border-default">
      <div className="overflow-hidden rounded-2xl border border-default bg-elev">
        <div className="grid lg:grid-cols-2">

          {/* Left — CTA + Resume */}
          <div className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-accent-500/[0.08] blur-[80px]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let's work together</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Open to senior SRE, DevOps, DevSecOps, Cloud and Platform Engineering roles.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
                <CopyButton text={profile.email} label="Copy email" />
              </div>

              {/* Resume — grouped with the CTA, not separated by a divider */}
              {hasResume && (
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    onClick={() => viewResume(profile.resumeUrl)}
                    className="inline-flex items-center gap-2 rounded-lg border border-default bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-muted transition-all hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.98]"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Resume
                  </button>
                  <button
                    onClick={() => downloadResume(profile.resumeUrl)}
                    className="inline-flex items-center gap-2 rounded-lg border border-default bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-muted transition-all hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.98]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right — contact details */}
          <div className="border-t border-default p-8 sm:p-10 lg:border-l lg:border-t-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">Get in touch</p>
            <div className="space-y-2">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
              <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="karni-prabhu-aa7a68241" href={profile.linkedin} />
              {hasGithub && (
                <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="prabhu9652" href={profile.github} />
              )}
            </div>

            {/* Education — in the contact column, less prominent */}
            <div className="mt-6 pt-5 border-t border-default">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Education</p>
              <p className="mt-1.5 text-sm text-[rgb(var(--text))]">{education.degree} · {education.branch}</p>
              <p className="text-xs text-muted">{education.institution} · {education.graduation}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, x: 8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group flex items-center justify-between gap-3 rounded-lg border border-default bg-[rgb(var(--bg))] p-3.5 transition-all hover:border-accent-500/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-default bg-elev text-accent-500">
          {icon}
        </div>
        <div>
          <div className="text-[11px] text-muted">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-3.5 w-3.5 text-muted/40 transition-colors group-hover:text-accent-500" aria-hidden="true" />
    </motion.a>
  );
}
