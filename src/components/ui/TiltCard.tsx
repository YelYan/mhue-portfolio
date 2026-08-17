import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  max?: number;
  className?: string;
  cursorLabel?: string;
};

/**
 * 3D tilt on mouse — subtle, editorial. Also tracks cursor position
 * so children can render a magnetic label at (mx, my) via CSS variables.
 */
const TiltCard = ({ children, max = 6, className = "", cursorLabel }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("");
  const [cursor, setCursor] = useState({ x: 50, y: 50, visible: false });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    setTransform(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`);
    setCursor({ x: px * 100, y: py * 100, visible: true });
  };

  const onLeave = () => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");
    setCursor((c) => ({ ...c, visible: false }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform,
        transition: "transform 250ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`relative ${className}`}
    >
      {children}
      {cursorLabel && (
        <span
          aria-hidden
          className={`pointer-events-none absolute z-10 select-none rounded-full bg-ink text-bone px-3 py-1 text-[0.62rem] font-mono uppercase tracking-[0.22em] transition-opacity duration-300 ${
            cursor.visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {cursorLabel}
        </span>
      )}
    </motion.div>
  );
};

export default TiltCard;
