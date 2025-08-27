import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experiences } from "./components/Experiences";
import Footer from "./components/footer/Footer";
import { ParticlesBackground } from "./components/particles";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-20 ">
        <ParticlesBackground />
        <Hero />
        <About />
        <div className="mt-60 md:mt-0">
          <Skills />
        </div>
        <Experiences />
      </div>
      <Footer />
    </>
  );
};

export default App;
