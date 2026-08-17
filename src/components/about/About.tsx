import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import CvLetter from "/assets/mhue-cv-letter.pdf";

const philosophy = [
  {
    n: "01",
    k: "Aesthetic first",
    v: "A trained eye for silhouette, palette and proportion — from muted editorial to soft feminine.",
  },
  {
    n: "02",
    k: "AI-native workflow",
    v: "Generative image tools, prompt engineering and rapid iteration for concept-to-campaign in a day.",
  },
  {
    n: "03",
    k: "Built for commerce",
    v: "Product thinking for European and US online marketplaces — from brief to listing.",
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">About / N° 002</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-ink">
            An <em className="font-light">adaptable</em> creative,
            wired for <span className="text-babe-accent">new tools</span>.
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 md:col-start-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-graphite font-light">
            I'm Mhue Hayman — a Bangkok-based professional with a background in
            international relations, education and student services. What I bring
            to fashion is a strong sense of aesthetic, an appetite for learning
            new tools, and the discipline to see a product from concept through
            to a live listing on a European or US marketplace.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-graphite font-light">
            The looks in this portfolio were built with AI image generation and
            an editorial art-direction eye — proof that great taste and modern
            tooling can move faster than the studio playbook we inherited.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <div key={p.n} className="border-t border-line pt-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-xs text-ash">— {p.n}</span>
                </div>
                <h3 className="font-display text-xl text-ink mb-1.5">{p.k}</h3>
                <p className="text-sm text-graphite leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>

          <a
            href={CvLetter}
            download
            className="mt-10 group inline-flex items-center gap-2 text-ink hover:text-babe-accent transition-colors font-medium"
          >
            Download cover letter
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
