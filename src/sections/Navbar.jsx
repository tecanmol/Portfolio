import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Other", id: "other" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id, name) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActive(name);
    setOpen(false);
  };

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1
        bg-[#0f1011]/80 backdrop-blur-xl
        border border-[rgba(255,255,255,0.08)]
        rounded-full px-2 py-1.5 shadow-lg">

        {/* Brand */}
        <span className="px-3 py-1.5 text-sm font-semibold text-white tracking-tight select-none">
          AP
        </span>
        <div className="w-px h-5 bg-[rgba(255,255,255,0.08)]" />

        {links.map((item) => (
          <button
            key={item.name}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id, item.name);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200
              ${active === item.name
                ? "bg-white/10 text-white"
                : "text-[#8a8f98] hover:text-[#d0d6e0]"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden w-full flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center
          rounded-full bg-[#0f1011]/80 backdrop-blur-xl
          border border-[rgba(255,255,255,0.08)]
          text-[#d0d6e0]"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 w-48
            bg-[#0f1011]/95 backdrop-blur-2xl
            border border-[rgba(255,255,255,0.08)]
            rounded-2xl p-2"
          >
            <div className="flex flex-col gap-1">
              {links.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id, item.name);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-sm text-left transition-colors
                    ${active === item.name
                      ? "bg-white/10 text-white"
                      : "text-[#8a8f98] hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
