import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const initial = direction === "up"
    ? { opacity: 0, y: 40 }
    : direction === "left"
    ? { opacity: 0, x: -40 }
    : direction === "right"
    ? { opacity: 0, x: 40 }
    : { opacity: 0 };

  const animate = isInView ? { opacity: 1, y: 0, x: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
