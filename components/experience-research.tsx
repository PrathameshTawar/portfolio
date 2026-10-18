"use client"

import React from "react"
import { Briefcase, BookOpen, Award, Calendar, MapPin, ArrowRight } from "lucide-react"

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
    title: "Inventor: Cross-Vendor LLM Memory Synchronization Protocol",
    organization: "Intellectual Property Office Filing",
    period: "2024 — Present",
    bullets: [
      "Engineered a vendor-agnostic episodic attention synchronization layer that normalizes memory representations between proprietary APIs (Claude 3.5, GPT-4o) and open-weights models (Llama 3).",
      "Achieved 99.4% context recall consistency with zero catastrophic forgetting across multi-turn agent handoffs.",
      "Reduced cold-start context ingestion latency by 45% using serialized protocol buffer memory vectors.",
    ],
    tags: ["Patent", "Memory Architectures", "Attention Normalization", "Protobuf"],
  },
  {
    type: "experience",
    title: "AI Engineer & Full-Stack Intern",
    organization: "Gigze",
    period: "2024",
    location: "Remote",
    bullets: [
      "Architected and deployed asynchronous AI pipeline services using FastAPI, Celery, and Redis, slashing p99 API response times from 3.2s to 850ms.",
      "Built resilient React and Next.js frontend interfaces consumed by thousands of daily active users, eliminating layout shifts and ensuring sub-second LCP.",
      "Integrated vector similarity search on PostgreSQL with pgvector, indexing enterprise text embeddings with HNSW index tuning.",
    ],
    tags: ["FastAPI", "React", "Next.js", "PostgreSQL", "pgvector", "Docker"],
  },
  {
    type: "research",
    title: "Lead Researcher: Indic-Language Bilingual RAG System",
    organization: "Applied NLP Research Project",
    period: "2024",
    bullets: [
      "Pioneered a bilingual cross-lingual retrieval pipeline specifically addressing token fragmentation in low-resource Indic languages.",
      "Evaluated dense retrieval models against custom domain data, yielding a +28% Mean Reciprocal Rank (MRR) improvement over standard multilingual models.",
      "Released reproducible benchmarking harness and lightweight Streamlit exploration dashboard for peer verification.",
    ],
    tags: ["RAG", "BGE-M3", "FAISS", "Cross-Lingual Embeddings", "PyTorch"],
  },
]

export default function ExperienceResearch() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border/80">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience, Patents & Research
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md">
          A track record spanning production engineering at scale, patent-backed LLM systems research, and high-performance algorithms.
        </p>
      </div>

      <div className="relative border-l-2 border-border/60 ml-4 sm:ml-6 space-y-12">
        {TIMELINE.map((item, index) => {
          const isPatent = item.type === "patent"
          const isResearch = item.type === "research"

          return (
            <div key={item.title + index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110 ${
                  isPatent
                    ? "bg-amber-950/80 border-amber-500 text-amber-400"
                    : isResearch
                    ? "bg-blue-950/80 border-blue-500 text-blue-400"
                    : "bg-emerald-950/80 border-emerald-500 text-emerald-400"
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
              <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border/80 group-hover:border-primary/40 transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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

                <div className="text-sm font-semibold text-primary/90 mb-4">
                  {item.organization}
                </div>

                <ul className="space-y-2 mb-5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-secondary/80 text-foreground/80 font-mono"
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
