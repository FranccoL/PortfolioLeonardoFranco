import React from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F0ED] relative">
      {/* Global blueprint lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="blueprint-line-v" style={{ left: "8.33%" }} />
        <div className="blueprint-line-v" style={{ right: "8.33%" }} />
      </div>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}