import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Manu Sriram D V | Electronics & Instrumentation Engineer</title>
        <meta
          name="description"
          content="Portfolio of Manu Sriram D V - Electronics & Instrumentation Engineering student specializing in IoT, embedded systems, and industrial automation."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Main Content */}
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
