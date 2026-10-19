"use client"

import React, { useState, useRef, useEffect } from "react"
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react"

interface HistoryEntry {
  type: "input" | "output" | "system"
  text: string
}

const COMMAND_OUTPUTS: Record<string, string[]> = {
  help: [
    "Commands available:",
    "  • whoami     - Quick bio and background",
    "  • projects   - Production systems & links",
    "  • patent     - LLM cross-vendor memory sync details",
    "  • skills     - Languages & infrastructure stack",
    "  • stats      - Codeforces & benchmark metrics",
    "  • contact    - Email and social links",
    "  • clear      - Clear terminal output",
  ],
  whoami: [
    "Prathamesh Taware | AI Engineer & Full-Stack Developer",
    "Based in India. Focus: Low-latency agent pipelines, vector databases, and high-concurrency web systems.",
    "Competitive programming: Codeforces Expert (1650+).",
  ],
  projects: [
    "1. DARKSEID (github.com/PrathameshTawar) - LangGraph agent runtime with Redis semantic cache (-35% p95 latency)",
    "2. GML Memory Protocol - Patent-filed memory sync across Claude, GPT-4, and Llama (99.4% recall)",
    "3. Hive Mind AI - Distributed multi-agent diagnostics (Rank 11 / 800+ teams in Build & Grow AI 2.0)",
    "4. Indic-Language RAG - Cross-lingual retrieval pipeline for Indic documents (+28% MRR over baseline)",
  ],
  patent: [
    "Patent Title: Cross-Vendor LLM Memory Synchronization Protocol",
    "Problem: Vendor lock-in & catastrophic context loss when switching between model providers.",
    "Solution: Protobuf-serialized episodic memory embeddings that normalize context across OpenAI, Anthropic, and open-weights models.",
    "Result: 99.4% context recall consistency with 45% faster cold ingestion.",
  ],
  skills: [
    "Languages: Python, TypeScript, C++, SQL",
    "AI / ML: LangGraph, RAG, AWS Bedrock, Qdrant, FAISS, Whisper, Hugging Face",
    "Web / Cloud: FastAPI, Next.js, React, Node.js, Docker, Redis, PostgreSQL, AWS",
    "CS Core: Data Structures, Graph Algorithms, Dynamic Programming, System Design",
  ],
  stats: [
    "• Codeforces: Expert (Peak 1650+)",
    "• LeetCode: 300+ Solved (Focus on DP, Graph Theory, Backtracking)",
    "• Hackathons: Rank 11 in Build & Grow AI 2.0 (800+ teams), Finalist in AI for Bharat",
  ],
  contact: [
    "Email: tawareprathamesh1010@gmail.com",
    "GitHub: https://github.com/PrathameshTawar",
    "LinkedIn: https://linkedin.com",
  ],
  sudo: [
    "Nice try, but you're not in the sudoers file. This incident will be reported.",
  ],
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "system",
      text: "Last login: Sun Oct 18 2026 22:42:10 on ttys004",
    },
    {
      type: "system",
      text: "Type 'help' to see what you can run, or 'whoami' to learn about me.",
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

    const nextHistory: HistoryEntry[] = [...history, { type: "input", text: `visitor@tawar-box:~$ ${input}` }]

    if (trimmed in COMMAND_OUTPUTS) {
      COMMAND_OUTPUTS[trimmed].forEach((line) => {
        nextHistory.push({ type: "output", text: line })
      })
    } else {
      nextHistory.push({
        type: "output",
        text: `zsh: command not found: ${trimmed}. Type 'help' for available commands.`,
      })
    }

    setHistory(nextHistory)
    setInput("")
  }

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-2xl bg-[#050505] border border-[#1F1F1F] shadow-2xl overflow-hidden hover:border-[#38BDF8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)] transition-all duration-300">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A] border-b border-[#1F1F1F]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1F1F1F] border border-white/10 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#1F1F1F] border border-white/10 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#1F1F1F] border border-white/10 inline-block" />
            <span className="ml-2 font-mono text-xs text-[#EDEDED] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>prathamesh@workstation:~ (zsh)</span>
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#737373] uppercase tracking-widest hidden sm:inline-block">
            UTF-8 · ZSH
          </span>
        </div>

        {/* Output Screen */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-72 sm:h-80 overflow-y-auto space-y-2 text-[#EDEDED] selection:bg-[#38BDF8]/30">
          {history.map((entry, index) => (
            <div
              key={index}
              className={`${
                entry.type === "input"
                  ? "text-[#38BDF8] font-semibold"
                  : entry.type === "system"
                  ? "text-[#737373]"
                  : "text-[#EDEDED] leading-relaxed"
              }`}
            >
              {entry.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-[#0A0A0A] border-t border-[#1F1F1F]"
        >
          <span className="font-mono text-xs text-[#38BDF8] font-semibold flex items-center gap-1">
            <span>visitor@tawar-box:~$</span>
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'whoami', 'projects', or 'skills'..."
            aria-label="Terminal command input"
            className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-[#EDEDED] focus:outline-none placeholder:text-[#737373]"
          />
          <button
            type="submit"
            aria-label="Send command"
            className="p-1.5 rounded-md bg-[#38BDF8] text-[#050505] hover:bg-[#0284c7] transition-all cursor-pointer font-bold"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  )
}
