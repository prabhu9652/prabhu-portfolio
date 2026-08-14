import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Eye, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { education, profile } from '@/data/portfolio';
import { CopyButton } from '@/components/ui/CopyButton';
import { downloadResume, viewResume } from '@/utils/resume';
import { Section } from '@/components/ui/Section';
import { fadeUp, staggerContainer, staggerChildX, reducedVariants } from '@/lib/motion';

export function Contact() {
  const hasResume = Boolean(profile.resumeUrl);
  const hasGithub = Boolean(profile.github);
  const prefersReduced = useReducedMotion() ?? false;

  const leftV  = reducedVariants(fadeUp(0, 16), prefersReduced);
  const listV  = reducedVariants(staggerContainer(0.07, 0.1), prefersReduced);
  const rowV   = reducedVariants(staggerChildX, prefersReduced);

  return (
    <Section id="contact" className="border-t border-default">
      <div className="overflow-hidden rounded-2xl border border-default bg-elev">
        <div className="grid lg:grid-cols-2">

          {/* Left — headline + CTAs */}
          <motion.div
            variants={leftV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="relative p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-accent-500/[0.08] blur-[80px]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Open to senior SRE, DevOps, DevSecOps, Cloud and Platform Engineering roles. Based in India, available for remote and hybrid opportunities.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-[background-color,transform] duration-150 hover:bg-accent-400 active:scale-[0.97]"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
                <CopyButton text={profile.email} label="Copy email" />
              </div>

              {hasResume && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => viewResume(profile.resumeUrl)}
                    className="inline-flex items-center gap-2 rounded-lg border border-default bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-muted transition-[color,border-color,transform] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.97]"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Resume
                  </button>
                  <button
                    onClick={() => downloadResume(profile.resumeUrl)}
                    className="inline-flex items-center gap-2 rounded-lg border border-default bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-muted transition-[color,border-color,transform] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.97]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right — contact rows + education */}
          <div className="border-t border-default p-8 sm:p-10 lg:border-l lg:border-t-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">Get in touch</p>

            <motion.div
              variants={listV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-2"
            >
              <ContactRow
                variants={rowV}
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                variants={rowV}
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
              />
              <ContactRow
                variants={rowV}
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="karni-prabhu-aa7a68241"
                href={profile.linkedin}
              />
              {hasGithub && (
                <ContactRow
                  variants={rowV}
                  icon={<Github className="h-4 w-4" />}
                  label="GitHub"
                  value="prabhu9652"
                  href={profile.github}
                />
              )}
            </motion.div>

            {/* Education */}
            <div className="mt-6 border-t border-default pt-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Education</p>
              <p className="mt-1.5 text-sm text-[rgb(var(--text))]">
                {education.degree} · {education.branch}
              </p>
              <p className="text-xs text-muted">
                {education.institution} · {education.graduation}
              </p>
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
  variants,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  variants: import('framer-motion').Variants;
}) {
  return (
    <motion.a
      href={href}
      variants={variants}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center justify-between gap-3 rounded-lg border border-default bg-[rgb(var(--bg))] p-3.5 transition-[border-color] duration-150 hover:border-accent-500/30"
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
      <ArrowUpRight
        className="h-3.5 w-3.5 text-muted/40 transition-[color,transform] duration-150 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-accent-500"
        aria-hidden="true"
      />
    </motion.a>
  );
}
