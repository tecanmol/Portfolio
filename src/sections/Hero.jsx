import HeroChat from "../components/HeroChat";
import HeroText from "../components/HeroText";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <HeroText />
        <HeroChat />
      </div>
    </section>
  );
};

export default Hero;
