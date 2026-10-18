import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import Research from "@/components/site/Research";
import Experience from "@/components/site/Experience";
import AskAI from "@/components/site/AskAI";
import Contact from "@/components/site/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="border-t border-white/[0.06]" />
        <Work />
        <Research />
        <Experience />
        <AskAI />
        <Contact />
      </main>
    </>
  );
}
