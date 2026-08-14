import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Database,
  Eye,
  GitBranch,
  Layers,
  Lock,
  Server,
  Users,
  Zap,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

type Node = {
  id: string;
  label: string;
  icon: typeof Cloud;
  detail: string;
};

const layers: { title: string; nodes: Node[] }[] = [
  {
    title: 'Edge',
    nodes: [
      { id: 'users', label: 'Users', icon: Users, detail: 'End users and API consumers' },
      { id: 'edge', label: 'CloudFront / WAF', icon: Cloud, detail: 'CDN delivery and edge security' },
      { id: 'api', label: 'API Gateway / ALB', icon: Zap, detail: 'Traffic entry and routing' },
    ],
  },
  {
    title: 'Compute',
    nodes: [
      { id: 'eks', label: 'Kubernetes / EKS', icon: Layers, detail: 'Container orchestration' },
      { id: 'helm', label: 'Helm / ArgoCD', icon: GitBranch, detail: 'GitOps delivery' },
      { id: 'serverless', label: 'Lambda / API', icon: Server, detail: 'Serverless compute' },
    ],
  },
  {
    title: 'Data',
    nodes: [
      { id: 'db', label: 'Aurora / PostgreSQL', icon: Database, detail: 'Relational data' },
      { id: 'cache', label: 'Redis', icon: Zap, detail: 'Caching layer' },
      { id: 'mongo', label: 'MongoDB', icon: Database, detail: 'Document store' },
    ],
  },
  {
    title: 'Observability',
    nodes: [
      { id: 'obs1', label: 'CloudWatch / Prometheus', icon: Eye, detail: 'Metrics collection' },
      { id: 'obs2', label: 'Grafana / Loki / ELK', icon: Eye, detail: 'Dashboards and logs' },
    ],
  },
  {
    title: 'Security',
    nodes: [
      { id: 'sec1', label: 'IAM / WAF / GuardDuty', icon: Lock, detail: 'Identity and threat detection' },
      { id: 'sec2', label: 'Security Hub / KMS / Secrets Manager', icon: Lock, detail: 'Compliance and secrets' },
    ],
  },
  {
    title: 'Infrastructure',
    nodes: [{ id: 'iac', label: 'Terraform / Terragrunt', icon: Layers, detail: 'Infrastructure as Code' }],
  },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState<Node | null>(null);

  return (
    <Section id="architecture" className="border-t border-default">
      <SectionHeader
        eyebrow="SRE / DevOps Architecture"
        title="A full production platform, end to end"
        description="An interactive view of the layered architecture — from edge through compute, data, observability, security and infrastructure. Hover or tap a node to see its role."
      />

      <div className="mt-12 space-y-3">
        {layers.map((layer, li) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: li * 0.06 }}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-500">{layer.title}</span>
              <div className="h-px flex-1 bg-[rgb(var(--border))]" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {layer.nodes.map((node) => {
                const IconCmp = node.icon;
                const isActive = active?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActive(node)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(isActive ? null : node)}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                      isActive
                        ? 'border-accent-500/50 bg-accent-500/5'
                        : 'border-default bg-elev hover:border-accent-500/30'
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-default bg-[rgb(var(--bg))] text-accent-500">
                      <IconCmp className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{node.label}</div>
                      <div className={`text-xs text-muted transition-all ${isActive ? 'opacity-100' : 'opacity-0 h-0'}`}>
                        {node.detail}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            {li < layers.length - 1 && (
              <div className="my-1 flex justify-center">
                <span className="text-accent-500/40">↓</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
