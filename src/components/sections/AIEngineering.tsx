import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';

const ragPipeline = ['Documents', 'Ingestion', 'Chunking', 'Embeddings', 'Vector Retrieval', 'Context Assembly', 'Bedrock LLM', 'Response'];

const agenticFlow = ['User / Trigger', 'Orchestrator (LangGraph)', 'Agent Router', 'Tool Calls (MCP)', 'Infrastructure / APIs', 'Result Synthesis', 'LangSmith Trace'];

const aiStack = [
  { label: 'Inference', items: ['Amazon Bedrock', 'Vertex AI', 'Microsoft Foundry'] },
  { label: 'Orchestration', items: ['LangChain', 'LangGraph', 'LangSmith'] },
  { label: 'Protocols', items: ['MCP (Model Context Protocol)', 'RAG', 'Tool Calling'] },
  { label: 'Tooling', items: ['Python', 'FastAPI', 'Streamlit', 'Vector Stores'] },
];

export function AIEngineering() {
  return (
    <Section id="ai" className="border-t border-default">
      <SectionHeader
        eyebrow="AI Engineering"
        title="AI infrastructure and application engineering"
        description="Building RAG pipelines, agentic workflows and MCP servers that connect AI models to real infrastructure and data — applying the same engineering rigor used for cloud systems."
      />

      {/* Two pipeline visualizations side by side */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {/* RAG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="rounded-xl border border-default bg-elev p-5"
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">RAG pipeline</p>
          <div className="flex flex-col gap-1.5">
            {ragPipeline.map((step, i, arr) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className={`rounded-md border px-3 py-1.5 text-xs transition-colors cursor-default ${
                  i === 0 || i === arr.length - 1
                    ? 'border-accent-500/30 bg-accent-500/5 text-accent-500'
                    : 'border-default bg-[rgb(var(--bg))] text-muted hover:border-accent-500/40 hover:text-[rgb(var(--text))]'
                }`}>
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-accent-500/40 text-xs" aria-hidden="true">↓</span>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Agentic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-xl border border-default bg-elev p-5"
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">Agentic workflow (LangGraph + MCP)</p>
          <div className="flex flex-col gap-1.5">
            {agenticFlow.map((step, i, arr) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className={`rounded-md border px-3 py-1.5 text-xs transition-colors cursor-default ${
                  i === 0 || i === arr.length - 1
                    ? 'border-accent-500/30 bg-accent-500/5 text-accent-500'
                    : 'border-default bg-[rgb(var(--bg))] text-muted hover:border-accent-500/40 hover:text-[rgb(var(--text))]'
                }`}>
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-accent-500/40 text-xs" aria-hidden="true">↓</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI stack organized by concern */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-4 grid gap-3 grid-cols-2 md:grid-cols-4"
      >
        {aiStack.map((group) => (
          <div key={group.label} className="rounded-xl border border-default bg-elev p-4">
            <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">{group.label}</p>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => (
                <span key={item} className="text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Context note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-5 text-xs leading-relaxed text-muted/70"
      >
        AI is a supporting capability — the primary practice is SRE, DevOps, DevSecOps and cloud platform engineering. AI tooling is applied where it solves real infrastructure and operational problems.
      </motion.p>
    </Section>
  );
}
