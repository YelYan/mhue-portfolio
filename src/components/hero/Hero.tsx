import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const chips = ["AI Fashion Design", "Image Generation", "E-Commerce", "EU / US Markets"];

const Hero = () => {
  return (
    <section id="hero" className="relative pt-10 md:pt-16 pb-20 md:pb-28">
      {/* running eyebrow strip */}
      <div className="flex items-center justify-between eyebrow mb-10 md:mb-14">
        <span>Portfolio / 2026</span>
        <span className="hidden md:inline">Bangkok · Available for hire</span>
        <span>N° 001</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
        {/* Type block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8"
        >
          <p className="eyebrow mb-6">Mhue Hayman &nbsp;/&nbsp; AI Fashion Designer</p>
          <h1 className="font-display text-[15vw] md:text-[9.2vw] leading-[0.9] tracking-tight text-ink">
            Designing
            <br />
            <span className="italic font-light">the next</span>{" "}
            <span className="relative inline-block">
              wardrobe
              <span className="absolute left-0 right-0 -bottom-1 md:-bottom-2 h-[2px] bg-babe-pink" />
            </span>
            .
          </h1>
          <p className="mt-8 max-w-xl text-graphite text-lg leading-relaxed font-light">
            A Bangkok-based creative pairing an editorial eye with AI-native tools —
            drafting collections, generating campaign imagery, and shipping
            product for European and US online storefronts.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border border-ink/15 text-ink/80 bg-bone"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#lookbook"
              className="group inline-flex items-center gap-3 bg-ink text-bone px-6 py-3.5 rounded-full text-sm font-medium hover:bg-graphite transition-colors"
            >
              View the Lookbook
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/assets/mhue-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-ink/20 text-ink hover:bg-ink hover:text-bone transition-colors"
            >
              Download CV
            </a>
            <div className="hidden md:flex items-center gap-4 pl-4 ml-2 border-l border-line text-sm text-graphite">
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Bangkok</span>
              <a href="mailto:mhuehayman.niko@gmail.com" className="inline-flex items-center gap-1.5 hover:text-ink">
                <Mail size={14} /> mhuehayman.niko
              </a>
            </div>
          </div>
        </motion.div>

        {/* Editorial mosaic */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
            <img
              src="/assets/lookbook/01-minimal-cream.jpg"
              alt="Editorial fashion — cream tailoring"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end eyebrow text-white/90 mix-blend-difference">
              <span>Look 01 · Cream</span>
              <span>SS · 26</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
              <img
                src="/assets/lookbook/03-evening-silk.jpg"
                alt="Editorial fashion — silk evening"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
              <img
                src="/assets/lookbook/06-tailoring-charcoal.jpg"
                alt="Editorial fashion — charcoal tailoring"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* stat rail */}
      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-line pt-8">
        {[
          { k: "06", v: "AI-generated looks" },
          { k: "02", v: "Target markets — EU · US" },
          { k: "AI", v: "Design & imagery workflow" },
          { k: "24h", v: "Concept to campaign" },
        ].map((s) => (
          <div key={s.v} className="flex flex-col">
            <span className="font-display text-4xl md:text-5xl text-ink">{s.k}</span>
            <span className="mt-2 eyebrow">{s.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
