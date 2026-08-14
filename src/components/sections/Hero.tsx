import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { heroStats, profile } from '@/data/portfolio';
import { downloadResume } from '@/utils/resume';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-40 mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-brand-500/10 blur-[100px]" />
      </div>

      <div className="container-max section-padding">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-default bg-elev px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <span className="text-xs text-muted">Available for SRE / DevOps / Cloud roles</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-mono text-base text-accent-500 sm:text-lg">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {profile.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-400"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => downloadResume(profile.resumeUrl)}
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--text))] hover:border-accent-500/40"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--text))] hover:border-accent-500/40"
            >
              <Mail className="h-4 w-4" />
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-default bg-[rgb(var(--border))] sm:grid-cols-3 lg:grid-cols-5"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="bg-elev p-5 transition-colors hover:bg-[rgb(var(--bg))]"
            >
              <div className="font-mono text-lg font-semibold text-accent-500 sm:text-xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
