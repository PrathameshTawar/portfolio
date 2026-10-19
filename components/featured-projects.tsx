"use client"

import React from "react"
import { ArrowUpRight, TrendingUp, Cpu } from "lucide-react"
import { GithubIcon } from "@/components/icons"

interface Project {
  title: string
  tagline: string
  description: string
  metric: string
  metricLabel: string
  stack: string[]
  note: string
  githubUrl: string
  liveDemoUrl?: string
  badge: string
  badgeColor: string
}

const PROJECTS: Project[] = [
  {
    title: "DARKSEID",
    tagline: "LangGraph Multi-Agent Runtime with Semantic Caching",
    description:
      "Standard multi-agent chains often suffer from high latency and token costs on repeated queries. I built DARKSEID to run deterministic agent state machines, adding an in-memory Redis semantic cache that drops p95 response time by 35%.",
    metric: "-35%",
    metricLabel: "p95 Orchestration Latency with LangGraph & Redis",
    stack: ["LangGraph", "FastAPI", "AWS Bedrock", "Qdrant", "Redis", "Docker"],
    note: "LangGraph StateGraph → Redis Semantic Cache → Bedrock / Claude 3.5 → Qdrant Vector DB",
    githubUrl: "https://github.com/PrathameshTawar",
    liveDemoUrl: "https://github.com/PrathameshTawar",
    badge: "Core Project",
    badgeColor: "bg-[#2f6bf6]/15 text-[#2f6bf6] border-[#2f6bf6]/30",
  },
  {
    title: "GML Memory Protocol",
    tagline: "Cross-Vendor LLM Context Synchronization",
    description:
      "Switching between models (Claude, GPT-4, Llama) typically means losing conversation history or re-ingesting raw context windows. This protocol normalizes episodic memory into compact Protobuf vectors to achieve 99.4% context recall parity without catastrophic forgetting.",
    metric: "99.4%",
    metricLabel: "Context Recall Parity Across Model Families",
    stack: ["Python", "pgvector", "FastAPI", "OpenAI SDK", "Anthropic API", "Protobuf"],
    note: "Patent-filed protocol for vendor-neutral memory persistence",
    githubUrl: "https://github.com/PrathameshTawar",
    badge: "Patent Filed",
    badgeColor: "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30",
  },
  {
    title: "Hive Mind AI",
    tagline: "Distributed Multi-Agent Diagnostics",
    description:
      "Built for the Build & Grow AI 2.0 hackathon. A distributed multi-agent system that ingests cloud error logs, runs concurrent hypotheses through debate agents, and automatically identifies root causes before engineers get paged.",
    metric: "Rank 11",
    metricLabel: "National Finalist out of 800+ Teams",
    stack: ["Next.js", "TypeScript", "LangChain", "Celery", "Redis", "PostgreSQL"],
    note: "Rank 11 out of 800+ national builder teams",
    githubUrl: "https://github.com/PrathameshTawar",
    badge: "Hackathon Finalist",
    badgeColor: "bg-[#ff5a36]/15 text-[#ff5a36] border-[#ff5a36]/30",
  },
  {
    title: "Indic-Language RAG",
    tagline: "Bilingual Retrieval for Low-Resource Dialects",
    description:
      "Standard embedding models struggle on Indic languages due to token fragmentation. I implemented a bilingual dense retrieval pipeline using BGE-M3 and quantized FAISS partitions, indexing 500+ documents with a 42% reduction in retrieval latency.",
    metric: "+42%",
    metricLabel: "Retrieval Latency Reduction & 500+ Documents",
    stack: ["HuggingFace", "PyTorch", "FAISS", "FastAPI", "BGE-M3", "Streamlit"],
    note: "+28% MRR improvement over standard multilingual baselines",
    githubUrl: "https://github.com/PrathameshTawar",
    badge: "Research & Benchmarking",
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
            <span>Featured Builds · 02 / 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Projects & Real-World Execution
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md font-mono">
          Real code, real benchmarks, and architecture decisions backed by quantifiable latency numbers.
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
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{project.description}</p>

              {/* Metric Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#080c18] border border-[#182238] mb-6">
                <div className="text-2xl font-extrabold tracking-tight font-mono text-[#2f6bf6]">
                  {project.metric}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
                  <TrendingUp className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0" />
                  <span>{project.metricLabel}</span>
                </div>
              </div>

              {/* Engineering Note */}
              <div className="mb-6 p-3 rounded-xl bg-[#080c18]/90 border border-[#1e2a47] font-mono text-[11px] text-muted-foreground leading-tight">
                <span className="text-[#22c55e] font-semibold">Note: </span>
                {project.note}
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
