import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import EducationSection from "@/sections/EducationSection";
import CertificationsSection from "@/sections/CertificationsSection";
import AchievementsSection from "@/sections/AchievementsSection";
import CodingProfilesSection from "@/sections/CodingProfilesSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2EA] text-[#191919]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <CodingProfilesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
