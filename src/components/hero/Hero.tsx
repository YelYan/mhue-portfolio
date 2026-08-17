import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import LookDeck from "./LookDeck";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\/+/, "")}`;

const chips = ["AI Fashion Design", "Image Generation", "E-Commerce", "EU / US Markets"];

const STATS: Array<{ k: string; v: string; c: string }> = [
  { k: "06", v: "AI-generated looks", c: "text-babe-blue-deep" },
  { k: "02", v: "Target markets — EU · US", c: "text-babe-pink-deep" },
  { k: "AI", v: "Design & imagery workflow", c: "text-babe-blue-deep" },
  { k: "24h", v: "Concept to campaign", c: "text-babe-pink-deep" },
];

const StatCell = ({ k, v, c }: (typeof STATS)[number]) => {
  const { ref, value } = useCountUp(k, 1400);
  return (
    <div ref={ref} className="flex flex-col">
      <span className={`font-display text-4xl md:text-5xl tabular-nums ${c}`}>
        {value}
      </span>
      <span className="mt-2 eyebrow">{v}</span>
    </div>
  );
};

// Letter-stagger helper for the hero headline
const AnimatedWord = ({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => (
  <span className={`inline-block overflow-hidden align-baseline ${className}`}>
    {children.split("").map((ch, i) => (
      <motion.span
        key={i}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.85,
          delay: delay + i * 0.045,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        {ch === " " ? " " : ch}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Spotlight follows cursor
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(30);
  const sxSpring = useSpring(spotX, { stiffness: 60, damping: 20 });
  const sySpring = useSpring(spotY, { stiffness: 60, damping: 20 });
  const background = useTransform(
    [sxSpring, sySpring] as any,
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(162,207,254,0.35), transparent 55%),
       radial-gradient(500px circle at ${100 - x}% ${100 - y}%, rgba(244,194,194,0.35), transparent 55%)`
  );

  // Parallax offsets for the 3D deck wrapper
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mxs = useSpring(mx, { stiffness: 80, damping: 20 });
  const mys = useSpring(my, { stiffness: 80, damping: 20 });
  const t1x = useTransform(mxs, (v) => v * -10);
  const t1y = useTransform(mys, (v) => v * -10);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    spotX.set(px * 100);
    spotY.set(py * 100);
    mx.set(px - 0.5);
    my.set(py - 0.5);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={onMove}
      className="relative pt-10 md:pt-16 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background }}
      />

      {/* running eyebrow strip */}
      <div className="flex items-center justify-between eyebrow mb-10 md:mb-14">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Portfolio / 2026
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:inline-flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-babe-pink opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-babe-pink-deep" />
          </span>
          Bangkok · Available for hire
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          N° 001
        </motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
        {/* Type block */}
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Mhue Hayman &nbsp;/&nbsp; AI Fashion Designer
          </motion.p>

          <h1 className="font-display text-[15vw] md:text-[9.2vw] leading-[0.9] tracking-tight text-ink">
            <AnimatedWord className="text-babe-blue-deep" delay={0.15}>
              Designing
            </AnimatedWord>
            <br />
            <AnimatedWord className="italic font-light" delay={0.55}>
              the next
            </AnimatedWord>{" "}
            <span className="relative inline-block">
              <AnimatedWord className="duotone-text" delay={0.85}>
                wardrobe
              </AnimatedWord>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 -bottom-1 md:-bottom-2 h-[3px] duotone rounded-full origin-left"
              />
            </span>
            <span className="text-babe-pink-deep">.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-8 max-w-xl text-graphite text-lg leading-relaxed font-light"
          >
            A Bangkok-based creative pairing an editorial eye with AI-native tools —
            drafting collections, generating campaign imagery, and shipping
            product for European and US online storefronts.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.06, delayChildren: 1.25 },
              },
            }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {chips.map((c, i) => (
              <motion.span
                key={c}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -3 }}
                className={`text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border cursor-default transition-colors ${
                  i % 2 === 0
                    ? "border-babe-blue-deep/40 bg-babe-blue-soft/60 text-babe-blue-deep hover:bg-babe-blue"
                    : "border-babe-pink-deep/40 bg-babe-pink-soft/60 text-babe-pink-deep hover:bg-babe-pink"
                }`}
              >
                {c}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#lookbook"
              className="group inline-flex items-center gap-3 bg-babe-pink text-ink px-6 py-3.5 rounded-full text-sm font-medium hover:bg-babe-pink-deep hover:text-white transition-colors shadow-sm"
            >
              View the Lookbook
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={asset("assets/mhue-cv.pdf")}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border-2 border-babe-blue-deep text-babe-blue-deep hover:bg-babe-blue hover:text-ink transition-colors"
            >
              Download CV
            </a>
            <div className="hidden md:flex items-center gap-4 pl-4 ml-2 border-l border-line text-sm text-graphite">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> Bangkok
              </span>
              <a
                href="mailto:mhuehayman.niko@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-babe-pink-deep transition-colors"
              >
                <Mail size={14} /> mhuehayman.niko
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D signature look deck */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 relative"
        >
          <motion.div style={{ x: t1x, y: t1y }}>
            <LookDeck />
          </motion.div>
        </motion.div>
      </div>

      {/* stat rail */}
      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 relative">
        <span className="absolute top-0 left-0 right-0 h-[2px] duotone rounded-full" />
        {STATS.map((s) => (
          <StatCell key={s.v} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
