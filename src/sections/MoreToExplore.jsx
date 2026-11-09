import { BookOpen, Github, Globe, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Resume / CV",
    description: "Download my full resume with detailed project history and skills.",
    icon: <BookOpen size={24} />,
    link: "https://drive.google.com/file/d/1A_esucjJ-sMXq7xQav312L8vDPpyrRnD/view?usp=sharing",
    external: true,
    accent: "from-[#7170ff]/20 to-[#7170ff]/5",
  },
  {
    title: "GitHub",
    description: "40+ open-source projects and contributions across AI, full-stack, and tools.",
    icon: <Github size={24} />,
    link: "https://github.com/tecanmol",
    external: true,
    accent: "from-[#f7f8f8]/10 to-transparent",
  },
  {
    title: "LinkedIn",
    description: "Professional profile, recommendations, and updates.",
    icon: <Linkedin size={24} />,
    link: "https://www.linkedin.com/in/anmol-pandey-6323b220a/",
    external: true,
    accent: "from-blue-500/20 to-transparent",
  },
  {
    title: "Portfolio Links",
    description: "All my socials, projects, and resources in one place.",
    icon: <Globe size={24} />,
    link: "/links",
    external: false,
    accent: "from-[#ca2f8c]/20 to-transparent",
  },
];

const MoreToExplore = () => {
  return (
    <section id="other" className="relative py-24 md:py-32 px-6 md:px-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#f7f8f8] leading-tight">
          More{" "}
          <span className="bg-gradient-to-r from-[#7170ff] to-[#ca2f8c] bg-clip-text text-transparent">
            to Explore
          </span>
        </h2>
        <p className="mt-3 text-[#8a8f98] text-base md:text-lg max-w-lg">
          My resume, profiles, and extended portfolio.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            {card.external ? (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative block rounded-2xl
                  p-6 md:p-7
                  border border-[rgba(255,255,255,0.06)]
                  bg-[#0f1011]/60 backdrop-blur-sm
                  bg-gradient-to-br ${card.accent}
                  transition-all duration-300
                  hover:border-[rgba(255,255,255,0.1)]
                  hover:bg-[#0f1011]/80
                `}
              >
                <CardContent card={card} />
              </a>
            ) : (
              <Link
                to={card.link}
                className={`
                  group relative block rounded-2xl
                  p-6 md:p-7
                  border border-[rgba(255,255,255,0.06)]
                  bg-[#0f1011]/60 backdrop-blur-sm
                  bg-gradient-to-br ${card.accent}
                  transition-all duration-300
                  hover:border-[rgba(255,255,255,0.1)]
                  hover:bg-[#0f1011]/80
                `}
              >
                <CardContent card={card} />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ===== Reusable Card Content ===== */
const CardContent = ({ card }) => (
  <>
    {/* Icon */}
    <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-xl
      bg-[rgba(255,255,255,0.04)]
      border border-[rgba(255,255,255,0.06)]
      text-[#d0d6e0]
      group-hover:bg-[rgba(255,255,255,0.06)]
      transition-colors duration-200">
      {card.icon}
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold text-[#f7f8f8] mb-1.5 tracking-tight">
      {card.title}
    </h3>

    {/* Description */}
    <p className="text-[#8a8f98] text-sm leading-relaxed mb-4">
      {card.description}
    </p>

    {/* Arrow */}
    <div className="flex items-center gap-2 text-[#8a8f98] text-xs font-medium
      group-hover:text-[#d0d6e0] transition-colors">
      <span>Explore</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </div>
  </>
);

export default MoreToExplore;
