import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const greetings = [
  "Namaste",
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "こんにちは",
  "안녕하세요",
  "Hallo",
];

const IntroAnimation = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("greeting"); // greeting -> name -> done
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(intervalRef.current);
          setPhase("name");
          setTimeout(() => {
            setPhase("done");
            setTimeout(() => onComplete && onComplete(), 2000);
          }, 1800);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);

    return () => clearInterval(intervalRef.current);
  }, []);

  const showGreeting = phase === "greeting";
  const showName = phase === "name";
  const showDone = phase === "done";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-[#0a0b0c]"
      initial={{ opacity: 1 }}
      animate={{ opacity: showDone ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {}}
    >
      {/* Dots indicator */}
      <div className="flex items-center gap-1.5 mb-12">
        {greetings.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500 ${
              i === index
                ? "w-6 h-1.5 bg-[#f7f8f8]"
                : i < index
                ? "w-1.5 h-1.5 bg-[#62666d]"
                : "w-1.5 h-1.5 bg-[#2a2d32]"
            }`}
          />
        ))}
      </div>

      {/* Greeting text */}
      <AnimatePresence mode="wait">
        {showGreeting && (
          <motion.div
            key={`greeting-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f7f8f8] tracking-wide">
              {greetings[index]}
              <span className="inline-block w-0.5 h-8 md:h-12 lg:h-14 ml-1 bg-[#f7f8f8] animate-pulse" />
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final name reveal */}
      {showName && (
        <motion.div
          key="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f7f8f8] tracking-wide mb-3">
            I'm Anmol Pandey
          </p>
          <p className="text-lg md:text-xl text-[#62666d] font-light tracking-wider">
            AI Engineer & Builder
          </p>
        </motion.div>
      )}

      {/* Fade to nothing */}
      {showDone && (
        <motion.div
          key="done"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-[#62666d] font-light tracking-wider">
            Welcome. Scroll to explore ↓
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IntroAnimation;
