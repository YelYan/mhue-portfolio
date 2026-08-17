import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="relative text-ink mt-20"
      style={{
        background:
          "linear-gradient(135deg, #cfe4fd 0%, #fbeaea 55%, #fadede 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Contact / N° 006</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink">
              Let's design
              <br />
              <em className="font-light text-babe-pink-deep">
                the next collection
              </em>
              .
            </h2>

            <a
              href="mailto:mhuehayman.niko@gmail.com"
              className="mt-10 group inline-flex items-center gap-3 text-2xl md:text-3xl font-display text-ink hover:text-babe-blue-deep transition-colors"
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
              <p className="eyebrow mb-3">Direct</p>
              <ul className="space-y-3 text-ink/80">
                <li className="flex items-center gap-3">
                  <span className="grid place-content-center w-7 h-7 rounded-full bg-white/70">
                    <Mail size={14} className="text-babe-blue-deep" />
                  </span>
                  <a
                    href="mailto:mhuehayman.niko@gmail.com"
                    className="hover:text-babe-blue-deep transition-colors"
                  >
                    mhuehayman.niko@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid place-content-center w-7 h-7 rounded-full bg-white/70">
                    <Phone size={14} className="text-babe-pink-deep" />
                  </span>
                  <a
                    href="tel:+66943940476"
                    className="hover:text-babe-pink-deep transition-colors"
                  >
                    +66 94 394 0476
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid place-content-center w-7 h-7 rounded-full bg-white/70">
                    <MapPin size={14} className="text-babe-blue-deep" />
                  </span>
                  <span>Bangkok, Thailand</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="grid grid-cols-2 gap-2 text-ink/80">
                <li>
                  <a
                    href="#lookbook"
                    className="hover:text-babe-pink-deep transition-colors"
                  >
                    Lookbook
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-babe-blue-deep transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-babe-pink-deep transition-colors"
                  >
                    Capabilities
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-babe-blue-deep transition-colors"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl text-ink">Mhue</span>
            <span className="eyebrow">AI Fashion · Bangkok</span>
          </div>
          <p className="text-xs text-ink/50 font-mono uppercase tracking-widest">
            © {year} Mhue Hayman — All looks generated
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
