"use client"

import React from "react"
import { ArrowRight, FileText, Github, Linkedin, Sparkles, Terminal, Award, Zap, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/15 rounded-full blur-[140px] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] opacity-50"
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-border text-xs font-medium text-foreground backdrop-blur-md mb-6 hover:border-primary/50 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-muted-foreground">Available for AI Engineering & Full-Stack roles</span>
        </div>

        {/* Name and main headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          Architecting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
            Low-Latency LLM Orchestration
          </span>{" "}
          & Production Systems
        </h1>

        {/* Punchy one-liner */}
        <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-normal">
          Hi, I&apos;m <span className="font-semibold text-foreground">Prathamesh Tawar</span>. I engineer deterministic multi-agent
          pipelines, distributed vector search infrastructures, and full-stack web applications with rigorous benchmark metrics.
        </p>

        {/* Key credentials bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10 text-left">
          <div className="p-3.5 rounded-xl bg-card/60 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Patent Filed</span>
            </div>
            <p className="text-xs font-medium text-foreground">Cross-Vendor LLM Memory Synchronization</p>
          </div>

          <div className="p-3.5 rounded-xl bg-card/60 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Competitive Dev</span>
            </div>
            <p className="text-xs font-medium text-foreground">Codeforces Expert (1650+) · 300+ LeetCode</p>
          </div>

          <div className="p-3.5 rounded-xl bg-card/60 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Hackathons</span>
            </div>
            <p className="text-xs font-medium text-foreground">Rank 11 Build & Grow AI · AI for Bharat</p>
          </div>

          <div className="p-3.5 rounded-xl bg-card/60 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-primary mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Research</span>
            </div>
            <p className="text-xs font-medium text-foreground">Indic-Language Bilingual RAG System</p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Featured Builds</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#proof-of-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-sm border border-border transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Interactive Proof-of-Work</span>
          </a>

          <a
            href="https://github.com/PrathameshTawar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card/80 hover:bg-card text-muted-foreground hover:text-foreground text-sm font-medium border border-border transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
