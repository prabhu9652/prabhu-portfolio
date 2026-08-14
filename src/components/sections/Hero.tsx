import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroStats, profile } from '@/data/portfolio';
import { downloadResume } from '@/utils/resume';
import {
  heroContainer,
  heroItem,
  heroStats as heroStatVariants,
  reducedVariants,
} from '@/lib/motion';

export function Hero() {
  const prefersReduced = useReducedMotion() ?? false;

  const containerV = reducedVariants(heroContainer, prefersReduced);
  const itemV      = reducedVariants(heroItem, prefersReduced);
  const statsV     = reducedVariants(heroStatVariants, prefersReduced);

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-[0.35] mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/[0.08] blur-[140px]" />
      </div>

      <div className="container-max section-padding">
        <motion.div
          variants={containerV}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Availability pill */}
          <motion.div variants={itemV} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-default bg-elev px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <span className="text-xs font-medium text-muted">
              Open to SRE · DevOps · DevSecOps · Cloud · Platform Engineering roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemV}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
          >
            {profile.name}
          </motion.h1>

          {/* Primary role — clear, single title */}
          <motion.p variants={itemV} className="mt-4 font-mono text-sm text-accent-500 sm:text-base">
            {profile.role}
          </motion.p>

          {/* Supporting context — breadth without clutter */}
          <motion.p variants={itemV} className="mt-1 text-xs text-muted sm:text-sm">
            {profile.roleContext}
          </motion.p>

          {/* Tagline — concrete, not generic */}
          <motion.p variants={itemV} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemV} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-[background-color,transform] duration-150 hover:bg-accent-400 active:scale-[0.97]"
            >
              View Experience
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-[color,border-color,background-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.97]"
            >
              Projects
            </a>
            <button
              onClick={() => downloadResume(profile.resumeUrl)}
              className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-5 py-2.5 text-sm font-medium text-muted transition-[color,border-color,background-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))] active:scale-[0.97]"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemV} className="mt-5 flex items-center gap-2">
            {[
              { href: profile.linkedin, label: 'LinkedIn profile', Icon: Linkedin },
              { href: profile.github,   label: 'GitHub profile',   Icon: Github  },
              { href: `mailto:${profile.email}`, label: 'Send email', Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-default bg-elev text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-accent-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={statsV}
          initial="hidden"
          animate="show"
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-default bg-[rgb(var(--border))] sm:grid-cols-3 lg:grid-cols-5"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.38 + i * 0.05 }}
              className="bg-elev px-5 py-4 transition-[background-color] duration-150 hover:bg-[rgb(var(--bg))]"
            >
              <div className="font-mono text-sm font-semibold text-accent-500 sm:text-base leading-snug">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
