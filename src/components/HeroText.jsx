import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const words = ["Full-Stack", "AI-Driven", "Scalable", "Intelligent"];

const HeroText = () => {
  return (
    <motion.div
      className="space-y-6 md:space-y-8 mb-12"
      initial="hidden"
      animate="visible"
    >
      {/* Greeting */}
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[#8a8f98] text-sm md:text-base font-medium tracking-wide"
      >
        Hi, I'm Anmol Pandey
      </motion.p>

      {/* Main headline */}
      <div className="space-y-3">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-5xl font-semibold text-[#f7f8f8] leading-tight"
        >
          A developer dedicated to crafting
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <FlipWords words={words} className="bg-gradient-to-r from-[#7170ff] to-[#ca2f8c] bg-clip-text text-transparent" />
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl md:text-5xl font-semibold text-[#f7f8f8] leading-tight"
        >
          systems.
        </motion.p>
      </div>

      {/* Subtitle */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="text-[#8a8f98] text-base md:text-lg max-w-xl leading-relaxed"
      >
        Final-year AI & ML engineering student from Mumbai, building
        intelligent systems — from LLM-powered tools to offline healthcare AI.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex flex-wrap gap-3 pt-2"
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-2.5 rounded-full text-sm font-medium
            bg-[#7170ff] text-white
            hover:bg-[#828fff]
            transition-colors duration-200"
        >
          View Projects
        </a>
        <a
          href="https://github.com/tecanmol"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full text-sm font-medium
            border border-[rgba(255,255,255,0.08)]
            text-[#d0d6e0]
            hover:bg-white/5
            transition-colors duration-200"
        >
          GitHub →
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
