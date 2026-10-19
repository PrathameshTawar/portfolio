"use client"

import React, { useState, useEffect } from "react"
import GlassFolder, { FolderFile, ArtPreset } from "@/components/ui/glass-folder-cards"
import { Sparkles, Lock, Unlock, Plus, ShieldCheck, X, FolderPlus } from "lucide-react"

const INITIAL_AGENT_FILES: FolderFile[] = [
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
]

const INITIAL_PATENT_FILES: FolderFile[] = [
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
]

const INITIAL_HONOR_FILES: FolderFile[] = [
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
    name: "AI for Bharat",
    meta: "Finalist · Vernacular AI",
    href: "https://github.com/PrathameshTawar",
  },
  {
    name: "300+ LeetCode",
    meta: "Graph & DP Mastery",
    art: "dusk",
    href: "https://github.com/PrathameshTawar",
  },
]

export default function GlassFolderShowcase() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [passcode, setPasscode] = useState("")
  const [authError, setAuthError] = useState("")
  const [authSuccess, setAuthSuccess] = useState(false)

  // Dynamic files state per folder so additions and subtractions update reactively
  const [agentFiles, setAgentFiles] = useState<FolderFile[]>(INITIAL_AGENT_FILES)
  const [patentFiles, setPatentFiles] = useState<FolderFile[]>(INITIAL_PATENT_FILES)
  const [honorFiles, setHonorFiles] = useState<FolderFile[]>(INITIAL_HONOR_FILES)

  // New artifact creation form
  const [targetFolder, setTargetFolder] = useState<"agent" | "patent" | "honor">("agent")
  const [newTitle, setNewTitle] = useState("")
  const [newMeta, setNewMeta] = useState("")
  const [newArt, setNewArt] = useState<ArtPreset>("aurora")
  const [newHref, setNewHref] = useState("https://github.com/PrathameshTawar")

  // Load persistent admin state on client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("taware_portfolio_admin")
      if (saved === "true") {
        setIsAdmin(true)
      }
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const clean = passcode.trim().toLowerCase()
    if (clean === "taware" || clean === "admin" || clean === "admin123") {
      setIsAdmin(true)
      if (typeof window !== "undefined") {
        localStorage.setItem("taware_portfolio_admin", "true")
      }
      setAuthSuccess(true)
      setAuthError("")
      setTimeout(() => {
        setShowAuthModal(false)
        setAuthSuccess(false)
        setPasscode("")
      }, 500)
    } else {
      setAuthError("Incorrect admin passcode. Try 'taware'.")
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    if (typeof window !== "undefined") {
      localStorage.removeItem("taware_portfolio_admin")
    }
  }

  const handleAddArtifact = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAdmin) {
      setShowAuthModal(true)
      return
    }

    const title = newTitle.trim() || `Spec Sheet #${Date.now().toString().slice(-4)}`
    const meta = newMeta.trim() || "Engine Module · Admin Added"
    const file: FolderFile = {
      name: title,
      meta,
      art: newArt,
      href: newHref.trim() || "https://github.com/PrathameshTawar",
    }

    if (targetFolder === "agent") {
      setAgentFiles((prev) => [...prev, file])
    } else if (targetFolder === "patent") {
      setPatentFiles((prev) => [...prev, file])
    } else {
      setHonorFiles((prev) => [...prev, file])
    }

    setNewTitle("")
    setNewMeta("")
    setShowAddModal(false)
  }

  return (
    <section id="proof-of-work" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#09090b]">
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Living Artifacts · 03 / 07</span>
            </div>

            {/* Admin Access Status Pill */}
            {isAdmin ? (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 text-xs font-mono shadow-[0_0_15px_rgba(34,197,94,0.25)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Admin Mode Active</span>
                <span className="text-white/40">|</span>
                <button
                  type="button"
                  onClick={() => setShowAddModal(true)}
                  className="text-[#2f6bf6] hover:text-white font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" /> Add Artifact
                </button>
                <span className="text-white/40">|</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-[#ff5a36] hover:text-white hover:underline flex items-center gap-1 cursor-pointer"
                  title="Lock admin session"
                >
                  <Lock className="w-3 h-3" /> Lock
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setAuthError("")
                  setShowAuthModal(true)
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white border border-white/10 hover:border-white/20 text-xs font-mono transition-all cursor-pointer group"
                title="Admin authentication required to add or subtract files"
              >
                <Lock className="w-3.5 h-3.5 text-[#ff5a36] group-hover:scale-110 transition-transform" />
                <span>Admin: Locked (Guest Mode)</span>
                <span className="text-[#2f6bf6] group-hover:underline text-[11px] font-medium ml-1">Unlock →</span>
              </button>
            )}
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
            action="add"
            isAdmin={isAdmin}
            onRequireAdmin={() => {
              setAuthError("")
              setShowAuthModal(true)
            }}
            files={agentFiles}
            onFilesChange={(files) => setAgentFiles(files)}
            onRemove={(_file, index) => {
              setAgentFiles((prev) => prev.filter((_, i) => i !== index))
            }}
            onAdd={() => {
              const count = agentFiles.length + 1
              return {
                name: `Agent Spec #${count}`,
                meta: "LangGraph · Admin Added",
                art: "ember",
                href: "https://github.com/PrathameshTawar",
              }
            }}
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
            isAdmin={isAdmin}
            onRequireAdmin={() => {
              setAuthError("")
              setShowAuthModal(true)
            }}
            files={patentFiles}
            onFilesChange={(files) => setPatentFiles(files)}
            onRemove={(_file, index) => {
              setPatentFiles((prev) => prev.filter((_, i) => i !== index))
            }}
            onAdd={() => {
              const count = patentFiles.length + 1
              return {
                name: `Research Doc #${count}`,
                meta: "Patent Spec · Admin Added",
                art: "aurora",
                href: "https://github.com/PrathameshTawar",
              }
            }}
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
            action={isAdmin ? "add" : "none"}
            labelPlacement="top-right"
            appearDelay={280}
            isAdmin={isAdmin}
            onRequireAdmin={() => {
              setAuthError("")
              setShowAuthModal(true)
            }}
            files={honorFiles}
            onFilesChange={(files) => setHonorFiles(files)}
            onRemove={(_file, index) => {
              setHonorFiles((prev) => prev.filter((_, i) => i !== index))
            }}
            onAdd={() => {
              const count = honorFiles.length + 1
              return {
                name: `Honors Entry #${count}`,
                meta: "Competition · Admin Added",
                art: "verdant",
                href: "https://github.com/PrathameshTawar",
              }
            }}
          />
        </div>

        {/* Guidance caption */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono tracking-widest text-muted-foreground uppercase text-center">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isAdmin ? "bg-emerald-400" : "bg-[#22c55e]"} animate-pulse`} />
            <span>Hover cards to lean · Click to inspect contents</span>
          </div>
          <span className="hidden sm:inline text-white/20">·</span>
          <div className="flex items-center gap-1.5 text-white/70">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff5a36]" />
            <span>{isAdmin ? "Add (+) and Sub (−) Privileges Unlocked" : "Add & Sub access restricted to Admin"}</span>
          </div>
        </div>
      </div>

      {/* Admin Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-md bg-[#121215] border border-[#27272a] rounded-2xl p-6 shadow-2xl shadow-black/80"
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-auth-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setShowAuthModal(false)
                setAuthError("")
              }}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2f6bf6]/15 border border-[#2f6bf6]/30 flex items-center justify-center text-[#2f6bf6]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 id="admin-auth-title" className="text-lg font-bold text-white tracking-tight">
                  Admin Verification
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  Prathamesh Taware Portfolio Admin
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-6 font-mono">
              Adding new proof-of-work sheets and subtracting/deleting files is restricted strictly to the administrator.
            </p>

            {/* Authentication Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-white/80 mb-2">
                  Admin Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    autoFocus
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value)
                      if (authError) setAuthError("")
                    }}
                    placeholder="Enter passcode (e.g. taware)"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#2f6bf6] focus:outline-none focus:ring-1 focus:ring-[#2f6bf6] text-white font-mono text-sm placeholder:text-white/30 transition-colors"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                    <Lock className="w-4 h-4" />
                  </div>
                </div>
                {authError && (
                  <p className="mt-2 text-xs text-[#ff5a36] font-mono flex items-center gap-1">
                    <span>⚠</span> {authError}
                  </p>
                )}
                {authSuccess && (
                  <p className="mt-2 text-xs text-[#22c55e] font-mono flex items-center gap-1">
                    <span>✓</span> Admin authenticated successfully!
                  </p>
                )}
              </div>

              {/* Demo Hint */}
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-white/60 flex items-center justify-between">
                <span>Verification Passcode:</span>
                <code className="text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded font-bold">
                  taware
                </code>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowAuthModal(false)
                    setAuthError("")
                  }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-medium text-white/70 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-semibold text-white bg-[#2f6bf6] hover:bg-[#2557d6] shadow-lg shadow-[#2f6bf6]/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Unlock Admin</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Add Artifact Modal */}
      {showAddModal && isAdmin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#121215] border border-[#27272a] rounded-2xl p-6 shadow-2xl shadow-black/80"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-artifact-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e]">
                <FolderPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 id="add-artifact-title" className="text-lg font-bold text-white tracking-tight">
                  Add Proof-of-Work Artifact
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  Deploy live sheet into glass vault
                </p>
              </div>
            </div>

            <form onSubmit={handleAddArtifact} className="space-y-4">
              {/* Target Folder Selection */}
              <div>
                <label className="block text-xs font-mono font-medium text-white/80 mb-2">
                  Destination Folder
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: "agent", label: "Agent Specs" },
                      { id: "patent", label: "Patents & Research" },
                      { id: "honor", label: "Competitive Honors" },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setTargetFolder(f.id)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-mono font-medium text-center transition-all ${
                        targetFolder === f.id
                          ? "bg-[#2f6bf6] text-white border border-[#2f6bf6] shadow-sm"
                          : "bg-white/[0.03] text-white/60 hover:text-white border border-white/10"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-mono font-medium text-white/80 mb-1.5">
                  Artifact Name / Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. LangGraph Memory Sync"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#22c55e] focus:outline-none focus:ring-1 focus:ring-[#22c55e] text-white font-mono text-sm placeholder:text-white/30"
                />
              </div>

              {/* Meta / Subtitle */}
              <div>
                <label className="block text-xs font-mono font-medium text-white/80 mb-1.5">
                  Meta Specs / Metrics
                </label>
                <input
                  type="text"
                  required
                  value={newMeta}
                  onChange={(e) => setNewMeta(e.target.value)}
                  placeholder="e.g. FastAPI SSE · p95 -40%"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#22c55e] focus:outline-none focus:ring-1 focus:ring-[#22c55e] text-white font-mono text-sm placeholder:text-white/30"
                />
              </div>

              {/* Art Preset */}
              <div>
                <label className="block text-xs font-mono font-medium text-white/80 mb-1.5">
                  Artwork Preset
                </label>
                <select
                  value={newArt}
                  onChange={(e) => setNewArt(e.target.value as ArtPreset)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#121215] border border-[#27272a] focus:border-[#22c55e] focus:outline-none text-white font-mono text-sm cursor-pointer"
                >
                  <option value="aurora">Aurora (Steel & Blush)</option>
                  <option value="ember">Ember (Obsidian & Red Fire)</option>
                  <option value="dusk">Dusk (Plum & Rust)</option>
                  <option value="glacier">Glacier (Pale Frost)</option>
                  <option value="verdant">Verdant (Moss & Gold)</option>
                </select>
              </div>

              {/* Link URL */}
              <div>
                <label className="block text-xs font-mono font-medium text-white/80 mb-1.5">
                  Destination URL
                </label>
                <input
                  type="url"
                  value={newHref}
                  onChange={(e) => setNewHref(e.target.value)}
                  placeholder="https://github.com/PrathameshTawar"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#22c55e] focus:outline-none text-white font-mono text-sm placeholder:text-white/30"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-medium text-white/70 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-semibold text-white bg-[#22c55e] hover:bg-[#1ea850] shadow-lg shadow-[#22c55e]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Drop Sheet into Folder</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
