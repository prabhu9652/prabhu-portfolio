import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  ClipboardCheck,
  Database,
  Eye,
  GitBranch,
  Globe,
  Layers,
  LifeBuoy,
  Lock,
  Server,
  ShieldAlert,
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
    title: 'Cloud Platforms',
    nodes: [
      { id: 'aws', label: 'AWS', icon: Cloud, detail: 'Primary cloud — EC2, EKS, Lambda, S3, RDS, CloudFront, Route 53' },
      { id: 'azure', label: 'Azure', icon: Globe, detail: 'AKS, Azure services and multi-cloud workloads' },
      { id: 'gcp', label: 'GCP / DigitalOcean', icon: Globe, detail: 'GKE, GCP services and DigitalOcean compute' },
    ],
  },
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
      { id: 'eks', label: 'Kubernetes / EKS', icon: Layers, detail: 'Container orchestration on EKS, AKS, GKE and RKE2' },
      { id: 'helm', label: 'Helm / ArgoCD', icon: GitBranch, detail: 'GitOps delivery and application lifecycle' },
      { id: 'beanstalk', label: 'Elastic Beanstalk', icon: Server, detail: 'Managed application platform — deployment, environment config and operational management' },
    ],
  },
  {
    title: 'Data',
    nodes: [
      { id: 'db', label: 'Aurora / PostgreSQL', icon: Database, detail: 'Relational data — Aurora PostgreSQL and MySQL' },
      { id: 'cache', label: 'Redis', icon: Zap, detail: 'Caching and session layer' },
      { id: 'mongo', label: 'MongoDB', icon: Database, detail: 'Document store' },
    ],
  },
  {
    title: 'Observability',
    nodes: [
      { id: 'obs1', label: 'CloudWatch / Prometheus', icon: Eye, detail: 'Metrics collection and alerting' },
      { id: 'obs2', label: 'Grafana / Loki / ELK', icon: Eye, detail: 'Dashboards, log aggregation and search' },
    ],
  },
  {
    title: 'DevSecOps',
    nodes: [
      { id: 'scan', label: 'Trivy / SonarQube', icon: ShieldAlert, detail: 'Container and code security scanning in CI/CD pipelines' },
      { id: 'sec1', label: 'IAM / WAF / GuardDuty', icon: Lock, detail: 'Identity, edge security and threat detection' },
      { id: 'sec2', label: 'Security Hub / KMS / Secrets Manager', icon: Lock, detail: 'Compliance posture, encryption and secrets lifecycle' },
    ],
  },
  {
    title: 'Resilience',
    nodes: [
      { id: 'res1', label: 'Backup / Recovery', icon: LifeBuoy, detail: 'Backup strategies and restore validation' },
      { id: 'res2', label: 'Disaster Recovery', icon: LifeBuoy, detail: 'DR planning, recovery procedures and validation' },
      { id: 'res3', label: 'Operational Readiness', icon: LifeBuoy, detail: 'Recovery exercises and business continuity' },
    ],
  },
  {
    title: 'Compliance',
    nodes: [
      { id: 'comp1', label: 'Security Controls', icon: ClipboardCheck, detail: 'Infrastructure controls aligned with SOC 2 requirements' },
      { id: 'comp2', label: 'Automation / Scripts', icon: ClipboardCheck, detail: 'Automated evidence collection and validation' },
      { id: 'comp3', label: 'Drata / SOC 2', icon: ClipboardCheck, detail: 'Compliance workflows, evidence management and audit readiness' },
    ],
  },
  {
    title: 'Infrastructure',
    nodes: [
      { id: 'iac', label: 'Terraform / Terragrunt', icon: Layers, detail: 'Infrastructure as Code — multi-cloud, reusable modules' },
      { id: 'cicd', label: 'GitHub Actions / GitLab CI', icon: GitBranch, detail: 'CI/CD pipelines and deployment automation' },
    ],
  },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState<Node | null>(null);

  return (
    <Section id="architecture" className="border-t border-default">
      <SectionHeader
        eyebrow="SRE / DevOps / DevSecOps Architecture"
        title="A full production platform, end to end"
        description="An interactive view of the layered architecture — from multi-cloud platforms through compute, data, observability, DevSecOps, resilience, compliance and infrastructure. Hover or tap a node to see its role."
      />

      <div className="mt-12 space-y-3">
        {layers.map((layer, li) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: li * 0.05 }}
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
                      <div
                        className={`overflow-hidden text-xs text-muted transition-all duration-200 ${
                          isActive ? 'max-h-20 opacity-100 mt-0.5' : 'max-h-0 opacity-0'
                        }`}
                      >
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
