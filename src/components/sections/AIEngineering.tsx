import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  pipelineContainer,
  pipelineStep,
  reducedVariants,
} from '@/lib/motion';

const ragPipeline = [
  'Documents',
  'Ingestion',
  'Chunking',
  'Embeddings',
  'Vector Retrieval',
  'Context Assembly',
  'Bedrock LLM',
  'Response',
];

const agenticFlow = [
  'User / Trigger',
  'Orchestrator (LangGraph)',
  'Agent Router',
  'Tool Calls (MCP)',
  'Infrastructure / APIs',
  'Result Synthesis',
  'LangSmith Trace',
];

const aiStack = [
  { label: 'Inference',     items: ['Amazon Bedrock', 'Vertex AI', 'Microsoft Foundry'] },
  { label: 'Orchestration', items: ['LangChain', 'LangGraph', 'LangSmith'] },
  { label: 'Protocols',     items: ['MCP (Model Context Protocol)', 'RAG', 'Tool Calling'] },
  { label: 'Tooling',       items: ['Python', 'FastAPI', 'Streamlit', 'Vector Stores'] },
];

export function AIEngineering() {
  const prefersReduced = useReducedMotion() ?? false;

  const pipeV   = reducedVariants(pipelineContainer, prefersReduced);
  const stepV   = reducedVariants(pipelineStep, prefersReduced);
  const stackV  = reducedVariants(staggerContainer(0.07, 0.08), prefersReduced);
  const cardV   = reducedVariants(staggerChild, prefersReduced);
  const noteV   = reducedVariants(fadeUp(0.1, 8), prefersReduced);

  return (
    <Section id="ai" className="border-t border-default">
      <SectionHeader
        eyebrow="Amazon Bedrock · LangChain · LangGraph · MCP"
        title="AI infrastructure engineering"
        description="Building RAG pipelines, agentic workflows and MCP servers that connect AI models to real infrastructure and data — applying the same engineering rigour used for cloud systems."
      />

      {/* Two pipeline visualizations side by side */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {/* RAG pipeline — steps stagger in */}
        <div className="rounded-xl border border-default bg-elev p-5">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">RAG pipeline</p>
          <motion.div
            variants={pipeV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col gap-1.5"
          >
            {ragPipeline.map((step, i, arr) => (
              <motion.div key={step} variants={stepV} className="flex items-center gap-1.5">
                <span
                  className={`cursor-default rounded-md border px-3 py-1.5 text-xs transition-[color,border-color] duration-150 ${
                    i === 0 || i === arr.length - 1
                      ? 'border-accent-500/30 bg-accent-500/5 text-accent-500'
                      : 'border-default bg-[rgb(var(--bg))] text-muted hover:border-accent-500/40 hover:text-[rgb(var(--text))]'
                  }`}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-xs text-accent-500/40" aria-hidden="true">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Agentic flow — steps stagger in with a slight delay */}
        <div className="rounded-xl border border-default bg-elev p-5">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">
            Agentic workflow (LangGraph + MCP)
          </p>
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.055, delayChildren: prefersReduced ? 0 : 0.12 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col gap-1.5"
          >
            {agenticFlow.map((step, i, arr) => (
              <motion.div key={step} variants={stepV} className="flex items-center gap-1.5">
                <span
                  className={`cursor-default rounded-md border px-3 py-1.5 text-xs transition-[color,border-color] duration-150 ${
                    i === 0 || i === arr.length - 1
                      ? 'border-accent-500/30 bg-accent-500/5 text-accent-500'
                      : 'border-default bg-[rgb(var(--bg))] text-muted hover:border-accent-500/40 hover:text-[rgb(var(--text))]'
                  }`}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-xs text-accent-500/40" aria-hidden="true">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* AI stack grid — staggered cards */}
      <motion.div
        variants={stackV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4"
      >
        {aiStack.map((group) => (
          <motion.div
            key={group.label}
            variants={cardV}
            className="rounded-xl border border-default bg-elev p-4"
          >
            <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              {group.label}
            </p>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => (
                <span key={item} className="text-xs text-muted">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Context note — fades in last */}
      <motion.p
        variants={noteV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 border-l-2 border-default pl-3 text-xs leading-relaxed text-muted"
      >
        AI is a supporting capability — the primary practice is SRE, DevOps, DevSecOps and cloud platform engineering. AI tooling is applied where it solves real infrastructure and operational problems.
      </motion.p>
    </Section>
  );
}
