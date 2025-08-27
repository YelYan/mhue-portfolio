import HeroImg from "/assets/mhue-hero.svg";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/animation/Reveal";

const Hero = () => {
  return (
    <section className="h-screen py-4" id="hero">
      <Reveal>
        <div className="container mx-auto h-full flex flex-col justify-start items-center text-center px-1 md:px-4 gap-4">
          <h1 className="text-2xl md:text-3xl font-medium mb-4 text-babe-blue">
            Welcome to <span className="text-babe-pink">Mhue's</span> Portfolio
          </h1>
          <p className="text-lg max-w-2xl">
            Hi I'm Mhue Hayman currently live in Bangkok, an adaptable
            professional with experience in education, administration, and
            strong skills in communication and problem-solving.
          </p>

          <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-3">
            <div className="flex items-center gap-2">
              <Mail width={18} height={18} className="text-babe-blue" />
              <p>mhuehayman.niko@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone width={18} height={18} className="text-babe-pink" />
              <p>+66 943940476</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="border border-babe-blue bg-babe-blue text-white cursor-pointer hover:bg-transparent hover:text-babe-blue hover:border-babe-blue">
              <a href="/assets/mhue-cv.pdf" download>
                Download CV
              </a>
            </Button>
            <Button className="border border-babe-pink bg-babe-pink text-white cursor-pointer hover:bg-transparent hover:text-babe-pink hover:border hover:border-babe-pink">
              <a href="#about">About Me</a>
            </Button>
          </div>

          <img src={HeroImg} width={230} height={230} alt="Hero" />
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
