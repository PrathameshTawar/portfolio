import React from "react"
import { Cpu, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/50 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-foreground">Prathamesh Tawar</span>
            <span className="mx-2">·</span>
            <span>AI Engineer & Full-Stack Developer</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/PrathameshTawar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:tawareprathamesh1010@gmail.com"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>tawareprathamesh1010@gmail.com</span>
          </a>
        </div>

        <div className="text-center md:text-right font-mono text-[11px]">
          <span>Engineered with Next.js & Tailwind CSS · Fast, zero-CLS architecture</span>
        </div>
      </div>
    </footer>
  )
}
