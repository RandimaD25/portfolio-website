import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212]">
      <Navbar /> {/* Fixed at top */}
      <div className="pt-[60px] flex flex-col">
        {" "}
        {/* Padding to account for fixed navbar */}
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        {/* This block fills the screen below the navbar */}
        <div className="min-h-[calc(100vh-60px)] flex flex-col justify-between space-y-0">
          <EmailSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
