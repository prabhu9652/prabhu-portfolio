import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-default bg-elev px-3 py-1.5 text-sm text-muted transition-colors hover:text-[rgb(var(--text))] hover:border-accent-500/40"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="h-4 w-4 text-accent-500" /> : <Copy className="h-4 w-4" />}
      {label ?? (copied ? 'Copied' : 'Copy')}
    </button>
  );
}
