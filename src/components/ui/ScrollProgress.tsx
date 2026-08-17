import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #a2cffe 0%, #cfe4fd 35%, #f4c2c2 65%, #e59292 100%)",
      }}
    />
  );
};

export default ScrollProgress;
