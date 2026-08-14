import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { CopyButton } from '@/components/ui/CopyButton';
import { Section } from '@/components/ui/Section';

export function Contact() {
  const hasGithub = Boolean(profile.github);

  return (
    <Section id="contact" className="border-t border-default">
      <div className="overflow-hidden rounded-3xl border border-default bg-elev">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left — message */}
          <div className="relative p-8 sm:p-12">
            <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-accent-500/10 blur-[80px]" />
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's Build Reliable Systems</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Open to opportunities involving SRE, DevOps, cloud infrastructure, platform engineering, automation
              and AI infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-400"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
              <CopyButton text={profile.email} label="Copy email" />
            </div>
          </div>

          {/* Right — contact details */}
          <div className="border-t border-default p-8 sm:p-12 lg:border-l lg:border-t-0">
            <div className="space-y-3">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
              />
              <ContactRow
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="linkedin.com/in/karni-prabhu-aa7a68241"
                href={profile.linkedin}
              />
              {hasGithub && (
                <ContactRow
                  icon={<Github className="h-4 w-4" />}
                  label="GitHub"
                  value={profile.github}
                  href={profile.github}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex items-center justify-between gap-3 rounded-xl border border-default bg-[rgb(var(--bg))] p-4 transition-colors hover:border-accent-500/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-accent-500">
          {icon}
        </div>
        <div>
          <div className="text-xs text-muted">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent-500" />
    </motion.a>
  );
}
