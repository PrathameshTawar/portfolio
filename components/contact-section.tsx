"use client"

import React, { useState } from "react"
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin } from "lucide-react"

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
      <div className="rounded-3xl bg-card border border-border/80 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"
        />

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Let&apos;s Build High-Impact Systems
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
            Whether you&apos;re looking to architect low-latency AI agent pipelines, scale resilient full-stack web platforms, or discuss cross-vendor LLM memory architectures, my inbox is open.
          </p>

          {/* Email action card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-secondary/80 border border-border max-w-xl mx-auto mb-8 shadow-inner">
            <div className="flex items-center gap-2 px-4 py-2 font-mono text-sm text-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-background hover:bg-card text-xs font-medium text-foreground border border-border transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-md shadow-primary/20 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com/PrathameshTawar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background/50 hover:bg-muted text-foreground border border-border transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>github.com/PrathameshTawar</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background/50 hover:bg-muted text-foreground border border-border transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
