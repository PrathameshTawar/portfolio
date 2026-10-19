"use client"

import React from "react"
import { Trophy, Code, Award, Flame } from "lucide-react"

interface Achievement {
  title: string
  subtitle: string
  metric: string
  metricColor: string
  description: string
  icon: React.ReactNode
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Codeforces Expert",
    subtitle: "Competitive Programming",
    metric: "1650+",
    metricColor: "text-[#facc15]",
    description: "Ranked in the top competitive programming tier globally. Contest problem-solving focused on graphs, dynamic programming, and combinatorics.",
    icon: <Trophy className="w-5 h-5 text-[#facc15]" />,
  },
  {
    title: "Build & Grow AI 2.0",
    subtitle: "National Hackathon",
    metric: "Rank 11",
    metricColor: "text-[#ff5a36]",
    description: "Finished 11th out of 800+ builder teams nationwide with Hive Mind AI, our distributed multi-agent root cause analysis engine.",
    icon: <Award className="w-5 h-5 text-[#ff5a36]" />,
  },
  {
    title: "AI for Bharat Hackathon",
    subtitle: "Finalist & Project Builder",
    metric: "Finalist",
    metricColor: "text-[#22c55e]",
    description: "Selected as a national finalist for building vernacular voice interfaces combining local Whisper speech-to-text with Indic embeddings.",
    icon: <Flame className="w-5 h-5 text-[#22c55e]" />,
  },
  {
    title: "Algorithmic Problems",
    subtitle: "LeetCode & Platforms",
    metric: "300+",
    metricColor: "text-[#2f6bf6]",
    description: "Over 300 problems solved across LeetCode and Codeforces, with a strong focus on advanced graph algorithms, trees, and dynamic programming.",
    icon: <Code className="w-5 h-5 text-[#2f6bf6]" />,
  },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#182238]">
        <div>
          <div className="inline-flex items-center gap-2 text-[#2f6bf6] font-mono text-xs uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4" />
            <span>Competitive Track Record · 06 / 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Honors & Problem Solving
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-muted-foreground text-sm max-w-md font-mono">
          Concrete benchmarks from timed programming contests and national hackathons.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between p-6 rounded-3xl bg-[#0c1222] border border-[#182238] hover:border-[#2f6bf6]/40 transition-all hover:shadow-xl hover:shadow-[#2f6bf6]/5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-[#080c18] border border-[#182238]">
                  {item.icon}
                </div>
                <span className={`font-mono text-2xl font-black ${item.metricColor}`}>
                  {item.metric}
                </span>
              </div>

              <h3 className="font-bold text-lg text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-muted-foreground mb-3">
                {item.subtitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
