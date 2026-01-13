import { Navbar } from "@/components/hackathon/Navbar";
import { Hero } from "@/components/hackathon/Hero";
import { About } from "@/components/hackathon/About";
import { Domains } from "@/components/hackathon/Domains";
import { Prizes } from "@/components/hackathon/Prizes";
import { SponsorChallenges } from "@/components/hackathon/SponsorChallenges";
import { JudgesMentors } from "@/components/hackathon/JudgesMentors";
import { Timeline } from "@/components/hackathon/Timeline";
import { Sponsors } from "@/components/hackathon/Sponsors";
import { Gallery } from "@/components/hackathon/Gallery";
import { Team } from "@/components/hackathon/Team";
import { FAQ } from "@/components/hackathon/FAQ";
import { Footer } from "@/components/hackathon/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Prizes />
      <SponsorChallenges />
      <JudgesMentors />
      <Timeline />
      <Sponsors />
      <Gallery />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
