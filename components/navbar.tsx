"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, Moon, Sparkles, Terminal } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("cover")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "cover", name: "COVER", href: "#hero" },
    { id: "projects", name: "PROJECTS", href: "#projects" },
    { id: "vault", name: "VAULT", href: "#proof-of-work" },
    { id: "experience", name: "WORK", href: "#experience" },
    { id: "skills", name: "STACK", href: "#skills" },
    { id: "terminal", name: "CLI", href: "#terminal" },
    { id: "contact", name: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top brand header bar matching hyper-minimalist design */}
      <div className="w-full bg-[#050505]/90 backdrop-blur-md border-b border-[#1F1F1F] flex items-center justify-between px-4 sm:px-8 py-2">
        {/* Top-left primary accent badge */}
        <a
          href="#"
          className="inline-flex items-center px-4 py-1.5 rounded-br-2xl rounded-tl-lg bg-white text-[#050505] font-black text-sm tracking-widest shadow-sm hover:bg-[#EDEDED] transition-all"
        >
          <span>PORTFOLIO®</span>
        </a>

        {/* Center floating capsule nav bar */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#0A0A0A]/90 border border-[#1F1F1F] rounded-full px-3 py-1 shadow-lg shadow-black/60">
          <span className="text-[11px] font-mono text-[#38BDF8] font-bold px-2">01 <span className="text-[#737373]">/ 07</span></span>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`px-3 py-1 text-xs font-mono tracking-wider font-semibold rounded-full transition-all ${
                  isActive
                    ? "bg-white text-[#050505] shadow-sm"
                    : "text-[#737373] hover:text-[#EDEDED] hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <div className="pl-1 text-[#737373] hover:text-[#EDEDED] cursor-pointer p-1">
            <Moon className="w-3.5 h-3.5" />
          </div>
        </nav>

        {/* Top-right engineering tags */}
        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[#737373]">
          <span className="hover:text-[#38BDF8] transition-colors cursor-default">AI ORCHESTRATION</span>
          <span className="text-[#1F1F1F]">|</span>
          <span className="hover:text-[#EDEDED] transition-colors cursor-default">DISTRIBUTED SYSTEMS</span>
          <span className="text-[#1F1F1F]">|</span>
          <span className="hover:text-[#38BDF8] transition-colors cursor-default">FULL-STACK</span>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] text-[#EDEDED]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav modal */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-[#1F1F1F] px-6 py-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveSection(link.id)
                setMobileMenuOpen(false)
              }}
              className="block px-3 py-2 text-sm font-mono font-medium text-[#737373] hover:text-[#EDEDED] hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="https://github.com/PrathameshTawar" target="_blank" rel="noopener noreferrer" className="p-2 text-[#737373] hover:text-[#EDEDED]">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="mailto:tawareprathamesh1010@gmail.com" className="p-2 text-[#737373] hover:text-[#EDEDED]">
                <span className="text-xs font-mono text-[#38BDF8]">tawareprathamesh1010@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
