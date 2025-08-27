import LOGO from "/assets/mhue-logo.svg";
const Footer = () => {
  return (
    <footer className="grid place-content-center p-5 inset-shadow-xs z-10 bg-white">
      <img src={LOGO} alt="mhue's logo" className="w-24 h-auto mb-2" />
      <p className="text-babe-pink">Mhue's Portfolio</p>
    </footer>
  );
};

export default Footer;
