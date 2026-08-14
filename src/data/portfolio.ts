export const profile = {
  name: 'Prabhu Karni',
  role: 'Senior SRE • DevOps • DevSecOps • Cloud Engineer',
  tagline:
    'Building reliable, scalable, secure and automated cloud platforms — with strong application development and AI engineering capabilities.',
  description:
    '9 years of experience across AWS, Azure, GCP, Kubernetes, Infrastructure as Code, CI/CD, observability, security, cloud migrations and AI-powered applications.',
  email: 'karniprabhu0@gmail.com',
  phone: '+91 7013424340',
  linkedin: 'https://www.linkedin.com/in/karni-prabhu-aa7a68241',
  github: '',
  resumeUrl: '/SRE_DevOps_Classic.pdf',
};

export const heroStats = [
  { label: 'Years Experience', value: '9+' },
  { label: 'Cloud Providers', value: 'AWS / Azure / GCP' },
  { label: 'Cloud Native', value: 'Kubernetes' },
  { label: 'Discipline', value: 'SRE / DevOps / DevSecOps' },
  { label: 'AI Systems', value: 'RAG / Agentic' },
];

export const capabilities = [
  {
    icon: 'ShieldCheck',
    title: 'Site Reliability Engineering',
    description:
      'Designing and operating reliable production systems with strong focus on availability, scalability, observability, incident response and continuous improvement.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud & Platform Engineering',
    description:
      'Designing and automating AWS, Azure and GCP infrastructure using Infrastructure as Code, Kubernetes and cloud-native services.',
  },
  {
    icon: 'GitMerge',
    title: 'DevOps, DevSecOps & Automation',
    description:
      'Building CI/CD pipelines, GitOps workflows, deployment automation, infrastructure automation and secure software delivery platforms with security integrated across the delivery lifecycle.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI & Application Engineering',
    description:
      'Building AI applications, RAG pipelines, agentic workflows and infrastructure integrations using Python, Amazon Bedrock, LangChain, LangGraph and MCP.',
  },
];

export const philosophy = [
  {
    icon: 'ShieldCheck',
    title: 'Reliability First',
    description: 'Build systems that remain dependable under failure, scale and change.',
  },
  {
    icon: 'Workflow',
    title: 'Automate Everything Repeatable',
    description: 'Replace manual operational work with Infrastructure as Code, CI/CD and automation.',
  },
  {
    icon: 'Lock',
    title: 'Security by Design',
    description:
      'Apply least privilege, secrets management, encryption, network security and continuous security monitoring.',
  },
  {
    icon: 'Activity',
    title: 'Observable by Default',
    description: 'Build systems with meaningful metrics, logs, dashboards and actionable alerts.',
  },
  {
    icon: 'Boxes',
    title: 'Infrastructure as Code',
    description: 'Use Terraform and Terragrunt to create consistent, repeatable infrastructure.',
  },
  {
    icon: 'TrendingUp',
    title: 'Continuous Improvement',
    description: 'Use incidents, metrics and operational experience to continuously improve platforms.',
  },
];

export const techStack: { category: string; items: string[] }[] = [
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud Platform', 'DigitalOcean', 'Elastic Beanstalk'],
  },
  {
    category: 'Infrastructure & IaC',
    items: ['Terraform', 'Terragrunt', 'Ansible', 'Puppet', 'Chef'],
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
    category: 'CI/CD',
    items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Bamboo'],
  },
  {
    category: 'Observability',
    items: ['CloudWatch', 'Prometheus', 'Grafana', 'Loki', 'ELK Stack', 'Headlamp'],
  },
  {
    category: 'Security',
    items: [
      'IAM',
      'AWS WAF',
      'GuardDuty',
      'Inspector',
      'Macie',
      'Security Hub',
      'KMS',
      'AWS Config',
      'Secrets Manager',
      'Trivy',
      'Jit',
      'SonarQube',
      'Cloudflare Zero Trust',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Aurora PostgreSQL', 'Aurora MySQL', 'Redis'],
  },
  {
    category: 'Programming',
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
    company: 'VinylEquity',
    role: 'SRE',
    period: 'Jan 2023 – Jul 2026',
    summary:
      'Most recent and most senior engagement — owning AWS multi-account platform architecture, EKS-based Kubernetes delivery, observability and security, while introducing AI/RAG capabilities into the product.',
    highlights: [
      'Architected AWS multi-account infrastructure with Terraform and Terragrunt, standardizing environments through reusable modules and automated deployment pipelines.',
      'Operated production Kubernetes on EKS with Helm and ArgoCD GitOps, managing application lifecycle, scaling and secrets synchronization via External Secrets Operator and Reloader.',
      'Built observability stack across CloudWatch, Prometheus, Grafana, Loki and ELK for full metrics, log and alerting coverage.',
      'Implemented AWS security controls including WAF, Secrets Manager, IAM hardening and network segmentation with VPC endpoints and VPN.',
      'Delivered serverless building blocks with Lambda, API Gateway, S3, CloudFront and Route 53 for edge and API workloads.',
      'Engineered AI application features using RAG, LangChain, LangGraph, Amazon Bedrock, MCP and LangSmith.',
    ],
    stack: [
      'AWS',
      'Terraform',
      'Terragrunt',
      'EKS',
      'Helm',
      'ArgoCD',
      'GitHub Actions',
      'GitLab CI/CD',
      'CloudWatch',
      'Prometheus',
      'Grafana',
      'Loki',
      'ELK',
      'Lambda',
      'API Gateway',
      'S3',
      'CloudFront',
      'Route 53',
      'WAF',
      'Secrets Manager',
      'Aurora PostgreSQL',
      'Aurora MySQL',
      'Redis',
      'Bedrock',
      'LangChain',
      'LangGraph',
      'MCP',
      'LangSmith',
    ],
  },
  {
    company: 'Techverito',
    role: 'SRE',
    period: 'Jul 2022 – Jul 2026',
    summary:
      'SRE / platform engineering across hybrid environments — combining on-premises Kubernetes (RKE2) with AWS cloud (EKS) under a unified GitOps and observability model.',
    highlights: [
      'Operated hybrid Kubernetes across RKE2 on-premises and EKS on AWS, standardized through ArgoCD GitOps and Helm.',
      'Built AWS infrastructure automation with Terraform and Terragrunt, driven by GitLab CI/CD pipelines.',
      'Integrated Trivy image scanning into the delivery pipeline for DevSecOps compliance.',
      'Deployed observability with Prometheus, Grafana, Loki and CloudWatch across both environments.',
      'Hardened AWS security with Secrets Manager and External Secrets Operator for secrets synchronization.',
      'Built Python automation for operational toil and supported AI workloads including RAG.',
    ],
    stack: [
      'AWS',
      'Terraform',
      'Terragrunt',
      'GitLab CI/CD',
      'Trivy',
      'RKE2',
      'EKS',
      'Kubernetes',
      'ArgoCD',
      'Helm',
      'GitOps',
      'Prometheus',
      'Grafana',
      'Loki',
      'CloudWatch',
      'Secrets Manager',
      'External Secrets Operator',
      'Python',
      'RAG',
    ],
  },
  {
    company: 'Social Alpha',
    role: 'DevOps Engineer',
    period: 'Feb 2021 – Jul 2022',
    summary:
      'Multi-cloud DevOps engineering across AWS, GCP and DigitalOcean — with a landmark migration of six production applications from DigitalOcean to AWS.',
    highlights: [
      'Designed multi-cloud architecture across AWS, GCP and DigitalOcean using Terraform.',
      'Built CI/CD with Jenkins and GitHub Actions, implementing blue-green and zero-downtime deployments.',
      'Implemented DevSecOps practices with continuous security scanning and policy enforcement.',
      'Operated observability with Grafana, Prometheus and Loki.',
      'Led migration of 6 projects from DigitalOcean to AWS — redesigning networking, IAM, storage, CI/CD, monitoring and security, with end-to-end planning, execution and production cutover.',
    ],
    stack: [
      'AWS',
      'GCP',
      'DigitalOcean',
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'Grafana',
      'Prometheus',
      'Loki',
    ],
    achievement: {
      title: '6 Projects Migrated from DigitalOcean to AWS',
      detail:
        'End-to-end migration: architecture assessment, network redesign, IAM redesign, storage migration, CI/CD modernization, monitoring, security hardening and production cutover with minimal downtime.',
    },
  },
  {
    company: 'Integrated Data Systems Limited',
    role: 'DevOps Engineer',
    period: 'May 2017 – Dec 2020',
    summary:
      'The foundation of the career — progressing from Software Engineer to Linux Administrator to Automation Engineer to DevOps Engineer, building deep Linux, automation and cloud fundamentals.',
    highlights: [
      'Progressed through Software Engineer → Linux Administrator → Automation Engineer → DevOps Engineer.',
      'Built Linux and shell scripting foundations, including backup and recovery automation.',
      'Delivered AWS infrastructure with EC2, S3, ELB, Auto Scaling, Elastic Beanstalk and Terraform.',
      'Designed networking with VPC and VPC Peering across environments.',
      'Built CI/CD with Jenkins and Ansible, and containerized workloads with Docker.',
      'Expanded to Azure (AKS) and GCP (GKE) for multi-cloud Kubernetes delivery.',
    ],
    stack: [
      'Linux',
      'Shell',
      'EC2',
      'S3',
      'ELB',
      'Auto Scaling',
      'Elastic Beanstalk',
      'Terraform',
      'VPC',
      'VPC Peering',
      'Jenkins',
      'Ansible',
      'Docker',
      'Azure',
      'AKS',
      'GCP',
      'GKE',
    ],
    progression: [
      'Software Engineer',
      'Linux Administrator',
      'Automation Engineer',
      'DevOps Engineer',
    ],
  },
];

export const projects = [
  {
    id: '01',
    category: 'Infrastructure',
    title: 'Multi-Account AWS Platform',
    subtitle: 'Terraform + Terragrunt + AWS',
    description:
      'A standardized multi-account AWS platform built with Infrastructure as Code — enabling environment consistency, reusable modules, automated deployment, security guardrails and operational consistency across the organization.',
    points: [
      'Multi-account architecture with separation of concerns',
      'Reusable Terraform modules orchestrated with Terragrunt',
      'Environment standardization and automated deployment',
      'Security controls baked into the platform baseline',
      'Operational consistency across accounts and regions',
    ],
    stack: ['AWS', 'Terraform', 'Terragrunt'],
  },
  {
    id: '02',
    category: 'Kubernetes',
    title: 'Kubernetes / EKS Platform',
    subtitle: 'AWS EKS + Kubernetes + Helm + ArgoCD',
    description:
      'Production Kubernetes platform on EKS delivering containerized workloads through GitOps — with Helm-based deployments, application lifecycle management, autoscaling, observability and secrets management.',
    points: [
      'Containerized workloads on Amazon EKS',
      'Helm deployments driven by ArgoCD GitOps',
      'Application lifecycle, scaling and rolling updates',
      'Observability with Prometheus, Grafana and Loki',
      'Secrets management with External Secrets Operator',
    ],
    stack: ['EKS', 'Kubernetes', 'Helm', 'ArgoCD'],
  },
  {
    id: '03',
    category: 'Migration',
    title: 'Cloud Migration',
    subtitle: 'On-Premises → AWS',
    description:
      'Structured migration of on-premises workloads to AWS — following a disciplined Assessment → Architecture → Migration → Validation → Production Cutover methodology across compute, data and serverless layers.',
    points: [
      'Assessment of existing workloads and dependencies',
      'Target architecture on AWS',
      'Migration of EC2, RDS, S3 and EKS workloads',
      'Validation and performance testing',
      'Production cutover with minimal downtime',
    ],
    stack: ['EC2', 'RDS', 'S3', 'EKS', 'Serverless'],
  },
  {
    id: '04',
    category: 'Migration',
    title: 'DigitalOcean → AWS Migration',
    subtitle: '6 Applications Migrated',
    description:
      'Migration of six production applications from DigitalOcean to AWS — covering architecture assessment, network redesign, IAM redesign, storage migration, CI/CD modernization, monitoring, security and production cutover with minimal downtime.',
    points: [
      'Architecture assessment of 6 applications',
      'Network and IAM redesign on AWS',
      'Storage migration and data integrity validation',
      'CI/CD modernization with GitHub Actions',
      'Monitoring, security and production cutover',
    ],
    stack: ['AWS', 'DigitalOcean', 'Terraform', 'GitHub Actions'],
  },
  {
    id: '05',
    category: 'Observability',
    title: 'Cloud Observability Platform',
    subtitle: 'CloudWatch + Prometheus + Grafana + Loki + ELK',
    description:
      'Unified observability platform combining metrics, logs, dashboards and alerting — delivering full infrastructure and application visibility and enabling fast production troubleshooting.',
    points: [
      'Metrics with CloudWatch and Prometheus',
      'Logs centralized in Loki and ELK',
      'Dashboards and actionable alerting in Grafana',
      'Infrastructure and application observability',
      'Production troubleshooting and SLO tracking',
    ],
    stack: ['CloudWatch', 'Prometheus', 'Grafana', 'Loki', 'ELK'],
  },
  {
    id: '06',
    category: 'Security',
    title: 'Cloud Security Platform',
    subtitle: 'AWS Security',
    description:
      'Defense-in-depth AWS security platform integrating identity, network, data and threat-detection controls — with security embedded directly into infrastructure and deployment workflows.',
    points: [
      'IAM least privilege and KMS encryption',
      'WAF for edge protection',
      'GuardDuty, Inspector, Macie and Security Hub for threat detection',
      'AWS Config for continuous compliance',
      'Secrets Manager for secrets lifecycle',
    ],
    stack: ['IAM', 'WAF', 'GuardDuty', 'Security Hub', 'KMS', 'Secrets Manager'],
  },
  {
    id: '07',
    category: 'AI',
    title: 'AI / RAG Platform',
    subtitle: 'Amazon Bedrock + LangChain + LangGraph + Python',
    description:
      'Retrieval-Augmented Generation platform turning documents into grounded AI answers — through ingestion, chunking, embeddings, retrieval, context assembly and LLM generation.',
    points: [
      'Document ingestion and chunking pipeline',
      'Embeddings and vector retrieval',
      'Context assembly for grounded generation',
      'LLM response with Amazon Bedrock',
      'Orchestration with LangChain and LangGraph',
    ],
    stack: ['Bedrock', 'LangChain', 'LangGraph', 'Python'],
  },
  {
    id: '08',
    category: 'AI',
    title: 'Agentic AI / MCP Platform',
    subtitle: 'LangGraph + Amazon Bedrock + MCP + LangSmith',
    description:
      'Multi-agent orchestration platform using LangGraph for state and routing, MCP servers to expose infrastructure and application tools to agents, and LangSmith for tracing, debugging and evaluation.',
    points: [
      'Multi-agent orchestration with LangGraph',
      'State management and routing',
      'Tool calling through MCP servers',
      'Infrastructure and application tool exposure',
      'LLM tracing, debugging and evaluation with LangSmith',
    ],
    stack: ['LangGraph', 'Bedrock', 'MCP', 'LangSmith'],
  },
];

export const projectCategories = [
  'All',
  'Infrastructure',
  'Kubernetes',
  'Migration',
  'Observability',
  'Security',
  'AI',
];

export const development = {
  quote:
    'My primary professional experience is in SRE, DevOps, DevSecOps and cloud engineering. Alongside infrastructure and platform engineering, I work comfortably with application code and use development skills to build automation, APIs, integrations and AI-powered applications.',
  groups: [
    {
      icon: 'Server',
      title: 'Backend',
      items: ['Python', 'FastAPI', 'Node.js', 'Go'],
    },
    {
      icon: 'Code2',
      title: 'Application Development',
      items: ['JavaScript', 'TypeScript'],
    },
    {
      icon: 'Terminal',
      title: 'Automation',
      items: ['Python', 'Shell', 'Go'],
    },
    {
      icon: 'BrainCircuit',
      title: 'AI Development',
      items: ['LangChain', 'LangGraph', 'Amazon Bedrock', 'RAG', 'MCP', 'Streamlit'],
    },
  ],
};

export const aiCards = [
  {
    icon: 'FileSearch',
    title: 'RAG Systems',
    description: 'Document ingestion → embeddings → retrieval → grounded generation.',
  },
  {
    icon: 'Network',
    title: 'Agentic Workflows',
    description: 'State → routing → tools → agents → orchestration.',
  },
  {
    icon: 'ServerCog',
    title: 'Infrastructure AI',
    description: 'MCP servers exposing application and infrastructure capabilities to AI agents.',
  },
];

export const learningFocus = [
  'Cloud-native architecture',
  'Site Reliability Engineering',
  'AI engineering',
  'Agentic AI',
  'Kubernetes',
  'Cloud security',
  'Infrastructure automation',
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI', href: '#ai' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Contact', href: '#contact' },
];
