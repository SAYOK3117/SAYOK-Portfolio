import { Nav }          from './components/Nav';
import { Hero }         from './components/Hero';
import { About }        from './components/About';
import { Projects }     from './components/Projects';
import { Skills }       from './components/Skills';
import { Journey }      from './components/Journey';
import { Achievements } from './components/Achievements';
import { Contact }      from './components/Contact';
import { Footer }       from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface antialiased selection:bg-surface-container-high selection:text-secondary font-[Geist,sans-serif]">
      <Nav />

      <main className="w-full pt-14 md:pt-16 bg-background min-h-screen flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
