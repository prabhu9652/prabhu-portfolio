import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Philosophy } from '@/components/sections/Philosophy';
import { TechStack } from '@/components/sections/TechStack';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Development } from '@/components/sections/Development';
import { AIEngineering } from '@/components/sections/AIEngineering';
import { ArchitectureDiagram } from '@/components/sections/ArchitectureDiagram';
import { ContinuousLearning } from '@/components/sections/ContinuousLearning';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Resume } from '@/components/sections/Resume';
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
        <Philosophy />
        <TechStack />
        <Experience />
        <Projects />
        <AIEngineering />
        <ArchitectureDiagram />
        <Development />
        <ContinuousLearning />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
