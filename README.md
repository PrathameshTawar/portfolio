# Prathamesh Taware | AI Engineer & Full-Stack Developer Portfolio

A living proof-of-work platform showcasing low-latency LLM orchestration pipelines, distributed agent swarms, patent-backed memory synchronization protocols, and production full-stack systems.

---

## ⚡ Highlights at a Glance

- **Patent Inventor:** Cross-Vendor LLM Memory Synchronization Protocol (99.4% context recall parity across Claude, GPT-4, and Llama).
- **Competitive Programmer:** Codeforces Expert (1650+ Max Rating) & 300+ LeetCode algorithmic solutions.
- **Hackathon Finalist:** Rank 11 out of 800+ national builder teams in *Build & Grow AI 2.0* & Finalist at *AI for Bharat*.
- **Applied Researcher:** Lead author on Indic-Language Bilingual RAG System (+28% MRR improvement).

---

## 🛠️ Tech Stack & Architecture

- **Frontend & App Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling & Design System:** Tailwind CSS v4, shadcn/ui design tokens, Glassmorphism
- **AI & LLM Orchestration:** LangGraph, AWS Bedrock, Qdrant Vector DB, pgvector, FAISS, Whisper STT, BGE-M3
- **Backend & Cloud:** FastAPI, Celery, Redis, Docker, PostgreSQL
- **Icons & Micro-interactions:** Lucide React, Procedural Canvas Shaders

---

## 📁 Project Structure & shadcn/ui Guidelines

This codebase follows standard **shadcn/ui** and Next.js App Router conventions:

```
portfolio/
├── app/
│   ├── globals.css           # Tailwind CSS v4 & theme variables
│   ├── layout.tsx            # SEO metadata, OpenGraph & viewport
│   └── page.tsx              # Assembled single-page proof-of-work layout
├── components/
│   ├── navbar.tsx            # Responsive glass navigation bar
│   ├── hero.tsx              # High-impact hero section with metrics
│   ├── featured-projects.tsx # DARKSEID, GML Memory Protocol, Hive Mind AI
│   ├── glass-folder-showcase.tsx # Living proof-of-work vault with GlassFolder
│   ├── experience-research.tsx   # Gigze internship, patents & publications
│   ├── skills-grid.tsx       # ATS-optimized 3-column competency matrix
│   ├── achievements.tsx      # Codeforces, hackathons & algorithmic stats
│   ├── interactive-terminal.tsx  # Interactive CLI explorer widget
│   ├── contact-section.tsx   # Direct mailto & clipboard copier
│   ├── footer.tsx            # Clean developer footer
│   └── ui/
│       ├── glass-folder-cards.tsx # Frosted glass folder cards component
│       └── demo.tsx               # Interactive demo of folder cards
├── lib/
│   └── utils.ts              # shadcn `cn` utility helper
├── components.json           # shadcn configuration manifest
├── tsconfig.json             # TypeScript path alias (@/* -> ./*)
└── package.json
```

### Why `/components/ui` is Important
In standard shadcn/ui architecture, the `/components/ui` directory is the canonical location for primitive, reusable UI atoms. By configuring `@/components/ui` in `components.json` and `tsconfig.json`, all components, third-party libraries, and CLI templates resolve predictably and avoid import path fragmentation across monorepos or nested apps.

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/PrathameshTawar/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📬 Contact & Inquiries

- **Email:** [tawareprathamesh1010@gmail.com](mailto:tawareprathamesh1010@gmail.com)
- **GitHub:** [github.com/PrathameshTawar](https://github.com/PrathameshTawar)
- **LinkedIn:** [Prathamesh Taware](https://linkedin.com)
