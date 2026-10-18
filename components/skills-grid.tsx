"use client"

import React from "react"
import { Bot, Layers, Terminal, Sparkles, Check, Database, Cloud, Code2 } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  description: string
  skills: { name: string; highlight?: boolean }[]
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "AI & LLM Orchestration",
    icon: <Bot className="w-5 h-5 text-sky-400" />,
    description: "Multi-agent runtime frameworks, state machines, semantic retrieval & evaluation.",
    skills: [
      { name: "LangGraph", highlight: true },
      { name: "Deterministic RAG", highlight: true },
      { name: "AWS Bedrock", highlight: true },
      { name: "Qdrant / pgvector", highlight: true },
      { name: "Whisper STT" },
      { name: "Kestra Workflow" },
      { name: "Semantic Caching" },
      { name: "Agent Memory Sync", highlight: true },
      { name: "HuggingFace Transformers" },
      { name: "Evaluation & Benchmarks" },
    ],
  },
  {
    title: "Full-Stack & Cloud Infrastructure",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    description: "High-throughput APIs, asynchronous microservices, resilient modern web frontends.",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Next.js & React 19", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Docker & Containerization", highlight: true },
      { name: "AWS (Bedrock, Lambda, S3)" },
      { name: "PostgreSQL & HNSW" },
      { name: "Redis & Pub/Sub" },
      { name: "Tailwind CSS & shadcn" },
      { name: "REST & Server-Sent Events" },
      { name: "CI/CD & Edge Deployment" },
    ],
  },
  {
    title: "Core Algorithms & Systems",
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    description: "Deep algorithmic problem-solving with competitive programming discipline.",
    skills: [
      { name: "Codeforces Expert (1650+)", highlight: true },
      { name: "300+ LeetCode Solutions", highlight: true },
      { name: "Advanced Graph Algorithms" },
      { name: "Dynamic Programming" },
      { name: "Distributed System Design" },
      { name: "Memory Profiling & Concurrency" },
      { name: "Protobuf & RPC Serialization" },
      { name: "Complexity Optimization" },
    ],
  },
]

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border/80">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Skills & Domain Expertise
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md">
          Structured for both ATS keyword parsers and engineering leadership seeking technical depth and proven full-stack execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-secondary border border-border">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-foreground tracking-tight">
                  {category.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      skill.highlight
                        ? "bg-primary/10 text-primary border border-primary/30 font-semibold"
                        : "bg-secondary text-foreground/80 border border-border/60 hover:border-border"
                    }`}
                  >
                    {skill.highlight && <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
