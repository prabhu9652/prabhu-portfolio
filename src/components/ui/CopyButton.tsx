import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

export function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const prefersReduced = useReducedMotion() ?? false;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-4 py-2 text-sm text-muted transition-[color,border-color] duration-150 hover:border-accent-500/40 hover:text-[rgb(var(--text))]"
      aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.14 }}
            className="flex items-center gap-2"
          >
            <Check className="h-4 w-4 text-accent-500" />
            <span>Copied</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.14 }}
            className="flex items-center gap-2"
          >
            <Copy className="h-4 w-4" />
            <span>{label ?? 'Copy'}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
