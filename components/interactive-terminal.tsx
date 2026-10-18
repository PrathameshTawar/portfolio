"use client"

import React, { useState, useRef, useEffect } from "react"
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft } from "lucide-react"

interface HistoryEntry {
  type: "input" | "output" | "system"
  text: string
}

const COMMAND_OUTPUTS: Record<string, string[]> = {
  help: [
    "Available terminal commands:",
    "  • about     - High-level engineering profile",
    "  • projects  - Core systems & architectural metrics",
    "  • patent    - Cross-vendor LLM memory sync details",
    "  • skills    - Primary AI & full-stack technology stack",
    "  • metrics   - Quantitative performance highlights",
    "  • contact   - Direct email & communication channels",
    "  • clear     - Clear terminal buffer",
  ],
  about: [
    "Prathamesh Tawar — AI Engineer & Full-Stack Developer",
    "Specialization: Low-latency LLM orchestration pipelines, multi-agent frameworks, and high-concurrency systems.",
    "Credentials: Codeforces Expert (1650+), Patent Inventor, Indic RAG Researcher.",
  ],
  projects: [
    "[1] DARKSEID: LangGraph Multi-Agent Runtime (p95 -35% latency)",
    "[2] GML Memory Protocol: Cross-Vendor LLM Context Sync (Patent Pending)",
    "[3] Hive Mind AI: Distributed Swarm Diagnostics (Rank 11 Build & Grow AI)",
    "[4] Indic-Language RAG: Low-Resource Dense Retrieval (+28% MRR, 500+ docs)",
  ],
  patent: [
    "Patent Title: Cross-Vendor LLM Memory Synchronization Protocol",
    "Key Innovations:",
    "  • Normalizes disparate model attention states (Claude, GPT-4, Llama)",
    "  • Eliminates catastrophic memory drift across multi-turn handoffs",
    "  • Benchmark: 99.4% context recall parity, -45% ingestion latency",
  ],
  skills: [
    "AI & LLMs: LangGraph, RAG, Bedrock, Qdrant, Whisper STT, Kestra, pgvector",
    "Full-Stack: FastAPI, Next.js, React 19, TypeScript, Docker, Redis, Tailwind",
    "Core DSA: Codeforces Expert (1650+), 300+ LeetCode, Graph & DP Algorithms",
  ],
  metrics: [
    "• p95 Latency Reduction: -35% via LangGraph + Redis semantic caching",
    "• Context Recall Parity: 99.4% cross-vendor fidelity",
    "• Hackathon Ranking: #11 out of 800+ national builder teams",
    "• Competitive CP: 1650+ Codeforces Rating, 300+ Solved Algorithms",
  ],
  contact: [
    "Email: tawareprathamesh1010@gmail.com",
    "GitHub: https://github.com/PrathameshTawar",
    "Status: Open for AI Engineering & Full-Stack opportunities",
  ],
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "system",
      text: "⚡ Antigravity Agent Runtime [v2.4.0] — Initialized session for visitor@portfolio",
    },
    {
      type: "system",
      text: "Type 'help' to inspect command list or 'projects' to inspect systems.",
    },
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === "clear") {
      setHistory([])
      setInput("")
      return
    }

    const nextHistory: HistoryEntry[] = [...history, { type: "input", text: `visitor@prathamesh:~$ ${input}` }]

    if (trimmed in COMMAND_OUTPUTS) {
      COMMAND_OUTPUTS[trimmed].forEach((line) => {
        nextHistory.push({ type: "output", text: line })
      })
    } else {
      nextHistory.push({
        type: "output",
        text: `Command not found: '${trimmed}'. Type 'help' for recognized commands.`,
      })
    }

    setHistory(nextHistory)
    setInput("")
  }

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-2xl bg-black/90 border border-border shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Window title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-secondary/40 border-b border-border/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>prathamesh-tawar-orchestration-cli</span>
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
            BASH · UTF-8
          </span>
        </div>

        {/* Terminal output screen */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-72 sm:h-80 overflow-y-auto space-y-2 text-foreground/90 selection:bg-primary/30">
          {history.map((entry, index) => (
            <div
              key={index}
              className={`${
                entry.type === "input"
                  ? "text-sky-400 font-semibold"
                  : entry.type === "system"
                  ? "text-muted-foreground italic"
                  : "text-foreground/80 leading-relaxed"
              }`}
            >
              {entry.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal input form */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-secondary/30 border-t border-border/80"
        >
          <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <span>visitor@tawar:~$</span>
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'patent', 'projects', or 'skills'..."
            aria-label="Terminal command input"
            className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-foreground focus:outline-none placeholder:text-muted-foreground/60"
          />
          <button
            type="submit"
            aria-label="Send command"
            className="p-1.5 rounded-md bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  )
}
