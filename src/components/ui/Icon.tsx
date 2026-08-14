import {
  Activity,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  FileSearch,
  GitMerge,
  Lock,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
  Terminal,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Activity,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  FileSearch,
  GitMerge,
  Lock,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
  Terminal,
  TrendingUp,
  Workflow,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Activity;
  return <Cmp className={className} />;
}
