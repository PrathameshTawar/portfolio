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
    <section id="proof-of-work" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050505]">
      {/* Background subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#EDEDED 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/5 rounded-full blur-[140px] opacity-60"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] text-[#EDEDED] border border-[#1F1F1F] text-xs font-mono font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Interactive Living Artifacts · 03 / 07</span>
            </div>

            {/* Admin Access Status Pill */}
            {isAdmin ? (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] text-[#EDEDED] border border-[#1F1F1F] text-xs font-mono shadow-[0_0_20px_rgba(56,189,248,0.12)]">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="font-semibold text-[#EDEDED]">Admin Mode Active</span>
                <span className="text-[#737373]">|</span>
                <button
                  type="button"
                  onClick={() => setShowAddModal(true)}
                  className="text-[#38BDF8] hover:text-[#FFFFFF] font-medium hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Plus className="w-3 h-3" /> Add Artifact
                </button>
                <span className="text-[#737373]">|</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-[#737373] hover:text-[#EDEDED] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] hover:bg-[#141414] text-[#EDEDED] border border-[#1F1F1F] hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.08)] text-xs font-mono transition-all cursor-pointer group"
                title="Admin authentication required to add or subtract files"
              >
                <Lock className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#38BDF8] group-hover:scale-110 transition-all" />
                <span className="text-[#737373] group-hover:text-[#EDEDED] transition-colors">Admin: Locked (Guest Mode)</span>
                <span className="text-[#38BDF8] group-hover:underline text-[11px] font-medium ml-1">Unlock →</span>
              </button>
            )}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#EDEDED] mb-4">
            Interactive Proof-of-Work Vault
          </h2>
          <p className="text-[#737373] text-sm sm:text-base leading-relaxed font-mono">
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
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono tracking-widest text-[#737373] uppercase text-center">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isAdmin ? "bg-[#38BDF8]" : "bg-[#EDEDED]"} animate-pulse`} />
            <span className="text-[#EDEDED]">Hover cards to lean · Click to inspect contents</span>
          </div>
          <span className="hidden sm:inline text-[#1F1F1F]">·</span>
          <div className="flex items-center gap-1.5 text-[#737373]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{isAdmin ? "Add (+) and Sub (−) Privileges Unlocked" : "Add & Sub access restricted to Admin"}</span>
          </div>
        </div>
      </div>

      {/* Admin Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-md bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-6 shadow-2xl shadow-black hover:border-[#38BDF8]/30 transition-colors"
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
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#737373] hover:text-[#EDEDED] hover:bg-[#141414] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#1F1F1F] flex items-center justify-center text-[#38BDF8]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 id="admin-auth-title" className="text-lg font-bold text-[#EDEDED] tracking-tight">
                  Admin Verification
                </h3>
                <p className="text-xs text-[#737373] font-mono">
                  Prathamesh Taware Portfolio Admin
                </p>
              </div>
            </div>

            <p className="text-sm text-[#737373] leading-relaxed mb-6 font-mono">
              Adding new proof-of-work sheets and subtracting/deleting files is restricted strictly to the administrator.
            </p>

            {/* Authentication Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-[#EDEDED] mb-2">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-[#1F1F1F] focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] text-[#EDEDED] font-mono text-sm placeholder:text-[#737373] transition-colors"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373]">
                    <Lock className="w-4 h-4" />
                  </div>
                </div>
                {authError && (
                  <p className="mt-2 text-xs text-[#f87171] font-mono flex items-center gap-1">
                    <span>⚠</span> {authError}
                  </p>
                )}
                {authSuccess && (
                  <p className="mt-2 text-xs text-[#38BDF8] font-mono flex items-center gap-1">
                    <span>✓</span> Admin authenticated successfully!
                  </p>
                )}
              </div>

              {/* Demo Hint */}
              <div className="p-2.5 rounded-lg bg-[#050505] border border-[#1F1F1F] text-xs font-mono text-[#737373] flex items-center justify-between">
                <span>Verification Passcode:</span>
                <code className="text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded font-bold border border-[#38BDF8]/20">
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
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-medium text-[#737373] bg-[#050505] hover:bg-[#141414] hover:text-[#EDEDED] border border-[#1F1F1F] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-semibold text-[#050505] bg-[#FFFFFF] hover:bg-[#EDEDED] shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all cursor-pointer flex items-center justify-center gap-2"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-6 shadow-2xl shadow-black hover:border-[#38BDF8]/30 transition-colors"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-artifact-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#737373] hover:text-[#EDEDED] hover:bg-[#141414] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#1F1F1F] flex items-center justify-center text-[#38BDF8]">
                <FolderPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 id="add-artifact-title" className="text-lg font-bold text-[#EDEDED] tracking-tight">
                  Add Proof-of-Work Artifact
                </h3>
                <p className="text-xs text-[#737373] font-mono">
                  Deploy live sheet into glass vault
                </p>
              </div>
            </div>

            <form onSubmit={handleAddArtifact} className="space-y-4">
              {/* Target Folder Selection */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#EDEDED] mb-2">
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
                      className={`py-2 px-2.5 rounded-lg text-xs font-mono font-medium text-center transition-all cursor-pointer ${
                        targetFolder === f.id
                          ? "bg-[#FFFFFF] text-[#050505] font-bold shadow-sm"
                          : "bg-[#050505] text-[#737373] hover:text-[#EDEDED] border border-[#1F1F1F]"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#EDEDED] mb-1.5">
                  Artifact Name / Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. LangGraph Memory Sync"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#050505] border border-[#1F1F1F] focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] text-[#EDEDED] font-mono text-sm placeholder:text-[#737373]"
                />
              </div>

              {/* Meta / Subtitle */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#EDEDED] mb-1.5">
                  Meta Specs / Metrics
                </label>
                <input
                  type="text"
                  required
                  value={newMeta}
                  onChange={(e) => setNewMeta(e.target.value)}
                  placeholder="e.g. FastAPI SSE · p95 -40%"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#050505] border border-[#1F1F1F] focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] text-[#EDEDED] font-mono text-sm placeholder:text-[#737373]"
                />
              </div>

              {/* Art Preset */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#EDEDED] mb-1.5">
                  Artwork Preset
                </label>
                <select
                  value={newArt}
                  onChange={(e) => setNewArt(e.target.value as ArtPreset)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#050505] border border-[#1F1F1F] focus:border-[#38BDF8] focus:outline-none text-[#EDEDED] font-mono text-sm cursor-pointer"
                >
                  <option value="aurora">Aurora (Steel & Sky)</option>
                  <option value="ember">Ember (Obsidian & Red Fire)</option>
                  <option value="dusk">Dusk (Plum & Rust)</option>
                  <option value="glacier">Glacier (Pale Frost)</option>
                  <option value="verdant">Verdant (Moss & Gold)</option>
                </select>
              </div>

              {/* Link URL */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#EDEDED] mb-1.5">
                  Destination URL
                </label>
                <input
                  type="url"
                  value={newHref}
                  onChange={(e) => setNewHref(e.target.value)}
                  placeholder="https://github.com/PrathameshTawar"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#050505] border border-[#1F1F1F] focus:border-[#38BDF8] focus:outline-none text-[#EDEDED] font-mono text-sm placeholder:text-[#737373]"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-medium text-[#737373] bg-[#050505] hover:bg-[#141414] hover:text-[#EDEDED] border border-[#1F1F1F] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-sm font-mono font-bold text-[#050505] bg-[#38BDF8] hover:bg-[#0284c7] shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all cursor-pointer flex items-center justify-center gap-2"
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
