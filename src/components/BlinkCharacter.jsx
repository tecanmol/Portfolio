import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlinkCharacter = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  const randomTime = () => Math.random() * 4000 + 2000;

  useEffect(() => {
    let timeout;

    const triggerBlink = () => {
      setIsBlinking(true);

      setTimeout(() => {
        setIsBlinking(false);
      }, 120);

      timeout = setTimeout(triggerBlink, randomTime());
    };

    timeout = setTimeout(triggerBlink, randomTime());

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-full">

      {/* ===== DESKTOP IMAGES ===== */}
      <motion.img
        src="assets/open.png"
        alt="open desktop"
        className="hidden md:block absolute right-0 top-0 h-full w-auto object-contain"
        animate={{ opacity: isBlinking ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      <motion.img
        src="assets/blink.png"
        alt="blink desktop"
        className="hidden md:block absolute right-0 top-0 h-full w-auto object-contain"
        animate={{ opacity: isBlinking ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />

      {/* ===== MOBILE IMAGES ===== */}
      <motion.img
        src="assets/open-mobile.png"
        alt="open mobile"
        className="md:hidden absolute right-0 top-0 h-full w-auto object-contain"
        animate={{ opacity: isBlinking ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      <motion.img
        src="assets/blink-mobile.png"
        alt="blink mobile"
        className="md:hidden absolute right-0 top-0 h-full w-auto object-contain"
        animate={{ opacity: isBlinking ? 1 : 0 }}
        transition={{ duration: 0.12 }}
        whileHover={{scale:1.05}}
      />
    </div>
  );
};

export default BlinkCharacter;
