"use client"

import React from "react"
import { Bot, Layers, Terminal, Sparkles, Check, Database, Cloud, Code2 } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  description: string
  color: "blue" | "green" | "yellow"
  skills: { name: string; highlight?: boolean }[]
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "AI & LLM Orchestration",
    icon: <Bot className="w-5 h-5 text-[#2f6bf6]" />,
    description: "Multi-agent runtime frameworks, state machines, semantic retrieval & evaluation.",
    color: "blue",
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
    icon: <Cloud className="w-5 h-5 text-[#22c55e]" />,
    description: "High-throughput APIs, asynchronous microservices, resilient modern web frontends.",
    color: "green",
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
    icon: <Code2 className="w-5 h-5 text-[#facc15]" />,
    description: "Deep algorithmic problem-solving with competitive programming discipline.",
    color: "yellow",
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#182238]">
        <div>
          <div className="inline-flex items-center gap-2 text-[#2f6bf6] font-mono text-xs uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>Technical Capabilities · 05 / 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Skills & Domain Expertise
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md font-mono">
          Structured for both ATS keyword parsers and engineering leadership seeking technical depth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {CATEGORIES.map((category) => {
          const highlightBadgeStyle =
            category.color === "blue"
              ? "bg-[#2f6bf6]/15 text-[#2f6bf6] border-[#2f6bf6]/30"
              : category.color === "green"
              ? "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30"
              : "bg-[#fde047]/15 text-[#facc15] border-[#fde047]/30"

          return (
            <div
              key={category.title}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0c1222] border border-[#182238] hover:border-[#2f6bf6]/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-[#080c18] border border-[#182238]">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white tracking-tight">
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
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                        skill.highlight
                          ? `${highlightBadgeStyle} font-semibold border`
                          : "bg-[#121a2e] text-slate-300 border border-[#1e2a47]"
                      }`}
                    >
                      {skill.highlight && <Sparkles className="w-3 h-3 flex-shrink-0" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
