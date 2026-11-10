import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "motion/react";

export default function HorizontalScroll({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] md:h-[400vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div
          className="flex gap-6 md:gap-8 px-6 md:px-12 will-change-transform"
          style={{ x }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
