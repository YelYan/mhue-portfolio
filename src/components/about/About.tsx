import { Button } from "@/components/ui/button";
import CvLetter from "/assets/mhue-cv-letter.pdf";
import HeroImg from "/assets/mhue-hero.svg";
import { RevealTop } from "@/components/ui/animation/RevealY";

const About = () => {
  return (
    <section id="about" className="h-screen pt-20 md:py-0">
      <h1 className="text-center text-3xl mb-4 text-babe-blue">
        About <span className="text-babe-pink">Me</span>
      </h1>
      <RevealTop>
        <div className="h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mx-auto">
            <img
              src={HeroImg}
              className="w-[230px] h-[230px] md:w-[400px] md:h-[400px]"
              alt="About Mhue"
            />
          </div>

          <div className="mt-0 md:mt-12">
            <p className="font-light">
              I'm motivated and adaptable professional with a Bachelor’s degree
              in International Relations and a Diploma in Business Management
              and Administration. Experienced in both educational and
              administrative roles, including working as an Assistant Teacher at
              a preschool and as a Student Service Officer, where I supported
              students and managed service operations. Skilled in communication,
              problem-solving, and multitasking, with a proven ability to thrive
              in diverse environments. Passionate about fostering positive
              relationships, delivering excellent service, and contributing to
              organizational success.
            </p>

            <Button className="mx-auto bg-babe-pink text-white border border-babe-pink hover:bg-transparent hover:text-babe-pink hover:border-babe-pink mt-4 ">
              <a href={CvLetter} download>
                Download Cover Letter
              </a>
            </Button>
          </div>
        </div>
      </RevealTop>
    </section>
  );
};

export default About;
