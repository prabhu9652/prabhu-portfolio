export const profile = {
  name: 'Prabhu Karni',
  role: 'Senior Site Reliability Engineer',
  roleContext: 'DevOps · DevSecOps · Cloud & Platform Engineering',
  tagline:
    'Building reliable, secure and scalable production infrastructure — across AWS, Azure, GCP and DigitalOcean, with Kubernetes, Terraform and Python as the core toolkit.',
  email: 'karniprabhu0@gmail.com',
  phone: '+91 7013424340',
  linkedin: 'https://www.linkedin.com/in/karni-prabhu-aa7a68241',
  github: 'https://github.com/prabhu9652',
  resumeUrl: '/SRE_DevOps_Classic.pdf',
};

export const heroStats = [
  { label: 'Experience', value: '9+' },
  { label: 'Cloud', value: 'AWS · Azure · GCP' },
  { label: 'Kubernetes', value: 'EKS · AKS · GKE · RKE2' },
  { label: 'CI/CD', value: 'GitHub Actions · GitLab · Jenkins' },
  { label: 'Observability', value: 'Prometheus · Grafana · Loki' },
];

export const capabilities = [
  {
    icon: 'ShieldCheck',
    title: 'Site Reliability Engineering',
    description:
      'Availability, scalability, incident response, SLO tracking and continuous improvement across production systems. On-call ownership, runbooks and post-mortem culture.',
  },
  {
    icon: 'Globe',
    title: 'Cloud & Platform Engineering',
    description:
      'Multi-cloud infrastructure across AWS, Azure, GCP and DigitalOcean — compute, networking, storage, serverless and managed services designed for production from day one.',
  },
  {
    icon: 'GitMerge',
    title: 'Kubernetes & Container Platforms',
    description:
      'EKS, AKS, GKE and RKE2 in production. Helm, ArgoCD GitOps, HPA, External Secrets Operator and hybrid cloud/on-premises Kubernetes delivery.',
  },
  {
    icon: 'Workflow',
    title: 'CI/CD & Infrastructure as Code',
    description:
      'GitHub Actions, GitLab CI/CD and Jenkins pipelines. Terraform and Terragrunt for multi-account IaC. GitOps delivery with ArgoCD across cloud and on-premises environments.',
  },
  {
    icon: 'Activity',
    title: 'Observability & Reliability',
    description:
      'Full-stack observability with Prometheus, Grafana, Loki, CloudWatch and ELK. SLO dashboards, alerting rules, on-call routing and runbook-backed incident response.',
  },
  {
    icon: 'ShieldAlert',
    title: 'DevSecOps & Cloud Security',
    description:
      'Security embedded in CI/CD — Trivy, SonarQube, IAM least-privilege, WAF, GuardDuty, Security Hub and Secrets Manager. Shift-left security from commit to runtime.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI & GenAI Infrastructure',
    description:
      'RAG pipelines, agentic workflows and MCP servers built on Amazon Bedrock, LangChain, LangGraph and LangSmith — applying production engineering rigour to AI workloads.',
  },
];

export const techStack: { category: string; items: string[] }[] = [
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'Azure', 'Google Cloud Platform', 'DigitalOcean'],
  },
  {
    category: 'Infrastructure & IaC',
    items: ['Terraform', 'Terragrunt', 'Ansible', 'Puppet', 'Chef', 'Elastic Beanstalk'],
  },
  {
    category: 'Containers & Kubernetes',
    items: [
      'Docker',
      'Kubernetes',
      'Amazon EKS',
      'Azure AKS',
      'Google GKE',
      'RKE2',
      'Helm',
      'ArgoCD',
      'Docker Compose',
      'Docker Swarm',
    ],
  },
  {
    category: 'CI/CD & GitOps',
    items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Bamboo'],
  },
  {
    category: 'Observability',
    items: ['CloudWatch', 'Prometheus', 'Grafana', 'Loki', 'ELK Stack', 'Headlamp'],
  },
  {
    category: 'DevSecOps & Security',
    items: [
      'Trivy',
      'SonarQube',
      'IAM',
      'AWS WAF',
      'GuardDuty',
      'Inspector',
      'Macie',
      'Security Hub',
      'KMS',
      'AWS Config',
      'Secrets Manager',
      'Jit',
      'Cloudflare Zero Trust',
    ],
  },
  {
    category: 'Resilience & DR',
    items: [
      'Drata',
      'SOC 2',
      'Disaster Recovery',
      'Backup & Restore',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Aurora PostgreSQL', 'Aurora MySQL', 'Redis'],
  },
  {
    category: 'Programming & Automation',
    items: ['Python', 'FastAPI', 'Shell Scripting', 'Go', 'JavaScript', 'TypeScript', 'Node.js'],
  },
  {
    category: 'AI Engineering',
    items: [
      'Amazon Bedrock',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'RAG',
      'Streamlit',
      'MCP',
      'Vertex AI',
      'Microsoft Foundry',
    ],
  },
];

export const experience = [
  {
    company: 'Techverito',
    role: 'Senior SRE',
    client: 'VinylEquity',
    period: 'Jul 2022 – Jul 2026',
    summary:
      'Four-year embedded SRE engagement — owning the full AWS platform from infrastructure through Kubernetes delivery, observability, security and AI/RAG capabilities for the VinylEquity product.',
    highlights: [
      'Architected AWS multi-account infrastructure with Terraform and Terragrunt, standardizing environments through reusable modules and automated deployment pipelines.',
      'Operated production Kubernetes on EKS and RKE2 (on-premises) with Helm and ArgoCD GitOps, managing application lifecycle, scaling and secrets synchronization via External Secrets Operator and Reloader.',
      'Built unified observability stack across CloudWatch, Prometheus, Grafana, Loki and ELK — full metrics, log and alerting coverage across cloud and on-premises environments.',
      'Implemented DevSecOps controls: Trivy container scanning, SonarQube code quality and security validation integrated into CI/CD pipelines.',
      'Implemented AWS security controls: WAF, Secrets Manager, IAM hardening, GuardDuty and network segmentation with VPC endpoints.',
      'Supported SOC 2 compliance through infrastructure security controls, evidence collection and compliance automation using Drata.',
      'Designed and supported disaster recovery — backup/restore processes, recovery procedures and operational readiness validation.',
      'Delivered serverless stack: Lambda, API Gateway, S3, CloudFront and Route 53 for edge and API workloads.',
      'Engineered production AI features using RAG, LangChain, LangGraph, Amazon Bedrock, MCP and LangSmith.',
    ],
    stack: [
      'AWS', 'Terraform', 'Terragrunt', 'EKS', 'Kubernetes', 'RKE2', 'Helm', 'ArgoCD',
      'GitHub Actions', 'GitLab CI/CD', 'Trivy', 'SonarQube',
      'CloudWatch', 'Prometheus', 'Grafana', 'Loki', 'ELK',
      'Lambda', 'API Gateway', 'S3', 'CloudFront', 'Route 53',
      'WAF', 'GuardDuty', 'Secrets Manager', 'Aurora PostgreSQL', 'Aurora MySQL', 'Redis',
      'Drata', 'SOC 2', 'Disaster Recovery', 'Bedrock', 'LangChain', 'LangGraph', 'MCP', 'LangSmith',
    ],
  },
  {
    company: 'Social Alpha',
    role: 'DevOps Engineer',
    period: 'Feb 2021 – Jul 2022',
    summary:
      'Multi-cloud DevOps engineering across AWS, GCP and DigitalOcean — including a complete migration of six production applications from DigitalOcean to AWS.',
    highlights: [
      'Designed multi-cloud architecture across AWS, GCP and DigitalOcean using Terraform.',
      'Built CI/CD pipelines with Jenkins and GitHub Actions — blue-green and zero-downtime deployments.',
      'Implemented DevSecOps practices: continuous security scanning, vulnerability assessment and policy enforcement.',
      'Operated observability with Grafana, Prometheus and Loki across all cloud environments.',
      'Led migration of 6 production applications from DigitalOcean to AWS — networking, IAM, storage, CI/CD, monitoring and security redesigned end-to-end.',
    ],
    stack: ['AWS', 'GCP', 'DigitalOcean', 'Terraform', 'Jenkins', 'GitHub Actions', 'Grafana', 'Prometheus', 'Loki'],
    achievement: {
      title: '6 Production Applications Migrated: DigitalOcean → AWS',
      detail:
        'End-to-end migration: architecture assessment, network redesign, IAM redesign, storage migration, CI/CD modernization, monitoring, security hardening and production cutover with minimal downtime.',
    },
  },
  {
    company: 'Integrated Data Systems Limited',
    role: 'DevOps Engineer',
    period: 'May 2017 – Dec 2020',
    summary:
      'Built the technical foundations — progressing through four roles over three years while developing deep Linux, networking, automation and multi-cloud infrastructure skills.',
    highlights: [
      'Progressed: Software Engineer → Linux Administrator → Automation Engineer → DevOps Engineer.',
      'Built Linux and shell scripting foundations including backup, recovery and operational automation.',
      'Delivered AWS infrastructure: EC2, S3, ELB, Auto Scaling, Elastic Beanstalk and Terraform.',
      'Deployed and managed application workloads on Elastic Beanstalk — environment configuration, deployment pipelines and operational management.',
      'Designed VPC networking with VPC Peering across environments.',
      'Built CI/CD with Jenkins and Ansible; containerized workloads with Docker.',
      'Expanded to Azure (AKS) and GCP (GKE) for multi-cloud Kubernetes delivery.',
    ],
    stack: [
      'Linux', 'Shell', 'EC2', 'S3', 'ELB', 'Auto Scaling', 'Elastic Beanstalk',
      'Terraform', 'VPC', 'VPC Peering', 'Jenkins', 'Ansible', 'Docker',
      'Azure', 'AKS', 'GCP', 'GKE',
    ],
    progression: ['Software Engineer', 'Linux Administrator', 'Automation Engineer', 'DevOps Engineer'],
  },
];

export const projects = [
  {
    id: '01',
    category: 'Infrastructure',
    title: 'Multi-Account AWS Platform',
    subtitle: 'Terraform · Terragrunt · AWS Organizations',
    description:
      'Standardized multi-account AWS platform built with Infrastructure as Code — environment consistency, reusable modules, automated pipelines and security guardrails baked into the baseline.',
    points: [
      'Multi-account architecture with workload isolation and SCPs',
      'Reusable Terraform modules orchestrated with Terragrunt workspaces',
      'Automated account vending and environment bootstrapping via CI/CD',
      'Security controls, tagging standards and cost allocation baked into modules',
      'Consistent baseline across dev, staging and production accounts',
    ],
    stack: ['AWS', 'Terraform', 'Terragrunt', 'AWS Organizations', 'IAM'],
  },
  {
    id: '02',
    category: 'Kubernetes',
    title: 'Hybrid Kubernetes Platform',
    subtitle: 'EKS · RKE2 · Helm · ArgoCD · GitOps',
    description:
      'Production Kubernetes spanning EKS on AWS and RKE2 on-premises under a unified GitOps delivery model — with Helm lifecycle management, autoscaling, secrets synchronization and full observability.',
    points: [
      'EKS on AWS and RKE2 on-premises standardized through ArgoCD GitOps',
      'Helm-based application lifecycle with rolling updates and rollback',
      'External Secrets Operator and Reloader for secrets synchronization',
      'Cluster autoscaler and HPA for workload scaling',
      'Prometheus, Grafana and Loki observability across both clusters',
    ],
    stack: ['EKS', 'RKE2', 'Kubernetes', 'Helm', 'ArgoCD', 'GitOps', 'External Secrets Operator'],
  },
  {
    id: '03',
    category: 'Migration',
    title: 'DigitalOcean → AWS Migration',
    subtitle: '6 Production Applications · End-to-end',
    description:
      'Modernized six production applications from DigitalOcean to AWS — redesigning networking, IAM, storage, CI/CD, monitoring and security with end-to-end cutover planning.',
    points: [
      'Architecture assessment of 6 production applications and dependency mapping',
      'VPC, subnet and security group redesign on AWS',
      'IAM roles, instance profiles and least-privilege policy design',
      'CI/CD pipeline migration from manual deploys to GitHub Actions',
      'Monitoring with Prometheus and Grafana, production cutover with zero data loss',
    ],
    stack: ['AWS', 'DigitalOcean', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
    achievement: {
      title: '6 Production Applications Migrated',
      detail: 'End-to-end: architecture assessment → network redesign → IAM redesign → storage migration → CI/CD modernization → monitoring → security hardening → production cutover with minimal downtime.',
    },
  },
  {
    id: '04',
    category: 'Observability',
    title: 'Cloud Observability Platform',
    subtitle: 'Prometheus · Grafana · Loki · CloudWatch · ELK',
    description:
      'Unified observability platform combining metrics, logs, dashboards and alerting — giving the engineering team full visibility across infrastructure and applications to enable fast incident response.',
    points: [
      'Metrics collection via Prometheus with CloudWatch for AWS-native services',
      'Log aggregation with Loki (Kubernetes) and ELK (application logs)',
      'Grafana dashboards for infrastructure, application and SLO tracking',
      'Alerting rules and PagerDuty routing for on-call response',
      'Runbooks and dashboard-to-incident workflow for production troubleshooting',
    ],
    stack: ['CloudWatch', 'Prometheus', 'Grafana', 'Loki', 'ELK Stack'],
  },
  {
    id: '05',
    category: 'DevSecOps',
    title: 'DevSecOps Engineering Platform',
    subtitle: 'Trivy · SonarQube · IAM · WAF · GuardDuty',
    description:
      'Security integrated into the delivery lifecycle from source to runtime — container scanning, code quality gates, secrets management, edge protection and continuous threat detection.',
    points: [
      'Trivy container image scanning and SonarQube code quality gates in CI/CD',
      'Security validation and policy enforcement in GitHub Actions and GitLab CI/CD',
      'IAM least-privilege, WAF rules and GuardDuty threat detection',
      'AWS Secrets Manager — no hardcoded credentials in pipelines or containers',
      'Runtime monitoring with GuardDuty, Inspector, Security Hub and CloudWatch',
    ],
    stack: ['Trivy', 'SonarQube', 'GitHub Actions', 'GitLab CI/CD', 'IAM', 'WAF', 'GuardDuty', 'Secrets Manager', 'Terraform'],
    flow: ['Source Control', 'CI/CD', 'Code Scan', 'Container Scan', 'Security Validation', 'Deploy', 'Runtime Security', 'Monitoring'],
  },
  {
    id: '06',
    category: 'Security',
    title: 'AWS Defense-in-Depth Security',
    subtitle: 'IAM · WAF · GuardDuty · Security Hub · KMS',
    description:
      'Multi-layer AWS security platform integrating identity, network, data and threat-detection controls — with security embedded into infrastructure provisioning, not bolted on after deployment.',
    points: [
      'IAM least privilege with SCP guardrails at the organization level',
      'WAF rules for edge protection and DDoS mitigation',
      'GuardDuty, Inspector, Macie and Security Hub for threat detection and compliance posture',
      'KMS key management and Secrets Manager for encryption and secrets lifecycle',
      'AWS Config for continuous compliance drift detection and remediation',
    ],
    stack: ['IAM', 'WAF', 'GuardDuty', 'Inspector', 'Security Hub', 'KMS', 'Secrets Manager', 'AWS Config', 'Macie'],
  },
  {
    id: '07',
    category: 'AI',
    title: 'RAG & Agentic AI Platform',
    subtitle: 'Amazon Bedrock · LangChain · LangGraph · MCP · LangSmith',
    description:
      'Production AI platform combining a Retrieval-Augmented Generation pipeline for grounded document answers with a multi-agent orchestration layer — exposing infrastructure capabilities to AI agents via MCP servers.',
    points: [
      'RAG pipeline: document ingestion → chunking → embeddings → vector retrieval → grounded LLM response',
      'Multi-agent orchestration with LangGraph state management and routing',
      'MCP servers exposing infrastructure and application tools to AI agents',
      'LLM evaluation, tracing and debugging with LangSmith',
      'Amazon Bedrock for LLM inference; Streamlit for internal tooling UIs',
    ],
    stack: ['Amazon Bedrock', 'LangChain', 'LangGraph', 'MCP', 'LangSmith', 'Python', 'Streamlit'],
    flow: ['Documents', 'Ingestion', 'Embeddings', 'Vector Store', 'Retrieval', 'Context', 'Bedrock LLM', 'Response'],
  },
  {
    id: '08',
    category: 'Resilience',
    title: 'Disaster Recovery & Cloud Resilience',
    subtitle: 'Backup/Recovery · DR Planning · Recovery Validation',
    description:
      'Infrastructure and operational processes enabling critical workloads to be recovered reliably after failure — covering backup strategy, DR architecture, recovery procedures and operational readiness validation.',
    points: [
      'DR planning: RPO/RTO requirements, recovery tier classification',
      'Backup and restore implementation across EC2, RDS, EFS and S3',
      'Recovery procedure documentation and runbook creation',
      'Recovery validation exercises to confirm actual recoverability',
      'Business continuity planning and failure preparedness for production systems',
    ],
    stack: ['AWS Backup', 'S3', 'RDS Snapshots', 'Disaster Recovery', 'Runbooks', 'Infrastructure Recovery'],
    flow: ['Production', 'Continuous Backup', 'DR Environment', 'Recovery Trigger', 'Validation', 'Operational Readiness'],
  },
];

export const projectCategories = [
  'All',
  'Infrastructure',
  'Kubernetes',
  'Migration',
  'Observability',
  'DevSecOps',
  'Security',
  'AI',
  'Resilience',
];

export const securityResilienceCards = [
  {
    icon: 'ShieldAlert',
    title: 'DevSecOps & Security',
    description:
      'Security integrated into CI/CD, infrastructure and runtime — Trivy, SonarQube, IAM, WAF, GuardDuty, Security Hub, KMS and continuous monitoring.',
    tags: ['Trivy', 'SonarQube', 'IAM', 'WAF', 'GuardDuty', 'KMS', 'Security Hub'],
  },
  {
    icon: 'LifeBuoy',
    title: 'Disaster Recovery',
    description:
      'Backup and recovery planning, cloud resilience architecture, recovery validation and operational readiness for production workloads.',
    tags: ['Backup & Restore', 'DR Planning', 'Recovery Validation', 'Business Continuity'],
  },
  {
    icon: 'ClipboardCheck',
    title: 'Compliance Automation',
    description:
      'SOC 2 support through infrastructure controls, automated evidence collection, Drata workflows and engineering-driven compliance activities.',
    tags: ['SOC 2', 'Drata', 'Evidence Collection', 'Compliance Automation'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Security & DR', href: '#security-dr' },
  { label: 'AI', href: '#ai' },
  { label: 'Contact', href: '#contact' },
];

export const education = {
  institution: 'Kakinada Institute of Engineering and Technology-II',
  university: 'Jawaharlal Nehru Technological University, Kakinada (JNTU-K)',
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Mechanical Engineering',
  graduation: 'June 2017',
};
