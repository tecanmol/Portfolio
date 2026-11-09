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
          p-6 md:p-8
          border border-[rgba(255,255,255,0.06)]
          bg-[#0f1011]/60 backdrop-blur-sm
          ${gradient}
          transition-all duration-300
          hover:border-[rgba(255,255,255,0.1)]
          hover:bg-[#0f1011]/80
        `}
      >
        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 text-[#62666d] text-xs font-mono tracking-wider">
          <span>{index}</span>
          <span className="w-1 h-1 rounded-full bg-[#62666d]" />
          <span className="text-[#8a8f98] uppercase tracking-widest text-[10px]">{category}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-[#f7f8f8] mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#8a8f98] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs rounded-md
                bg-[rgba(255,255,255,0.04)]
                text-[#8a8f98]
                border border-[rgba(255,255,255,0.06)]
                font-mono"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom row: image preview + github link */}
        <div className="flex items-center justify-between">
          {/* Project preview */}
          {image && (
            <div className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden
                border border-[rgba(255,255,255,0.06)]
                shadow-sm">
                <img
                  src={image}
                  alt={title}
                  className="w-20 h-14 md:w-24 md:h-16 object-cover
                    transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          )}

          {/* GitHub link */}
          <div className="flex items-center gap-2 text-[#8a8f98] group-hover:text-[#d0d6e0] transition-colors">
            <Github size={16} />
            <span className="text-xs font-medium hidden md:inline">View on GitHub</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectBlock;
