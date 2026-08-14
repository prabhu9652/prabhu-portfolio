import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { TechStack } from '@/components/sections/TechStack';
import { SecurityResilience } from '@/components/sections/SecurityResilience';
import { AIEngineering } from '@/components/sections/AIEngineering';
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
        <Experience />
        <Projects />
        <TechStack />
        <SecurityResilience />
        <AIEngineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
