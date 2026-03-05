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
      element.scrollIntoView({
        behavior: "smooth"
      });
    }

    setActive(name);
    setOpen(false);
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-2 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-full px-3 py-2 shadow-lg">

        {links.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id, item.name)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${active === item.name
                ? "bg-[#231c47] text-white shadow-inner"
                : "text-neutral-400 hover:text-white"
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
          className="w-12 h-12 flex items-center justify-center 
          rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] 
            bg-black/60 backdrop-blur-2xl 
            border border-white/10 
            rounded-3xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-5 text-center">

              {links.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id, item.name)}
                  className={`py-3 rounded-full transition
                    ${active === item.name
                     ? "bg-[#231c47] text-white shadow-inner"
                       : "text-neutral-400 hover:text-white"
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