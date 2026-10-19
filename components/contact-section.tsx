"use client"

import React, { useState } from "react"
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "tawareprathamesh1010@gmail.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-[#0c1222] border border-[#182238] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Ambient glow in electric blue */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-[#2f6bf6]/20 rounded-full blur-[100px]"
        />

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch · 07 / 07</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Let&apos;s Build Something
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Have a project in mind, an engineering role to fill, or want to discuss multi-agent systems and memory sync? Drop me an email or find me on GitHub.
          </p>

          {/* Email action card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-[#080c18] border border-[#1e2a47] max-w-xl mx-auto mb-8 shadow-inner">
            <div className="flex items-center gap-2 px-4 py-2 font-mono text-sm text-white">
              <Mail className="w-4 h-4 text-[#2f6bf6]" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121a2e] hover:bg-[#18233d] text-xs font-medium text-white border border-[#1e2a47] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#2f6bf6] hover:brightness-110 text-white text-xs font-semibold shadow-md shadow-[#2f6bf6]/30 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-mono">
            <a
              href="https://github.com/PrathameshTawar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080c18] hover:bg-[#121a2e] text-white border border-[#1e2a47] transition-colors text-xs"
            >
              <GithubIcon className="w-4 h-4 text-[#2f6bf6]" />
              <span>github.com/PrathameshTawar</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080c18] hover:bg-[#121a2e] text-white border border-[#1e2a47] transition-colors text-xs"
            >
              <LinkedinIcon className="w-4 h-4 text-[#2f6bf6]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
