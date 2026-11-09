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
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Card container — full-width block (emblematica style) */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          block relative rounded-2xl overflow-hidden
          border border-[rgba(255,255,255,0.06)]
          transition-all duration-400 ease-out
          hover:border-[rgba(255,255,255,0.12)]
          hover:shadow-2xl hover:shadow-black/20
          ${gradient}
          min-h-[260px] md:min-h-[280px]
        `}
      >
        {/* Background image — subtle, reveals on hover */}
        {image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover
                transition-all duration-700 ease-out
                scale-105 group-hover:scale-100
                opacity-0 group-hover:opacity-[0.08]"
            />
          </div>
        )}

        {/* Content overlay */}
        <div className="relative z-[2] p-6 md:p-8 lg:p-12 flex flex-col justify-between h-full">
          {/* Top section: number + category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] md:text-[14px] font-mono font-medium text-[#8a8f98] tracking-wider">
              {index}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#62666d]" />
            <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#62666d] font-medium">
              {category}
            </span>
          </div>

          {/* Bottom section: title, description, tech, link */}
          <div className="flex items-end justify-between gap-4 flex-wrap">
            {/* Title + description */}
            <div className="flex-1 min-w-0">
              {/* Large bold title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7f8f8] mb-2 tracking-tight leading-tight">
                {title}
              </h3>
              {/* Description */}
              <p className="text-sm md:text-base text-[#9a9ea6] leading-relaxed max-w-xl mb-4">
                {description}
              </p>
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs rounded-md
                      bg-[rgba(255,255,255,0.04)]
                      text-[#9a9ea6]
                      border border-[rgba(255,255,255,0.06)]
                      font-mono
                      backdrop-blur-sm
                      transition-colors duration-300
                      group-hover:bg-[rgba(255,255,255,0.07)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            <div className="flex items-center gap-2 text-[#62666d] group-hover:text-[#d0d6e0] transition-colors duration-300 shrink-0">
              <div className="w-8 h-8 rounded-full
                bg-[rgba(255,255,255,0.04)]
                border border-[rgba(255,255,255,0.08)]
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-[rgba(255,255,255,0.08)]
                group-hover:border-[rgba(255,255,255,0.15)]"
              >
                <Github size={14} />
              </div>
              <span className="text-xs font-medium hidden md:inline tracking-wide">
                View Project
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectBlock;
