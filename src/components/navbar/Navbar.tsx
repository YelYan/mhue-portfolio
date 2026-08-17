import { useState, useEffect } from "react";
import useResponsive from "@/hooks/useResponsive";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    <span className="font-literary text-3xl md:text-4xl text-ink leading-none">
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
        className="group inline-flex items-center gap-2 bg-babe-pink text-ink text-sm px-4 py-2 rounded-full hover:bg-babe-blue transition-colors shadow-sm"
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

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white"
          >
            {/* soft duotone orbs behind content */}
            <div
              aria-hidden
              className="absolute -top-24 -left-16 w-72 h-72 rounded-full opacity-70 blur-3xl"
              style={{ background: "var(--color-babe-blue-soft)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-70 blur-3xl"
              style={{ background: "var(--color-babe-pink-soft)" }}
            />

            <div className="relative flex items-center justify-between px-4 h-14">
              <Wordmark />
              <button
                aria-label="Close menu"
                onClick={() => setNavOpen(false)}
                className="p-2 -mr-2 text-ink"
              >
                <X size={22} />
              </button>
            </div>

            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.055, delayChildren: 0.08 },
                },
                closed: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
              }}
              className="relative px-4 mt-6 space-y-3"
            >
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                    closed: { opacity: 0, y: 12 },
                  }}
                  className="border-b border-line pb-3"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setNavOpen(false)}
                    className={`group flex items-baseline justify-between font-display text-4xl leading-none transition-colors ${
                      activeSection === link.id
                        ? "text-babe-pink-deep"
                        : "text-ink hover:text-babe-blue-deep"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-ash group-hover:text-babe-pink-deep transition-colors">
                      {link.n}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="relative px-4 mt-10 flex flex-col gap-3"
            >
              <a
                href="mailto:mhuehayman.niko@gmail.com"
                className="inline-flex items-center justify-between gap-2 bg-ink text-bone text-sm px-5 py-3 rounded-full shadow-sm"
              >
                mhuehayman.niko@gmail.com
                <ArrowUpRight size={14} />
              </a>
              <p className="eyebrow px-1">Bangkok · Available for hire</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      className={`px-4 md:px-20 sticky top-0 w-full z-40 bg-white transition-shadow ${
        scroll ? "shadow-[0_1px_0_0_var(--color-line)]" : "border-b border-transparent"
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
