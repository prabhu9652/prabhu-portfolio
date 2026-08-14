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
    <>
      {/* Skip navigation — visible on focus for keyboard users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main-content" aria-label="Portfolio content" className="min-h-screen">
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
    </>
  );
}

export default App;
