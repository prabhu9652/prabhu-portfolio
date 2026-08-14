import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { EngineeringDomains } from '@/components/sections/EngineeringDomains';
import { Philosophy } from '@/components/sections/Philosophy';
import { TechStack } from '@/components/sections/TechStack';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { SecurityResilience } from '@/components/sections/SecurityResilience';
import { AIEngineering } from '@/components/sections/AIEngineering';
import { ArchitectureDiagram } from '@/components/sections/ArchitectureDiagram';
import { Development } from '@/components/sections/Development';
import { WhatIBring } from '@/components/sections/WhatIBring';
import { ContinuousLearning } from '@/components/sections/ContinuousLearning';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Resume } from '@/components/sections/Resume';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <EngineeringDomains />
        <Philosophy />
        <TechStack />
        <Experience />
        <Projects />
        <SecurityResilience />
        <AIEngineering />
        <ArchitectureDiagram />
        <Development />
        <WhatIBring />
        <ContinuousLearning />
        <GitHubSection />
        <Resume />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
