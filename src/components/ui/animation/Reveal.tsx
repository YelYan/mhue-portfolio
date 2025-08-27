import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  const mainControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // console.log("Element is in view: ", isInView);
    if (inView) {
      mainControls.start({ x: 0, opacity: 1 });
    }
  }, [inView, mainControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={mainControls}
      transition={{ duration: 1.35, delay: 0.24 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
