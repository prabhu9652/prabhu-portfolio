import {
  Activity,
  BrainCircuit,
  GitMerge,
  Globe,
  LifeBuoy,
  ShieldAlert,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Maps string icon names (used in portfolio.ts data) to Lucide components.
// Activity is the fallback for any unrecognised name.
const iconMap: Record<string, LucideIcon> = {
  Activity,
  BrainCircuit,
  GitMerge,
  Globe,
  LifeBuoy,
  ShieldAlert,
  ShieldCheck,
  Workflow,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Activity;
  return <Cmp className={className} />;
}
