import { useState, useEffect } from "react";
import useResponsive from "@/hooks/useResponsive";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { id: "hero", label: "Index", n: "01" },
  { id: "about", label: "About", n: "02" },
  { id: "skills", label: "Capabilities", n: "03" },
  { id: "lookbook", label: "Lookbook", n: "04" },
  { id: "experience", label: "Experience", n: "05" },
  { id: "contact", label: "Contact", n: "06" },
];

const Wordmark = () => (
  <a
    href="#hero"
    className="flex items-baseline gap-2 cursor-pointer group"
    aria-label="Mhue — home"
  >
    <span className="font-display text-2xl md:text-3xl italic text-ink leading-none">
      Mhue
    </span>
    <span className="eyebrow hidden md:inline text-ash group-hover:text-ink transition-colors">
      / AI Fashion
    </span>
  </a>
);

const DesktopNav = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="flex items-center justify-between h-16">
      <Wordmark />
      <ul className="flex items-center gap-8">
        {links.slice(1, 5).map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`text-sm transition-colors ${
                activeSection === link.id
                  ? "text-ink font-medium"
                  : "text-graphite hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 bg-ink text-bone text-sm px-4 py-2 rounded-full hover:bg-graphite transition-colors"
      >
        Get in touch
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </nav>
  );
};

const MobileNav = ({ activeSection }: { activeSection: string }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <nav className="flex justify-between items-center h-14">
      <Wordmark />
      <button
        aria-label="Open menu"
        onClick={() => setNavOpen(true)}
        className="p-2 -mr-2 text-ink"
      >
        <Menu size={22} />
      </button>

      <div
        className={`fixed inset-0 z-50 bg-bone transition-opacity duration-300 ${
          navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <Wordmark />
          <button
            aria-label="Close menu"
            onClick={() => setNavOpen(false)}
            className="p-2 -mr-2 text-ink"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="px-4 mt-8 space-y-4">
          {links.map((link) => (
            <li key={link.id} className="border-b border-line pb-4">
              <a
                href={`#${link.id}`}
                onClick={() => setNavOpen(false)}
                className={`flex items-baseline justify-between font-display text-3xl leading-none ${
                  activeSection === link.id ? "text-ink" : "text-graphite"
                }`}
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-ash">{link.n}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="px-4 mt-10">
          <a
            href="mailto:mhuehayman.niko@gmail.com"
            className="inline-flex items-center gap-2 bg-ink text-bone text-sm px-5 py-3 rounded-full"
          >
            mhuehayman.niko@gmail.com
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const { desktopResponsive, tabletResponsive, mobileResponsive } =
    useResponsive();

  const [activeSection, setActiveSection] = useState("hero");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={`px-4 md:px-20 sticky top-0 w-full z-40 backdrop-blur-md bg-bone/80 transition-shadow ${
        scroll ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
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
