"use client"

import React from "react"
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Database } from "lucide-react"

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
  badge?: string
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
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border/80">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Production Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Systems & Proof-of-Work
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md">
          Not just sample tutorials. Production-grade systems with verifiable latency optimizations, architectural diagrams, and patent-backed IP.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col justify-between rounded-2xl bg-card border border-border/80 p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                  {project.badge}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-lg transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-sky-400 mb-3">{project.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              {/* Standout Metric Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/60 border border-border/60 mb-6">
                <div className="text-2xl font-extrabold text-foreground tracking-tight font-mono text-primary">
                  {project.metric}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{project.metricLabel}</span>
                </div>
              </div>

              {/* Architecture Blueprint Strip */}
              <div className="mb-6 p-3 rounded-lg bg-secondary/40 border border-border/40 font-mono text-[11px] text-muted-foreground leading-tight">
                <span className="text-foreground font-semibold">Arch: </span>
                {project.architecture}
              </div>
            </div>

            {/* Tech stack badge pills */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-secondary text-foreground/80 font-mono"
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
