import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experiences } from "./components/Experiences";
import { Lookbook } from "./components/lookbook";
import Footer from "./components/footer/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";

const App = () => {
  return (
    <div className="min-h-screen bg-bone text-ink selection:bg-ink selection:text-bone">
      <ScrollProgress />
      <Navbar />
      <main className="container mx-auto px-4 md:px-20">
        <Hero />
        <About />
        <Skills />
        <Lookbook />
        <Experiences />
      </main>
      <Footer />
    </div>
  );
};

export default App;
