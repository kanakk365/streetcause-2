import { HeroSection } from "./Components/Hero";
import { AboutSection } from "./Components/About";

import { ImpactSection } from "./Components/Impact";
import { ParticipantsSection } from "./Components/Participants";
import { PassSection } from "./Components/Pass";
import { WhyFooterSection } from "./Components/WhyFooterSection";
import { HighlightsSection } from "./Components/HighlightSection";
import { CopyrightStrip } from "./Components/CopyrightStrip";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HighlightsSection/>
      <PassSection/>
      <ImpactSection />
      <ParticipantsSection />
      <WhyFooterSection />
      <CopyrightStrip />
    </main>
  );
}
