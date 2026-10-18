"use client"

import React from "react"
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Database } from "lucide-react"
import { GithubIcon } from "@/components/icons"

interface Project {
  title: string
  tagline: string
  description: string
  metric: string
  metricLabel: string
  stack: string[]
  architecture: string
  githubUrl: string
  liveDemoUrl?: string
  badge: string
  badgeColor: string
}

const PROJECTS: Project[] = [
  {
    title: "DARKSEID",
    tagline: "Low-Latency Autonomous Multi-Agent Orchestration",
    description:
      "A deterministic agentic workflow runtime engine designed to coordinate concurrent reasoning agents. Features dynamic checkpointing, human-in-the-loop interruption vectors, and streaming AST synthesis.",
    metric: "-35%",
    metricLabel: "p95 Orchestration Latency with LangGraph & Semantic Caching",
    stack: ["LangGraph", "FastAPI", "AWS Bedrock", "Qdrant", "React", "Docker"],
    architecture: "State Graph Router → Semantic Cache Layer → Bedrock / Claude 3.5 → Qdrant Vector Pipeline",
    githubUrl: "https://github.com/PrathameshTawar",
    liveDemoUrl: "https://github.com/PrathameshTawar",
    badge: "Featured Build",
    badgeColor: "bg-[#2f6bf6]/15 text-[#2f6bf6] border-[#2f6bf6]/30",
  },
  {
    title: "GML Memory Protocol",
    tagline: "Patent-Pending Cross-Vendor LLM Memory Sync",
    description:
      "A universal protocol enabling stateful episodic and semantic memory transfer across disparate model families (OpenAI, Anthropic, open-weights). Eliminates vendor lock-in by normalizing attention context windows.",
    metric: "99.4%",
    metricLabel: "Context Recall Parity Across Heterogeneous Model Swarms",
    stack: ["Python", "pgvector", "FastAPI", "OpenAI SDK", "Anthropic API", "Protobuf"],
    architecture: "Episodic Ingestion → Embedding Projection → Cross-Model Alignment → Sync Dispatcher",
    githubUrl: "https://github.com/PrathameshTawar",
    badge: "Patent Filed",
    badgeColor: "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30",
  },
  {
    title: "Hive Mind AI",
    tagline: "Distributed Swarm Intelligence & Diagnostics",
    description:
      "Consensus-driven multi-agent platform for automated root-cause analysis in distributed cloud applications. Employs round-robin agent debates to verify edge-case hypotheses before executing remediation playbooks.",
    metric: "Rank 11",
    metricLabel: "National Finalist in Build & Grow AI 2.0 (800+ Teams)",
    stack: ["Next.js", "TypeScript", "LangChain", "Celery", "Redis", "PostgreSQL"],
    architecture: "Worker Swarm → Async Celery Tasks → Consensus Validator → Next.js Real-time Dashboard",
    githubUrl: "https://github.com/PrathameshTawar",
    badge: "Hackathon Award",
    badgeColor: "bg-[#ff5a36]/15 text-[#ff5a36] border-[#ff5a36]/30",
  },
  {
    title: "Indic-Language RAG",
    tagline: "Bilingual Retrieval-Augmented Generation for Low-Resource Languages",
    description:
      "Specialized hybrid dense-sparse retrieval pipeline with cross-lingual embedding alignment for Indic dialect corpora. Addresses tokenization bloat and semantic drift in non-English technical documentation.",
    metric: "+42%",
    metricLabel: "Retrieval Latency Reduction & 500+ Corpus Documents Indexed",
    stack: ["HuggingFace", "PyTorch", "FAISS", "FastAPI", "BGE-M3", "Streamlit"],
    architecture: "Chunk Tokenizer → BGE-M3 Dual Encoder → FAISS Quantized Index → Re-ranking Cross-Encoder",
    githubUrl: "https://github.com/PrathameshTawar",
    badge: "Research Publication",
    badgeColor: "bg-[#fde047]/15 text-[#facc15] border-[#fde047]/30",
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#182238]">
        <div>
          <div className="inline-flex items-center gap-2 text-[#2f6bf6] font-mono text-xs uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Production Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Featured Systems & Proof-of-Work
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md font-mono">
          [02 / 07] Production-grade systems with verifiable latency optimizations, architectural diagrams, and patent-backed IP.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col justify-between rounded-3xl bg-[#0c1222] border border-[#182238] p-6 sm:p-8 hover:border-[#2f6bf6]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2f6bf6]/5"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="p-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="p-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2f6bf6] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-sky-400 mb-3">{project.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              {/* Standout Metric Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#080c18] border border-[#182238] mb-6">
                <div className="text-2xl font-extrabold tracking-tight font-mono text-[#2f6bf6]">
                  {project.metric}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
                  <TrendingUp className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0" />
                  <span>{project.metricLabel}</span>
                </div>
              </div>

              {/* Architecture Blueprint Strip */}
              <div className="mb-6 p-3.5 rounded-xl bg-[#080c18]/90 border border-[#1e2a47] font-mono text-[11px] text-muted-foreground leading-tight">
                <span className="text-[#22c55e] font-semibold">Arch: </span>
                {project.architecture}
              </div>
            </div>

            {/* Tech stack badge pills */}
            <div className="pt-4 border-t border-[#182238] flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#121a2e] text-slate-300 font-mono border border-[#1e2a47]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
