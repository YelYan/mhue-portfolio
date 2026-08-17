import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\/+/, "")}`;

type Deck = {
  n: string;
  title: string;
  meta: string;
  palette: string;
  img: string;
};

const LOOKS: Deck[] = [
  {
    n: "01",
    title: "Bone Tailoring",
    meta: "Ready-to-Wear · SS26",
    palette: "Cream · Bone · Pearl",
    img: asset("assets/lookbook/01-minimal-cream.jpg"),
  },
  {
    n: "03",
    title: "Champagne Hour",
    meta: "Evening · SS26",
    palette: "Champagne · Amber",
    img: asset("assets/lookbook/03-evening-silk.jpg"),
  },
  {
    n: "06",
    title: "Gallery Coat",
    meta: "Tailoring · SS26",
    palette: "Charcoal · Ink",
    img: asset("assets/lookbook/06-tailoring-charcoal.jpg"),
  },
  {
    n: "05",
    title: "Soft Bloom",
    meta: "Romantic · SS26",
    palette: "Blush · Pearl",
    img: asset("assets/lookbook/05-romantic-blush.jpg"),
  },
];

const CYCLE_MS = 4500;

const LookDeck = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % LOOKS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused]);

  // 3D tilt following mouse
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 90, damping: 18 });
  const sy = useSpring(ry, { stiffness: 90, damping: 18 });
  const rotateX = useTransform(sy, (v) => v * -8);
  const rotateY = useTransform(sx, (v) => v * 12);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rx.set((e.clientX - r.left) / r.width - 0.5);
    ry.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const advance = () => setActive((a) => (a + 1) % LOOKS.length);

  return (
    <div className="relative select-none">
      {/* Ambient duotone halo behind the deck */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 30%, rgba(162,207,254,0.55), transparent 70%), radial-gradient(60% 60% at 75% 75%, rgba(244,194,194,0.55), transparent 70%)",
        }}
      />

      <div
        ref={stageRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={() => setPaused(true)}
        className="relative"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[3/4] w-full"
        >
          {LOOKS.map((l, i) => {
            const offset = (i - active + LOOKS.length) % LOOKS.length;
            // Distribute: 0 = front, 1 = back-right, 2 = back-left, 3+ hidden behind
            const layouts = [
              // Front
              {
                x: 0,
                y: 0,
                z: 0,
                rY: 0,
                rZ: 0,
                scale: 1,
                opacity: 1,
                blur: 0,
              },
              // Behind right
              {
                x: 38,
                y: 18,
                z: -160,
                rY: -22,
                rZ: 3,
                scale: 0.92,
                opacity: 0.9,
                blur: 0.6,
              },
              // Behind left
              {
                x: -34,
                y: 28,
                z: -260,
                rY: 24,
                rZ: -3,
                scale: 0.84,
                opacity: 0.7,
                blur: 1.4,
              },
              // Deeper background
              {
                x: 8,
                y: 40,
                z: -360,
                rY: 6,
                rZ: 0,
                scale: 0.76,
                opacity: 0.35,
                blur: 2.4,
              },
            ];
            const s = layouts[Math.min(offset, layouts.length - 1)];
            return (
              <motion.div
                key={l.n}
                animate={{
                  x: `${s.x}%`,
                  y: `${s.y}%`,
                  z: s.z,
                  rotateY: s.rY,
                  rotateZ: s.rZ,
                  scale: s.scale,
                  opacity: s.opacity,
                  filter: `blur(${s.blur}px)`,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 rounded-sm overflow-hidden bg-cream ring-1 ring-white shadow-[0_30px_60px_-30px_rgba(28,26,43,0.55)]"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: LOOKS.length - offset,
                  transformOrigin: "50% 60%",
                }}
              >
                <img
                  src={l.img}
                  alt={`Look ${l.n} — ${l.title}`}
                  className="w-full h-full object-cover"
                  loading={offset === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
                {/* Gradient wash on non-front cards to add depth */}
                {offset > 0 && (
                  <span
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(28,26,43,0.05) 0%, rgba(28,26,43,0.35) 100%)",
                    }}
                  />
                )}
                {/* Metadata bar — only on front card */}
                {offset === 0 && (
                  <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="absolute inset-x-3 bottom-3 flex items-end justify-between text-white"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div>
                      <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-white/80">
                        Look {l.n} · {l.meta}
                      </p>
                      <p className="font-display text-xl md:text-2xl leading-tight">
                        {l.title}
                      </p>
                    </div>
                    <span className="hidden sm:inline font-mono text-[0.62rem] tracking-[0.22em] uppercase text-white/70 backdrop-blur-sm bg-black/25 px-2 py-1 rounded-full">
                      {l.palette}
                    </span>
                  </motion.div>
                )}
                {/* Look-number floating tag on front card */}
                {offset === 0 && (
                  <motion.span
                    initial={{ y: -12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="absolute top-3 left-3 font-mono text-[0.62rem] tracking-[0.22em] uppercase bg-white text-ink px-2 py-1 rounded-full"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    N° {l.n}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Deck controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {LOOKS.map((l, i) => (
            <button
              key={l.n}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              onMouseLeave={() => setPaused(false)}
              aria-label={`Show look ${l.n}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-8 duotone"
                  : "w-3 bg-ink/15 hover:bg-babe-blue-deep"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => {
            advance();
            setPaused(true);
            setTimeout(() => setPaused(false), 2000);
          }}
          className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink hover:text-babe-pink-deep transition-colors"
        >
          Next look
          <span className="grid place-content-center h-7 w-7 rounded-full border border-ink/20 group-hover:border-babe-pink-deep group-hover:bg-babe-pink-soft transition-colors">
            <ChevronRight size={14} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LookDeck;
