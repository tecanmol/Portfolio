import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-[#62666d] text-sm flex items-center gap-2">
            <span className="font-semibold text-[#8a8f98]">AP</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} Anmol Pandey</span>
          </div>

          {/* Center */}
          <div className="text-[#62666d] text-xs">
            React + Tailwind
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5 text-[#62666d]">
            <a
              href="https://github.com/tecanmol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d0d6e0] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/anmol-pandey-6323b220a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d0d6e0] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:panmol735@gmail.com"
              className="hover:text-[#d0d6e0] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
