"use client"

import React from "react"
import { Bot, Layers, Cloud, Code2, Sparkles } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  description: string
  skills: { name: string; highlight?: boolean }[]
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "AI & LLM Engineering",
    icon: <Bot className="w-5 h-5 text-[#38BDF8]" />,
    description: "Frameworks and infrastructure I use to build agent state machines, vector search, and model sync.",
    skills: [
      { name: "LangGraph", highlight: true },
      { name: "RAG Pipelines", highlight: true },
      { name: "AWS Bedrock", highlight: true },
      { name: "Qdrant / pgvector", highlight: true },
      { name: "Whisper STT" },
      { name: "Redis Semantic Cache", highlight: true },
      { name: "BGE-M3 / FAISS" },
      { name: "Hugging Face" },
      { name: "LLM Memory Protocols", highlight: true },
      { name: "Evaluation & Benchmarks" },
    ],
  },
  {
    title: "Full-Stack & Backend",
    icon: <Cloud className="w-5 h-5 text-[#38BDF8]" />,
    description: "Production web applications, asynchronous task workers, and database optimization.",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "Next.js & React 19", highlight: true },
      { name: "Docker", highlight: true },
      { name: "PostgreSQL & HNSW" },
      { name: "Redis & Celery" },
      { name: "Tailwind CSS" },
      { name: "Server-Sent Events (SSE)" },
      { name: "AWS (Lambda, S3)" },
    ],
  },
  {
    title: "Algorithms & CS Core",
    icon: <Code2 className="w-5 h-5 text-[#38BDF8]" />,
    description: "Competitive programming and deep computer science fundamentals under strict constraints.",
    skills: [
      { name: "Codeforces Expert (1650+)", highlight: true },
      { name: "300+ LeetCode Solved", highlight: true },
      { name: "C++", highlight: true },
      { name: "Graph Theory" },
      { name: "Dynamic Programming" },
      { name: "Distributed Systems" },
      { name: "Protobuf Serialization" },
      { name: "Concurrency & Memory" },
    ],
  },
]

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1F1F1F]">
        <div>
          <div className="inline-flex items-center gap-2 text-[#38BDF8] font-mono text-xs uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>Tech Stack · 05 / 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#EDEDED]">
            Skills & Everyday Toolkit
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-[#737373] text-sm max-w-md font-mono">
          Languages, libraries, and databases I actively write code in for production and competitive programming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#38BDF8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-[#050505] border border-[#1F1F1F]">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-[#EDEDED] tracking-tight">
                  {category.title}
                </h3>
              </div>
              <p className="text-xs text-[#737373] mb-6 leading-relaxed font-sans">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      skill.highlight
                        ? "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 font-semibold hover:bg-[#38BDF8]/20"
                        : "bg-[#141414] text-[#EDEDED]/90 border border-[#1F1F1F] hover:border-[#38BDF8]/40 hover:text-[#FFFFFF]"
                    }`}
                  >
                    {skill.highlight && <Sparkles className="w-3 h-3 flex-shrink-0 text-[#38BDF8]" />}
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

