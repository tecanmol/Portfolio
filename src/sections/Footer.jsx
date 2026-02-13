import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-neutral-400 text-sm flex items-center gap-3">
            <span className="font-semibold text-white">AP</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} Anmol Pandey</span>
          </div>

          {/* Center */}
          <div className="text-neutral-400 text-sm text-center">
            Built with{" "}
            <span className="text-red-500">❤</span>{" "}
            using React & Tailwind
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-neutral-400">

            <a
              href="https://github.com/tecanmol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/anmol-pandey-6323b220a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:panmol735@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
