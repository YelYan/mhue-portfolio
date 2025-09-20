import { useState, useEffect } from "react";
import LOGO from "/assets/mhue-logo.svg";
import useResponsive from "@/hooks/useResponsive";
import { Menu, X, PawPrint, Cat } from "lucide-react";
import { ParticlesBackground } from "../particles";
// import Birthday from "../birthday/Birthday";
// import { motion } from "framer-motion";
const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
];

const MobileNav = ({ activeSection }: { activeSection: string }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="py-2 flex justify-between items-center">
      <a href="#hero" className="w-30 h-auto cursor-pointer">
        <img src={LOGO} width={150} height={150} alt="mhue's logo" />
      </a>
      <div className="">
        {/* <Birthday>
          <div className="">
            <motion.p
              className="text-sm md:text-md text-justify"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              Happy birthday to you!🎉 I hope everything you wish become in your
              life. I know that it's been really hard for you to overcome this
              difficult era. But I believe in you that you can do it. Just keep
              pushing forward! and always remember that I will be here to
              support you. And I promise I will come to you no matter where you
              go.I am really glad that I met you in my life I know that it was
              short amount time that we became close and I am really hoping that
              this will still go on even though it is hard. If you are willing
              to have me around you I will stay beside you no matter what. The
              only magic word you can say to me is just "stay" and I will
              definitely listen to what you say. I will try my best to make you
              happy. My Babe boo❤️
            </motion.p>
          </div>
        </Birthday> */}
      </div>
      <div className="flex items-center gap-2">
        <Menu
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => setNavOpen(true)}
        />
      </div>

      <ul
        className={`flex flex-col justify-center items-center space-y-4 inset-shadow-2xs fixed inset-0 z-99 bg-white transition delay-150 duration-300 ease-in-out transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ParticlesBackground />
        <PawPrint className="absolute top-10 left-10 text-babe-pink" />
        <Cat className="absolute bottom-10 right-10 text-babe-blue" />
        <X
          width={30}
          height={30}
          className="cursor-pointer absolute top-5 right-5"
          onClick={() => setNavOpen(false)}
        />
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setNavOpen(false)}
              className={`text-xl ${
                activeSection === link.id
                  ? "text-babe-blue font-bold"
                  : "text-babe-pink"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const DesktopNav = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="flex items-center justify-between">
      <a href="#hero" className="w-40 h-auto cursor-pointer">
        <img src={LOGO} alt="mhue's logo" />
      </a>

      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${
                activeSection === link.id
                  ? "text-babe-blue font-bold"
                  : "text-babe-pink"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Navbar = () => {
  const { desktopResponsive, tabletResponsive, mobileResponsive } =
    useResponsive();

  const [activeSection, setActiveSection] = useState("hero");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));

    // ✅ Check which section is initially visible
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={`px-4 md:px-18 sticky top-0 w-full z-10 bg-white ${
        scroll ? "shadow-sm" : ""
      }`}
    >
      {(desktopResponsive || tabletResponsive) && (
        <DesktopNav activeSection={activeSection} />
      )}
      {mobileResponsive && <MobileNav activeSection={activeSection} />}
    </header>
  );
};

export default Navbar;
