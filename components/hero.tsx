"use client"

import React from "react"
import { ArrowRight, ArrowDown, Sparkles, Award, Zap, ShieldCheck } from "lucide-react"
import { GithubIcon } from "@/components/icons"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-8 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-[#38BDF8]/8 rounded-full blur-[140px] opacity-70"
      />

      {/* Main hero card container with subtle frosted borders */}
      <div className="relative max-w-6xl mx-auto w-full rounded-3xl bg-[#0A0A0A] border border-[#1F1F1F] shadow-2xl shadow-black/80 overflow-hidden mt-4">
        {/* Top Header Ribbon */}
        <div className="w-full bg-[#141414] text-[#EDEDED] font-mono text-[11px] sm:text-xs font-medium px-4 sm:px-8 py-2.5 flex items-center justify-between tracking-wider border-b border-[#1F1F1F] uppercase">
          <span className="text-[#737373]">PORTFOLIO / 2026</span>
          <span className="hidden sm:inline text-[#737373]">AI & FULL-STACK</span>
          <span className="hidden md:inline text-[#737373]">PATENT INVENTOR</span>
          <span className="hidden lg:inline text-[#737373]">CODEFORCES EXPERT</span>
          <span className="flex items-center gap-1.5 text-[#38BDF8] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            AVAILABLE FOR WORK
          </span>
          <span className="text-[#737373]">01 / 07</span>
        </div>

        {/* Main Canvas Area */}
        <div className="p-6 sm:p-10 lg:p-14 relative">
          <div className="absolute top-6 left-6 text-xs font-mono text-[#737373] select-none">+ 2026</div>
          <div className="absolute top-6 right-6 text-xs font-mono text-[#737373] select-none">+</div>

          {/* Wireframe Outline PORTFOLIO text with sky-blue stroke */}
          <div className="select-none pointer-events-none my-2">
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-stroke-blue opacity-40 leading-none uppercase">
              PORTFOLIO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-4">
            {/* Left title and bio */}
            <div className="lg:col-span-7">
              <div className="relative inline-block">
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#EDEDED] flex items-baseline gap-2">
                  <span>PRATHAMESH</span>
                  <span className="text-white">TAWARE</span>
                </h1>
                {/* Subtle minimalist squiggle SVG */}
                <svg
                  className="absolute -bottom-4 right-10 w-24 h-10 text-[#38BDF8] pointer-events-none hidden sm:block opacity-80"
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
                <span className="px-3.5 py-1.5 rounded-xl bg-white text-[#050505] font-semibold text-xs inline-flex items-center gap-1.5 shadow-sm hover:bg-[#EDEDED] transition-all">
                  <span>AI Engineer & Full-Stack</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-mono text-[#737373]">Python & TypeScript</span>
                <span className="text-xs font-mono text-[#737373]">LangGraph</span>
                <span className="text-xs font-mono text-[#38BDF8]">Codeforces 1650+</span>
              </div>

              <p className="mt-5 text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
                I build low-latency multi-agent systems, write scalable full-stack web applications, and optimize vector search pipelines. Patent-filed for cross-vendor LLM memory sync.
              </p>
            </div>

            {/* Right credentials summary */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-[#050505] border border-[#1F1F1F] hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                  <span className="text-xs font-mono text-[#EDEDED] font-semibold">Patent Protocol</span>
                </div>
                <span className="text-xs font-mono text-[#38BDF8] font-bold">99.4% Recall</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#050505] border border-[#1F1F1F] hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  <span className="text-xs font-mono text-[#EDEDED] font-semibold">Codeforces Expert</span>
                </div>
                <span className="text-xs font-mono text-white font-bold">Rating 1650+</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#050505] border border-[#1F1F1F] hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                  <span className="text-xs font-mono text-[#EDEDED] font-semibold">Build & Grow AI</span>
                </div>
                <span className="text-xs font-mono text-[#38BDF8] font-bold">Rank 11 / 800+</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-[#1F1F1F] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#050505] font-semibold text-xs sm:text-sm hover:bg-[#EDEDED] shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proof-of-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A0A0A] hover:bg-[#141414] text-[#EDEDED] font-medium text-xs sm:text-sm border border-[#1F1F1F] hover:border-white/30 transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                <span>Proof of Work</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
              <span>tawareprathamesh1010@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Hyper-Minimalist Folder Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-[#1F1F1F]">
          <a
            href="#projects"
            className="group px-6 py-4 bg-[#0A0A0A] hover:bg-[#141414] text-[#EDEDED] font-mono text-xs font-semibold flex items-center justify-between hover:border-[#38BDF8]/40 transition-all border-b sm:border-b-0 sm:border-r border-[#1F1F1F]"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wider text-[#EDEDED] group-hover:text-white transition-colors">FEATURED BUILDS</span>
              <span className="px-1.5 py-0.5 rounded-full border border-[#1F1F1F] text-[#38BDF8] text-[10px]">01</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="#proof-of-work"
            className="group px-6 py-4 bg-[#0A0A0A] hover:bg-[#141414] text-[#EDEDED] font-mono text-xs font-semibold flex items-center justify-between hover:border-[#38BDF8]/40 transition-all border-b sm:border-b-0 sm:border-r border-[#1F1F1F]"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wider text-[#EDEDED] group-hover:text-white transition-colors">PATENTS & RAG</span>
              <span className="px-1.5 py-0.5 rounded-full border border-[#1F1F1F] text-[#38BDF8] text-[10px]">02</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="#skills"
            className="group px-6 py-4 bg-[#0A0A0A] hover:bg-[#141414] text-[#EDEDED] font-mono text-xs font-semibold flex items-center justify-between hover:border-[#38BDF8]/40 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wider text-[#EDEDED] group-hover:text-white transition-colors">TECH STACK</span>
              <span className="px-1.5 py-0.5 rounded-full border border-[#1F1F1F] text-[#38BDF8] text-[10px]">03</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  )
}
