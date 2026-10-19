import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import GlassFolderShowcase from "@/components/glass-folder-showcase";
import ExperienceResearch from "@/components/experience-research";
import SkillsGrid from "@/components/skills-grid";
import Achievements from "@/components/achievements";
import InteractiveTerminal from "@/components/interactive-terminal";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground relative selection:bg-[#38BDF8]/25 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Production Architectures */}
      <FeaturedProjects />

      {/* Interactive Proof-of-Work Vault with Glass Folder Cards */}
      <GlassFolderShowcase />

      {/* Experience, Patents & Research Timeline */}
      <ExperienceResearch />

      {/* Categorized Skills Grid */}
      <SkillsGrid />

      {/* Competitive Honors & Hackathons */}
      <Achievements />

      {/* Interactive CLI Terminal Explorer */}
      <InteractiveTerminal />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
