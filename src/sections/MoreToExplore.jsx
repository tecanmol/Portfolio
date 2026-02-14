import { BookOpen, Trophy, Link as LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "CV",
    description: "View My CV",
    color: "text-purple-400",
    borderGlow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]",
    icon: <BookOpen size={28} />,
    link: "https://drive.google.com/file/d/1A_esucjJ-sMXq7xQav312L8vDPpyrRnD/view?usp=sharing",
    external: true,
  },
  {
    title: "My Links",
    description: "Find me across the web and social platforms",
    color: "text-blue-400",
    borderGlow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]",
    icon: <LinkIcon size={28} />,
    link: "/links",
    external: false,
  },
];

const MoreToExplore = () => {
  return (
    <section className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          More to{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Explore
          </span>
        </h2>

        <p className="mt-6 text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
          Check out these additional resources and connect with me
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {card.external ? (
              /* ===== External Link (CV) ===== */
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative block rounded-3xl
                  p-10
                  border border-white/10
                  backdrop-blur-xl
                  bg-white/5
                  transition-all duration-500
                  hover:-translate-y-3
                  ${card.borderGlow}
                `}
              >
                <CardContent card={card} />
              </a>
            ) : (
              /* ===== Internal Link (React Router) ===== */
              <Link
                to={card.link}
                className={`
                  group relative block rounded-3xl
                  p-10
                  border border-white/10
                  backdrop-blur-xl
                  bg-white/5
                  transition-all duration-500
                  hover:-translate-y-3
                  ${card.borderGlow}
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
    <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 group-hover:scale-110 transition duration-300">
      <div className={card.color}>
        {card.icon}
      </div>
    </div>

    {/* Title */}
    <h3 className={`text-2xl font-bold mb-4 ${card.color}`}>
      {card.title}
    </h3>

    {/* Description */}
    <p className="text-neutral-400 mb-6">
      {card.description}
    </p>

    {/* Explore Arrow */}
    <div className={`inline-flex items-center gap-2 font-medium ${card.color}`}>
      <span>Explore</span>
      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>
  </>
);

export default MoreToExplore;
