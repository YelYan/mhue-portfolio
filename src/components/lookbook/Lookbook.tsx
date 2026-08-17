import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\/+/, "")}`;

type Look = {
  n: string;
  title: string;
  concept: string;
  palette: string;
  category: string;
  img: string;
  span?: "tall" | "short";
};

const looks: Look[] = [
  {
    n: "01",
    title: "Bone Tailoring",
    concept: "Oversized wool jacket, wide trouser, quiet luxury.",
    palette: "Cream · Bone · Pearl",
    category: "Ready-to-Wear",
    img: asset("assets/lookbook/01-minimal-cream.jpg"),
    span: "tall",
  },
  {
    n: "02",
    title: "Concrete Study",
    concept: "Graphic knit and cargo — streetwear with an editorial spine.",
    palette: "Ash · Slate · Bone",
    category: "Streetwear",
    img: asset("assets/lookbook/02-streetwear-tokyo.jpg"),
    span: "short",
  },
  {
    n: "03",
    title: "Champagne Hour",
    concept: "Bias silk slip, cowl neckline, warm golden light.",
    palette: "Champagne · Amber",
    category: "Evening",
    img: asset("assets/lookbook/03-evening-silk.jpg"),
    span: "tall",
  },
  {
    n: "04",
    title: "Sculpture N°04",
    concept: "Architectural draping, one exaggerated sleeve, museum air.",
    palette: "Ivory · Sand",
    category: "Avant-Garde",
    img: asset("assets/lookbook/04-avantgarde-ivory.jpg"),
    span: "short",
  },
  {
    n: "05",
    title: "Soft Bloom",
    concept: "Pearl-buttoned blush blouse, pleated ivory, sunlit linen.",
    palette: "Blush · Pearl",
    category: "Romantic",
    img: asset("assets/lookbook/05-romantic-blush.jpg"),
    span: "short",
  },
  {
    n: "06",
    title: "Gallery Coat",
    concept: "Double-breasted charcoal wool, sharp trouser, parquet floor.",
    palette: "Charcoal · Ink",
    category: "Tailoring",
    img: asset("assets/lookbook/06-tailoring-charcoal.jpg"),
    span: "tall",
  },
];

const Lookbook = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="lookbook" className="py-24 md:py-32 border-t border-line">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
        <div>
          <p className="eyebrow mb-4">Lookbook / N° 004</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] text-ink">
            <span className="text-babe-blue-deep">AI-generated</span>
            <br />
            <em className="font-light">collection</em>{" "}
            <span className="duotone-text">— SS26</span>.
          </h2>
        </div>
        <p className="max-w-md text-graphite text-lg font-light leading-relaxed">
          Six looks moving from bone tailoring to silk evening to sculptural
          gowns — each conceived, styled and generated with a modern AI image
          workflow.
        </p>
      </div>

      {/* Running marquee strip */}
      <div className="relative overflow-hidden py-4 mb-12 md:mb-16 duotone">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {[
                "SS · 26",
                "AI Fashion",
                "Baby Blue & Baby Pink",
                "Editorial",
                "EU / US Storefront",
                "Prompt · Style · Ship",
                "N° 004 Lookbook",
              ].map((w) => (
                <span
                  key={w + k}
                  className="mx-6 font-display text-3xl md:text-4xl text-ink"
                >
                  {w} <span className="text-white mx-3">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16"
      >
        {looks.map((l, i) => (
          <motion.article
            key={l.n}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: (i % 3) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`look-card group ${
              i % 3 === 1 ? "lg:mt-16" : ""
            }`}
          >
            <TiltCard
              max={7}
              cursorLabel="View · SS26"
              className="mb-4"
            >
              <div className="relative overflow-hidden bg-cream rounded-sm aspect-[3/4] ring-1 ring-white/60 shadow-[0_18px_45px_-25px_rgba(28,26,43,0.35)]">
                <img
                  src={l.img}
                  alt={`Look ${l.n} — ${l.title}`}
                  className="look-img w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Corner tint that pulses on hover */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    i % 2 === 0
                      ? "bg-gradient-to-tr from-babe-blue/25 via-transparent to-transparent"
                      : "bg-gradient-to-tr from-babe-pink/25 via-transparent to-transparent"
                  }`}
                />
                <div className="absolute top-3 left-3 right-3 flex justify-between eyebrow text-white/95 mix-blend-difference">
                  <span>Look {l.n}</span>
                  <span>{l.category}</span>
                </div>
              </div>
            </TiltCard>

            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl md:text-[28px] leading-tight text-ink transition-colors duration-300 group-hover:text-babe-pink-deep">
                {l.title}
              </h3>
              <ArrowUpRight
                size={20}
                className="text-ash transition-all duration-300 group-hover:text-babe-blue-deep group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <p className="mt-2 text-graphite text-[15px] leading-relaxed">
              {l.concept}
            </p>
            <p className="mt-3 eyebrow">{l.palette}</p>
          </motion.article>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-line pt-8">
        <p className="text-graphite font-light">
          <span className="eyebrow block mb-2">Note</span>
          Every look was generated with an open-source image model, directed by
          prompt and mood. Ready to iterate for a specific brief, brand or
          season.
        </p>
        <div className="md:text-right">
          <a
            href="mailto:mhuehayman.niko@gmail.com"
            className="inline-flex items-center gap-2 text-babe-pink-deep font-medium hover:text-babe-blue-deep transition-colors"
          >
            Commission a bespoke lookbook
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
