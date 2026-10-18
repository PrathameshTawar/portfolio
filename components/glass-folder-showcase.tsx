"use client"

import React from "react"
import GlassFolder from "@/components/ui/glass-folder-cards"
import { Sparkles, FolderArchive } from "lucide-react"

export default function GlassFolderShowcase() {
  return (
    <section id="proof-of-work" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080c18]">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2f6bf6]/10 rounded-full blur-[160px] opacity-70"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Living Artifacts · 03 / 07</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Interactive Proof-of-Work Vault
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-mono">
            Tangible proof is better than static bullet points. Explore live system architectures, patent specifications, and competitive benchmarks inside these physical frosted-glass folders.
          </p>
        </div>

        {/* 3 Glass Folders */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 items-end justify-items-center">
          {/* Folder 1: AI Agent Architectures (Coral/Ember Theme) */}
          <GlassFolder
            label="Agent Architectures"
            tone="dark"
            art="ember"
            seed={7}
            appearDelay={0}
            files={[
              {
                name: "DARKSEID Engine",
                meta: "LangGraph · p95 -35%",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "StateGraph Spec",
                meta: "Python · 12 Nodes",
                art: "dusk",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "Redis Cache Layer",
                meta: "Cosine Sim >= 0.94",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "Bedrock Streaming",
                meta: "FastAPI SSE · 120ms TTFT",
                art: "aurora",
                href: "https://github.com/PrathameshTawar",
              },
            ]}
          />

          {/* Folder 2: Patent & Research Papers (Cobalt/Aurora Theme) */}
          <GlassFolder
            label="Patents & Research"
            tone="dark"
            art="aurora"
            seed={19}
            action="more"
            labelPlacement="top-left"
            appearDelay={140}
            files={[
              {
                name: "GML Memory Protocol",
                meta: "Patent Filed · Cross-LLM",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "Indic RAG Paper",
                meta: "Bilingual Dense Retrieval",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "Attention Sync Matrix",
                meta: "Protobuf · Zero Forgetting",
                art: "glacier",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "BGE-M3 Benchmark",
                meta: "MRR +28% vs Vanilla",
                href: "https://github.com/PrathameshTawar",
              },
            ]}
            menu={[
              { label: "View Patent Filing" },
              { label: "Read Indic RAG Paper" },
              { label: "Download Benchmark PDF" },
            ]}
          />

          {/* Folder 3: Competitive & Podium Honors (Neon Verdant Green Theme) */}
          <GlassFolder
            label="Competitive Honors"
            tone="dark"
            art="verdant"
            seed={42}
            action="none"
            labelPlacement="top-right"
            appearDelay={280}
            files={[
              {
                name: "Codeforces Expert",
                meta: "1650+ Max Rating",
                image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "Build & Grow AI",
                meta: "Rank 11 / 800+ Teams",
                art: "ember",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "AI for Bharat Winner",
                meta: "National Hackathon",
                href: "https://github.com/PrathameshTawar",
              },
              {
                name: "300+ LeetCode",
                meta: "Graph & DP Mastery",
                art: "dusk",
                href: "https://github.com/PrathameshTawar",
              },
            ]}
          />
        </div>

        {/* Guidance caption */}
        <div className="mt-16 flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-muted-foreground uppercase text-center">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span>Hover cards to lean · Click to inspect contents · Tap &apos;+&apos; to append file</span>
        </div>
      </div>
    </section>
  )
}
