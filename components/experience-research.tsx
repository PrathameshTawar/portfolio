"use client"

import React from "react"
import { Briefcase, BookOpen, Award, Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  type: "experience" | "research" | "patent"
  title: string
  organization: string
  period: string
  location?: string
  bullets: string[]
  tags: string[]
}

const TIMELINE: ExperienceItem[] = [
  {
    type: "patent",
    title: "Cross-Vendor LLM Memory Sync Protocol (Patent Filed)",
    organization: "Independent Research & Patent Filing",
    period: "2024 - Present",
    bullets: [
      "Designed an episodic memory normalization protocol that serializes dialogue context into unified Protobuf embeddings, enabling zero-drift handoffs across Claude 3.5, GPT-4o, and Llama 3.",
      "Benchmarked 99.4% context recall parity on multi-turn dialogue evaluations without model retraining.",
      "Reduced cold-start context ingestion latency by 45% compared to raw conversational prompt re-feeding.",
    ],
    tags: ["Patent", "Memory Architectures", "Embeddings", "Protobuf"],
  },
  {
    type: "experience",
    title: "AI & Full-Stack Engineering Intern",
    organization: "Gigze",
    period: "2024",
    location: "Remote",
    bullets: [
      "Built asynchronous task pipelines using FastAPI, Celery, and Redis, lowering p99 API response times from 3.2s to 850ms.",
      "Developed responsive React and Next.js frontend interfaces for active users with sub-second page loads and zero layout shifts.",
      "Implemented semantic search on PostgreSQL using pgvector, configuring tuned HNSW indexes for fast vector retrieval.",
    ],
    tags: ["FastAPI", "React", "Next.js", "PostgreSQL", "pgvector", "Docker"],
  },
  {
    type: "research",
    title: "Indic-Language Bilingual RAG Research",
    organization: "Applied NLP Research & Benchmarking",
    period: "2024",
    bullets: [
      "Analyzed dense retrieval degradation caused by tokenization fragmentation in low-resource Indic languages.",
      "Implemented a bilingual dense retrieval pipeline with BGE-M3 and FAISS, improving Mean Reciprocal Rank (MRR) by +28% over vanilla baselines.",
      "Published reproducible benchmarking scripts and an interactive Streamlit dashboard for empirical validation.",
    ],
    tags: ["RAG", "BGE-M3", "FAISS", "Cross-Lingual", "PyTorch"],
  },
]

export default function ExperienceResearch() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#182238]">
        <div>
          <div className="inline-flex items-center gap-2 text-[#2f6bf6] font-mono text-xs uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Track Record · 04 / 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Experience, Patents & Research
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md font-mono">
          Production software engineering, patent-backed LLM systems research, and algorithmic benchmarks.
        </p>
      </div>

      <div className="relative border-l-2 border-[#182238] ml-4 sm:ml-6 space-y-12">
        {TIMELINE.map((item, index) => {
          const isPatent = item.type === "patent"
          const isResearch = item.type === "research"

          return (
            <div key={item.title + index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110 ${
                  isPatent
                    ? "bg-[#ff5a36]/20 border-[#ff5a36] text-[#ff5a36]"
                    : isResearch
                    ? "bg-[#22c55e]/20 border-[#22c55e] text-[#22c55e]"
                    : "bg-[#2f6bf6]/20 border-[#2f6bf6] text-[#2f6bf6]"
                }`}
              >
                {isPatent ? (
                  <Award className="w-3.5 h-3.5" />
                ) : isResearch ? (
                  <BookOpen className="w-3.5 h-3.5" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Content card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0c1222] border border-[#182238] group-hover:border-[#2f6bf6]/50 transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#2f6bf6] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`text-sm font-semibold mb-4 ${isPatent ? "text-[#ff5a36]" : isResearch ? "text-[#22c55e]" : "text-[#2f6bf6]"}`}>
                  {item.organization}
                </div>

                <ul className="space-y-2 mb-5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${isPatent ? "bg-[#ff5a36]" : isResearch ? "bg-[#22c55e]" : "bg-[#2f6bf6]"}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#182238]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-[#121a2e] text-slate-300 font-mono border border-[#1e2a47]"
                    >
                      {tag}
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
