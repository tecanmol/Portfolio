import { motion } from "motion/react";
import { Github } from "lucide-react";

const ProjectBlock = ({
  index,
  category,
  title,
  description,
  image,
  gradient,
  tech,
  githubLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full"
    >
      {/* Meta Row */}
      <div className="flex items-center gap-6 text-neutral-400 text-xs md:text-sm tracking-widest mb-3">
        <span>{index}</span>
        <span>{category}</span>
      </div>

      {/* Title + Github Button Row */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl md:text-4xl font-bold text-white">
          {title}
        </h3>

        {/* GitHub Button */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            opacity-0 translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all duration-300
          "
        >
          <div
            className="
              flex items-center gap-2
              px-5 py-2
              rounded-full
              text-sm font-medium
              text-white
              bg-gradient-to-r from-purple-500 to-pink-500
              shadow-lg
              hover:scale-105
              transition
            "
          >
            <Github size={16} />
            Star
          </div>
        </a>
      </div>

      {/* Card */}
      <div
        className={`
          relative flex flex-col flex-grow
          rounded-3xl 
          p-6 md:p-10 
          border border-white/10
          backdrop-blur-xl
          bg-white/5
          ${gradient}
          shadow-[0_0_40px_rgba(168,85,247,0.15)]
          transition-all duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
        `}
      >
        {/* Description */}
        <p className="text-base md:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed">
          {description}
        </p>

        {/* Push image down if description is small */}
        <div className="mt-auto">
          {/* Window Bar */}
          <div className="bg-black/40 rounded-t-xl px-4 py-2 flex gap-2 mb-4 w-fit">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-black/30 shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-3 mt-6">
        {tech.map((item, i) => (
          <span
            key={i}
            className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-neutral-300 backdrop-blur-md"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectBlock;
