import {
  Activity,
  BrainCircuit,
  Boxes,
  ClipboardCheck,
  Cloud,
  Code2,
  FileSearch,
  GitMerge,
  Globe,
  LifeBuoy,
  Lock,
  Network,
  RefreshCw,
  Server,
  ServerCog,
  ShieldAlert,
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
  ClipboardCheck,
  Cloud,
  Code2,
  FileSearch,
  GitMerge,
  Globe,
  LifeBuoy,
  Lock,
  Network,
  RefreshCw,
  Server,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  TrendingUp,
  Workflow,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Activity;
  return <Cmp className={className} />;
}
