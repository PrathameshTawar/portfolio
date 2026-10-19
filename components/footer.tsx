import React from "react"
import { Cpu, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#09090b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#2f6bf6]/15 border border-[#2f6bf6]/30 flex items-center justify-center text-[#2f6bf6]">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white">PRATHAMESH TAWARE</span>
            <span className="mx-2 text-[#22c55e]">·</span>
            <span>AI Engineer & Full-Stack Developer</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/PrathameshTawar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#2f6bf6]" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#2f6bf6]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:tawareprathamesh1010@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>tawareprathamesh1010@gmail.com</span>
          </a>
        </div>

        <div className="text-center md:text-right text-[11px]">
          <span className="text-[#22c55e]">● SYSTEM ONLINE</span>
          <span className="mx-2 text-border">·</span>
          <span>Next.js 16 & Turbopack</span>
        </div>
      </div>
    </footer>
  )
}
