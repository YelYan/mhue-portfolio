import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="relative bg-ink text-bone mt-20 border-t border-ink/10"
    >
      <div className="container mx-auto px-4 md:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4" style={{ color: "#8a857e" }}>
              Contact / N° 006
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone">
              Let's design
              <br />
              <em className="font-light text-babe-pink-soft">
                the next collection
              </em>
              .
            </h2>

            <a
              href="mailto:mhuehayman.niko@gmail.com"
              className="mt-10 group inline-flex items-center gap-3 text-2xl md:text-3xl font-display text-bone hover:text-babe-pink-soft transition-colors"
            >
              mhuehayman.niko@gmail.com
              <ArrowUpRight
                size={26}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="eyebrow mb-3" style={{ color: "#8a857e" }}>
                Direct
              </p>
              <ul className="space-y-3 text-bone/90">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-babe-pink-soft" />
                  <a
                    href="mailto:mhuehayman.niko@gmail.com"
                    className="hover:text-babe-pink-soft transition-colors"
                  >
                    mhuehayman.niko@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-babe-pink-soft" />
                  <a
                    href="tel:+66943940476"
                    className="hover:text-babe-pink-soft transition-colors"
                  >
                    +66 94 394 0476
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-babe-pink-soft" />
                  <span>Bangkok, Thailand</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-3" style={{ color: "#8a857e" }}>
                Elsewhere
              </p>
              <ul className="grid grid-cols-2 gap-2 text-bone/90">
                <li>
                  <a href="#lookbook" className="hover:text-babe-pink-soft transition-colors">
                    Lookbook
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-babe-pink-soft transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-babe-pink-soft transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-babe-pink-soft transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display italic text-2xl text-bone">Mhue</span>
            <span className="eyebrow" style={{ color: "#8a857e" }}>
              AI Fashion · Bangkok
            </span>
          </div>
          <p className="text-xs text-bone/50 font-mono uppercase tracking-widest">
            © {year} Mhue Hayman — All looks generated
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
