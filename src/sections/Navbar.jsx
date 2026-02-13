import { useState } from "react";
import { Menu, X, Calendar, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = ["Home", "About", "Projects", "Skills", "Other"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-2 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-full px-3 py-2 shadow-lg">

        {links.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${active === item
                ? "bg-[#231c47] text-white shadow-inner"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden w-full flex justify-between items-center">

        {/* Left Icon */}
        {/* <button className="w-12 h-12 flex items-center justify-center 
          rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <Moon size={18} />
        </button> */}

        {/* Center Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto w-12 h-12 flex items-center justify-center 
          rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Right Icon */}
        {/* <button className="w-12 h-12 flex items-center justify-center 
          rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <Calendar size={18} />
        </button> */}
      </div>

      {/* MOBILE DROPDOWN */}
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
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setOpen(false);
                  }}
                  className={`py-3 rounded-full transition
                    ${active === item
                     ? "bg-[#231c47] text-white shadow-inner"
                       : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {item}
                </button>
              ))}

              {/* Book a Call Button */}
              {/* <button className="mt-4 flex items-center justify-center gap-2 
                border border-white/10 
                rounded-full py-3 text-white hover:bg-white/10 transition">
                <Calendar size={16} />
                Book a Call
              </button> */}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
