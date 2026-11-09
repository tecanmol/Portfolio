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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card container */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          block relative rounded-2xl
          border border-[rgba(255,255,255,0.06)]
          transition-all duration-300
          hover:border-[rgba(255,255,255,0.12)]
          overflow-hidden
          ${gradient}
        `}
      >
        {/* Full-bleed background image */}
        {image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover
                transition-transform duration-500 group-hover:scale-105
                opacity-40 group-hover:opacity-50"
            />
          </div>
        )}

        {/* Dark overlay — gradient from top-left to bottom-right */}
        <div className="absolute inset-0 z-[1]
          bg-gradient-to-br from-[#0a0b0c]/90 via-[#0a0b0c]/70 to-[#0a0b0c]/50
          group-hover:from-[#0a0b0c]/85 group-hover:via-[#0a0b0c]/60"
        />

        {/* Content */}
        <div className="relative z-[2] p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full min-h-[280px]">
          {/* Top section: index + category + title */}
          <div>
            {/* Meta */}
            <div className="flex items-center gap-3 mb-3 text-[#62666d] text-xs font-mono tracking-wider">
              <span>{index}</span>
              <span className="w-1 h-1 rounded-full bg-[#62666d]" />
              <span className="text-[#8a8f98] uppercase tracking-widest text-[10px]">{category}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7f8f8] mb-3 tracking-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[#9a9ea6] text-sm md:text-base leading-relaxed max-w-xl mb-5">
              {description}
            </p>
          </div>

          {/* Bottom section: tech tags + github */}
          <div className="flex items-end justify-between gap-4 flex-wrap">
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {tech.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded-md
                    bg-[rgba(255,255,255,0.06)]
                    text-[#9a9ea6]
                    border border-[rgba(255,255,255,0.08)]
                    font-mono
                    backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <div className="flex items-center gap-2 text-[#62666d] group-hover:text-[#d0d6e0] transition-colors">
              <Github size={16} />
              <span className="text-xs font-medium hidden md:inline">View on GitHub</span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectBlock;
