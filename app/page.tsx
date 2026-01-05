import Hero from "@/components/Hero";
import UltraFolioShowcase from "@/components/UltraFolioShowcase";
import BentoAbout from "@/components/BentoAbout";
import HackathonHighlights from "@/components/HackathonHighlights";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import CommandTerminal from "@/components/CommandTerminal";
import FloatingDock from "@/components/FloatingDock";
import Preloader from "@/components/Preloader";
import SmoothScrolling from "@/components/SmoothScrolling";
import Projects from "@/components/Projects";
import Publication from "@/components/Publication";
import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  return (
    <SmoothScrolling>
      <main className="min-h-screen bg-[#030712] text-white relative">
        <div className="bg-noise" />

        <Preloader />

        <FloatingDock />

        <Hero />

        <div className="relative z-10 space-y-24 pb-32">
          <BentoAbout />
          <UltraFolioShowcase />
          <Projects />
          <Publication />
          <HackathonHighlights />
          <ExperienceTimeline />
          <ChatInterface />
          <Contact />
        </div>

        <CommandTerminal />
      </main>
    </SmoothScrolling>
  );
}

