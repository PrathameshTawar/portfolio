"use client"

import React from "react"
import { Trophy, Code, Target, Award, Star, Flame } from "lucide-react"

interface Achievement {
  title: string
  subtitle: string
  metric: string
  description: string
  icon: React.ReactNode
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Codeforces Expert",
    subtitle: "Competitive Programming",
    metric: "1650+",
    description: "Achieved top global tier rank demonstrating mastery over graph theory, dynamic programming, and combinatorics under extreme time constraints.",
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
  },
  {
    title: "Build & Grow AI 2.0",
    subtitle: "National Hackathon",
    metric: "Rank 11",
    description: "Secured Rank 11 out of 800+ national builder teams for Hive Mind AI, an autonomous multi-agent root cause analysis system.",
    icon: <Award className="w-5 h-5 text-sky-400" />,
  },
  {
    title: "AI for Bharat Hackathon",
    subtitle: "Podium Winner",
    metric: "Winner",
    description: "Awarded top honor for building accessible vernacular voice interfaces leveraging localized Whisper STT models and Indic embeddings.",
    icon: <Flame className="w-5 h-5 text-rose-400" />,
  },
  {
    title: "Algorithmic Problem Solving",
    subtitle: "LeetCode & Platforms",
    metric: "300+",
    description: "Maintained consistent high-difficulty problem solutions covering trees, tries, backtracking, and mathematical proofs.",
    icon: <Code className="w-5 h-5 text-emerald-400" />,
  },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border/80">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4" />
            <span>Problem-Solving Signals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Achievements & Competitive Honors
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md">
          Hard proof of rigorous analytical capability, algorithmic speed, and execution under pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-secondary border border-border">
                  {item.icon}
                </div>
                <span className="font-mono text-2xl font-black text-foreground">
                  {item.metric}
                </span>
              </div>

              <h3 className="font-bold text-lg text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-primary mb-3">
                {item.subtitle}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
