import { HeroSection } from "./Components/Hero";
import { AboutSection } from "./Components/About";

import { ImpactSection } from "./Components/Impact";
import { ParticipantsSection } from "./Components/Participants";
import { PassSection } from "./Components/Pass";
import { FooterSection } from "./Components/Fotter";
import { HighlightsSection } from "./Components/HighlightSection";
import { WhySection } from "./Components/WhySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HighlightsSection/>
      <PassSection/>
      <ImpactSection />
      <ParticipantsSection />
      <WhySection/>
      <FooterSection />
    </main>
  );
}
