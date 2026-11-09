import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

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

const INTRO_DURATION = 1400;

const IntroAnimation = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);
  const hasInteracted = useRef(false);

  const handleSkip = () => {
    if (hasInteracted.current) return;
    hasInteracted.current = true;
    clearInterval(intervalRef.current);
    setDone(true);
    setTimeout(() => onComplete && onComplete(), 1000);
  };

  useEffect(() => {
    const totalGreetTime = greetings.length * INTRO_DURATION;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            setDone(true);
            setTimeout(() => {
              onComplete && onComplete();
            }, 1500);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, INTRO_DURATION);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opacity = done ? 0 : 1;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0b0c] cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onClick={handleSkip}
    >
      {/* Dots indicator */}
      <div className="flex items-center gap-1.5 mb-16">
        {greetings.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-400 ${
              i === index
                ? "w-8 h-1.5 bg-[#f7f8f8]"
                : i < index
                ? "w-1.5 h-1.5 bg-[#62666d]"
                : "w-1.5 h-1.5 bg-[#2a2d32]"
            }`}
          />
        ))}
      </div>

      {/* Greeting text */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <p className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f7f8f8] tracking-wide">
          {greetings[index]}
          <span className="inline-block w-0.5 h-10 md:h-14 lg:h-16 ml-1 bg-[#f7f8f8]" />
        </p>
      </motion.div>

      {/* Done state */}
      {done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-16 text-center"
        >
          <p className="text-lg md:text-xl text-[#62666d] font-light tracking-wide">
            Welcome. Scroll to explore ↓
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IntroAnimation;
