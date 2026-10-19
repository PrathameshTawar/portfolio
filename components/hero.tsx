"use client"

import React from "react"
import { ArrowRight, ArrowDown, Sparkles, Award, Zap, ShieldCheck } from "lucide-react"
import { GithubIcon } from "@/components/icons"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-8 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#09090b]">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#2f6bf6]/15 rounded-full blur-[140px] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-10 w-[400px] h-[300px] bg-[#22c55e]/10 rounded-full blur-[120px] opacity-60"
      />

      {/* Main hero card container matching reference design */}
      <div className="relative max-w-6xl mx-auto w-full rounded-3xl bg-[#121215]/90 border border-[#27272a] shadow-2xl overflow-hidden mt-4">
        {/* Top Header Ribbon */}
        <div className="w-full bg-[#22c55e] text-[#09090b] font-mono text-[11px] sm:text-xs font-bold px-4 sm:px-8 py-2.5 flex items-center justify-between tracking-wider uppercase">
          <span>PORTFOLIO / 2026</span>
          <span className="hidden sm:inline">AI & FULL-STACK</span>
          <span className="hidden md:inline">PATENT INVENTOR</span>
          <span className="hidden lg:inline">CODEFORCES EXPERT</span>
          <span className="underline decoration-2 underline-offset-4">AVAILABLE FOR WORK</span>
          <span>01 / 07</span>
        </div>

        {/* Main Canvas Area */}
        <div className="p-6 sm:p-10 lg:p-14 relative">
          <div className="absolute top-6 left-6 text-xs font-mono text-[#2f6bf6]/40 select-none">+ 2026</div>
          <div className="absolute top-6 right-6 text-xs font-mono text-[#2f6bf6]/40 select-none">+</div>

          {/* Wireframe Outline PORTFOLIO text from reference */}
          <div className="select-none pointer-events-none my-2">
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-stroke-blue leading-none uppercase">
              PORTFOLIO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-4">
            {/* Left title and authentic bio */}
            <div className="lg:col-span-7">
              <div className="relative inline-block">
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white flex items-baseline gap-2">
                  <span>PRATHAMESH</span>
                  <span className="text-[#2f6bf6]">TAWARE</span>
                </h1>
                {/* Hand-drawn neon green squiggle SVG from reference */}
                <svg
                  className="absolute -bottom-4 right-10 w-24 h-10 text-[#22c55e] pointer-events-none hidden sm:block"
                  viewBox="0 0 100 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                >
                  <path d="M 5,28 Q 20,5 35,25 T 65,20 Q 80,35 95,12" />
                </svg>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#2f6bf6] text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-md shadow-[#2f6bf6]/30">
                  <span>AI Engineer & Full-Stack</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-mono text-muted-foreground">Python & TypeScript</span>
                <span className="text-xs font-mono text-muted-foreground">LangGraph</span>
                <span className="text-xs font-mono text-[#22c55e]">Codeforces 1650+</span>
              </div>

              <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                I build low-latency multi-agent systems, write scalable full-stack web applications, and optimize vector search pipelines. Patent-filed for cross-vendor LLM memory sync.
              </p>
            </div>

            {/* Right credentials summary */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-[#18181b]/80 border border-[#27272a] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2f6bf6]" />
                  <span className="text-xs font-mono text-white font-semibold">Patent Protocol</span>
                </div>
                <span className="text-xs font-mono text-[#2f6bf6]">99.4% Recall</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#18181b]/80 border border-[#27272a] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  <span className="text-xs font-mono text-white font-semibold">Codeforces Expert</span>
                </div>
                <span className="text-xs font-mono text-[#22c55e]">Rating 1650+</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#18181b]/80 border border-[#27272a] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a36]" />
                  <span className="text-xs font-mono text-white font-semibold">Build & Grow AI</span>
                </div>
                <span className="text-xs font-mono text-[#ff5a36]">Rank 11 / 800+</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-[#27272a] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2f6bf6] text-white font-semibold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#2f6bf6]/20 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proof-of-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] text-white font-medium text-xs sm:text-sm border border-[#27272a] transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#22c55e]" />
                <span>Proof of Work</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span>tawareprathamesh1010@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Colored Folder Tabs from Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-[#27272a]">
          <a
            href="#projects"
            className="group px-6 py-4 bg-[#ff5a36] text-white font-mono text-xs font-bold flex items-center justify-between hover:brightness-110 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wider">FEATURED BUILDS</span>
              <span className="px-1.5 py-0.5 rounded-full border border-white/50 text-[10px]">01</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#proof-of-work"
            className="group px-6 py-4 bg-[#22c55e] text-[#09090b] font-mono text-xs font-bold flex items-center justify-between hover:brightness-110 transition-all border-y sm:border-y-0 sm:border-x border-[#27272a]"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wider">PATENTS & RAG</span>
              <span className="px-1.5 py-0.5 rounded-full border border-[#09090b]/40 text-[10px]">02</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#skills"
            className="group px-6 py-4 bg-[#fde047] text-[#09090b] font-mono text-xs font-bold flex items-center justify-between hover:brightness-110 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wider">TECH STACK</span>
              <span className="px-1.5 py-0.5 rounded-full border border-[#09090b]/40 text-[10px]">03</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
