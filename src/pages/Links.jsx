import { Github, Linkedin, Mail, ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

const links = [
  {
    name: "GitHub",
    icon: <Github size={28} />,
    url: "https://github.com/tecanmol",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={28} />,
    url: "https://www.linkedin.com/in/anmol-pandey-6323b220a/",
  },
  {
    name: "Email",
    icon: <Mail size={28} />,
    url: "mailto:panmol735@gmail.com",
  },
];

const Links = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-16 py-24 max-w-5xl mx-auto">

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition mb-10"
      >
        <ArrowLeft size={18} />
        Back to home
      </Link>
      <Navbar/>

      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-blue-400 tracking-widest text-sm mb-4">
          CONNECT WITH ME
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          My <span className="text-blue-500">Links</span>
        </h1>

        <p className="mt-6 text-neutral-400">
          Find me across the web and social platforms
        </p>
      </div>

      {/* Links List */}
      <div className="space-y-8">
        {links.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group flex items-center justify-between p-8 rounded-3xl 
                       border border-white/10 bg-white/5 backdrop-blur-xl
                       hover:border-blue-500/40
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                       transition-all duration-500"
          >
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl 
                              border border-white/10 bg-black/40 
                              text-blue-400 group-hover:scale-110 
                              transition duration-300">
                {item.icon}
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {item.name}
              </h2>
            </div>

            {/* Right Icon */}
            <ExternalLink
              size={22}
              className="text-neutral-400 group-hover:text-blue-400 transition"
            />
          </motion.a>
        ))}
      </div>
      <Footer/>
    </section>
  );
};

export default Links;
