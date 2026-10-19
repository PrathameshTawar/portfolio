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
      <div className="rounded-3xl bg-[#0A0A0A] border border-[#1F1F1F] p-8 sm:p-12 relative overflow-hidden shadow-2xl hover:border-[#38BDF8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)] transition-all duration-300">
        {/* Ambient subtle glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-[120px]"
        />

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050505] text-[#EDEDED] border border-[#1F1F1F] text-xs font-mono font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Get in Touch · 07 / 07</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#EDEDED] mb-4">
            Let&apos;s Build Something
          </h2>

          <p className="text-[#737373] text-sm sm:text-base leading-relaxed mb-8 font-sans">
            Have a project in mind, an engineering role to fill, or want to discuss multi-agent systems and memory sync? Drop me an email or find me on GitHub.
          </p>

          {/* Email action card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-[#050505] border border-[#1F1F1F] max-w-xl mx-auto mb-8 shadow-inner">
            <div className="flex items-center gap-2 px-4 py-2 font-mono text-sm text-[#EDEDED]">
              <Mail className="w-4 h-4 text-[#38BDF8]" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-xs font-medium text-[#EDEDED] border border-[#1F1F1F] hover:border-[#38BDF8]/40 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Copy className="w-3.5 h-3.5 text-[#737373]" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#EDEDED] text-[#050505] text-xs font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 text-sm text-[#737373] font-mono">
            <a
              href="https://github.com/PrathameshTawar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-[#EDEDED] border border-[#1F1F1F] hover:border-[#38BDF8]/40 transition-colors text-xs"
            >
              <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
              <span>github.com/PrathameshTawar</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-[#EDEDED] border border-[#1F1F1F] hover:border-[#38BDF8]/40 transition-colors text-xs"
            >
              <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
