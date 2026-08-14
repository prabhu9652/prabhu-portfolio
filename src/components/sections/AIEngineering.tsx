import { motion } from 'framer-motion';
import { aiCards } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Section, SectionHeader } from '@/components/ui/Section';

export function AIEngineering() {
  return (
    <Section id="ai" className="border-t border-default">
      <SectionHeader
        eyebrow="AI Engineering"
        title="Exploring the intersection of AI and infrastructure"
        description="AI experience spans Amazon Bedrock, LangChain, LangGraph, RAG pipelines, MCP servers, LangSmith, Streamlit and multi-agent workflows — applying AI to infrastructure and application problems."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {aiCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-default bg-elev p-6 transition-colors hover:border-accent-500/30"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-500/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-default bg-[rgb(var(--bg))] text-accent-500">
              <Icon name={card.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* RAG pipeline visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-6 overflow-hidden rounded-2xl border border-default bg-elev p-6 sm:p-8"
      >
        <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">RAG pipeline</div>
        <div className="flex flex-wrap items-center gap-2">
          {['Documents', 'Ingestion', 'Chunking', 'Embeddings', 'Retrieval', 'Context', 'LLM', 'Response'].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-default bg-[rgb(var(--bg))] px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent-500/40 hover:text-[rgb(var(--text))]">
                {step}
              </span>
              {i < arr.length - 1 && <span className="text-accent-500/50">→</span>}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
