import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const RevealTop = ({ children }: { children: React.ReactNode }) => {
  const mainControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // console.log("Element is in view: ", isInView);
    if (inView) {
      mainControls.start({ y: 0, opacity: 1 });
    }
  }, [inView, mainControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={mainControls}
      transition={{ duration: 1.85, delay: 0.23 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
