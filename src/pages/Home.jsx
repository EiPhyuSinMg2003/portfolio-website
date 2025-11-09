import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/Starbackground";
import { NavBar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen container bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}

      {/*Background Effects*/}
      <StarBackground />

      {/*Navbar*/}
      <NavBar />

      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
