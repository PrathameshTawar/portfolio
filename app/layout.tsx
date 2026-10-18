import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathamesh Tawar | AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer & Full-Stack Developer building low-latency LLM orchestration pipelines. Codeforces Expert (1650+), Patent on cross-vendor LLM memory sync, and Indic-Language RAG researcher.",
  keywords: [
    "Prathamesh Tawar",
    "AI Engineer",
    "Full-Stack Developer",
    "LangGraph",
    "LLM Orchestration",
    "FastAPI",
    "React",
    "Next.js",
    "Vector Databases",
    "Codeforces Expert",
  ],
  authors: [{ name: "Prathamesh Tawar", url: "https://github.com/PrathameshTawar" }],
  creator: "Prathamesh Tawar",
  openGraph: {
    title: "Prathamesh Tawar — AI Engineer & Full-Stack Developer",
    description: "Building low-latency LLM orchestration pipelines and high-performance full-stack systems.",
    type: "website",
    url: "https://github.com/PrathameshTawar/portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#060912",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
