import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroStats, profile } from '@/data/portfolio';
import { downloadResume } from '@/utils/resume';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-[0.35] mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/[0.08] blur-[140px]" />
      </div>

      <div className="container-max section-padding">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">

          {/* Open-to-work pill */}
          <motion.div variants={item} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-default bg-elev px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <span className="text-xs font-medium text-muted">Open to SRE · DevOps · Cloud · Platform Engineering roles</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p variants={item} className="mt-4 font-mono text-sm text-accent-500 sm:text-base">
            {profile.role}
          </motion.p>

          {/* Single tagline — no duplicate paragraph */}
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </motion.p>

          {/* CTAs — primary first, then secondary row */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 active:scale-[0.98]"
            >
              View Experience
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.98]"
            >
              Explore Projects
            </a>
            <button
              onClick={() => downloadResume(profile.resumeUrl)}
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="mt-5 flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-all hover:border-accent-500/40 hover:text-accent-500"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-all hover:border-accent-500/40 hover:text-accent-500"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-all hover:border-accent-500/40 hover:text-accent-500"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-default bg-[rgb(var(--border))] sm:grid-cols-3 lg:grid-cols-5"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-elev px-5 py-4 transition-colors hover:bg-[rgb(var(--bg))]">
              <div className="font-mono text-base font-semibold text-accent-500 sm:text-lg">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
