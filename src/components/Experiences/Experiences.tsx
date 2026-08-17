import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Row = {
  years: string;
  role: string;
  org: string;
  location: string;
  bullets: string[];
};

const roles: Row[] = [
  {
    years: "2023 — 24",
    role: "Student Service Officer",
    org: "Edulink Myanmar",
    location: "Yangon",
    bullets: [
      "Managed enrollment operations, entering and reconciling student records with precision.",
      "Coordinated between departments to keep applications and communications moving.",
      "Handled customer questions and escalations calmly and professionally.",
      "Supported the team on specialist tasks — practice in wearing several hats at once.",
    ],
  },
  {
    years: "2021 — 22",
    role: "Assistant Teacher",
    org: "NELC School",
    location: "Yangon",
    bullets: [
      "Cared for a class of young students — safety, learning and daily routine.",
      "Kept parents informed and aligned on each child's progress.",
      "Taught bilingual language skills (English & Myanmar).",
      "Organised weekly activities that kept engagement — and mood — high.",
    ],
  },
];

const education = [
  {
    years: "Degree",
    title: "Bachelor of Arts — International Relations",
    place: "Dagon University, Myanmar",
  },
  {
    years: "Diploma",
    title: "Professional Diploma in Management & Administration",
    place: "WEBS University",
  },
];

const Experiences = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">Track Record / N° 005</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-ink">
            <span className="text-babe-blue-deep">Experience</span>,
            <br />
            translated for <em className="font-light text-babe-pink-deep">fashion</em>.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex items-end">
          <p className="text-graphite text-lg font-light leading-relaxed">
            Education and student services taught me operations, care and
            calm — three transferable habits that quietly run every good
            atelier and every good online storefront.
          </p>
        </div>
      </div>

      {/* Experience list */}
      <div ref={ref} className="space-y-0">
        {roles.map((r, i) => (
          <motion.div
            key={r.role}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 border-t border-line transition-colors ${
              i % 2 === 0
                ? "hover:bg-babe-blue-soft/30"
                : "hover:bg-babe-pink-soft/30"
            }`}
          >
            <div className="md:col-span-2 eyebrow">{r.years}</div>
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                {r.role}
              </h3>
              <p className="mt-1 text-graphite">
                {r.org} <span className="text-ash">· {r.location}</span>
              </p>
            </div>
            <ul className="md:col-span-6 space-y-2 text-graphite text-[15px] leading-relaxed">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full duotone shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        <div className="border-t border-line" />
      </div>

      {/* Education */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">Education</p>
          <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            Formal training,
            <br />
            <em className="font-light">informal</em> curiosity.
          </h3>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6">
          {education.map((e) => (
            <div key={e.title} className="border-t border-line pt-4">
              <span className="eyebrow">{e.years}</span>
              <h4 className="font-display text-xl md:text-2xl text-ink mt-2 leading-tight">
                {e.title}
              </h4>
              <p className="text-graphite mt-1">{e.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
