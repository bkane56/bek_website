import { About } from "@/components/About";
import { AIFocus } from "@/components/AIFocus";
import { Contact } from "@/components/Contact";
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { PersonalitySection } from "@/components/PersonalitySection";
import { ResumeDownloads } from "@/components/ResumeDownloads";
import { Skills } from "@/components/Skills";
import { TwinTeaser } from "@/components/TwinTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <AIFocus />
      <ExperienceSummary />
      <ResumeDownloads />
      <TwinTeaser />
      <PersonalitySection />
      <Contact />
    </>
  );
}
