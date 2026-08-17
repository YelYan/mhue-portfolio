import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const clusters = [
  {
    tag: "Creative",
    heading: "AI-native design",
    items: [
      "AI fashion design & moodboarding",
      "Prompt engineering for image generation",
      "Editorial art direction & styling",
      "Colour, silhouette & fabric sense",
      "Rapid concept-to-campaign iteration",
    ],
  },
  {
    tag: "Commerce",
    heading: "Fashion product & sales",
    items: [
      "Fashion product development",
      "Working with factories & suppliers",
      "European & US online marketplaces",
      "Listing operations & merchandising",
      "International e-commerce fluency",
    ],
  },
  {
    tag: "Foundations",
    heading: "Operations & communication",
    items: [
      "Bilingual — English & Myanmar",
      "Cross-functional communication",
      "Data entry & record management",
      "Microsoft Office suite",
      "Problem-solving & multitasking",
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">Capabilities / N° 003</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-ink">
            A toolkit for
            <br />
            <em className="font-light">modern</em> fashion houses.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex items-end">
          <p className="text-graphite text-lg font-light leading-relaxed">
            Attitude and aesthetic sense come first. The tooling is learned —
            the taste is the moat. Below, the layers I'm currently bringing to
            an AI fashion studio.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-sm overflow-hidden"
      >
        {clusters.map((c, i) => (
          <motion.div
            key={c.tag}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-bone p-8 md:p-10 hover:bg-cream transition-colors duration-500"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="eyebrow">{c.tag}</span>
              <span className="font-mono text-xs text-ash">
                0{i + 1} / 03
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-6">
              {c.heading}
            </h3>
            <ul className="space-y-3">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-graphite text-[15px] leading-relaxed"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-babe-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
