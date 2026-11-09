import { Github, Linkedin, Mail, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Footer from "../sections/Footer";

const links = [
  {
    name: "GitHub",
    icon: <Github size={24} />,
    url: "https://github.com/tecanmol",
    desc: "40+ open-source projects",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    url: "https://www.linkedin.com/in/anmol-pandey-6323b220a/",
    desc: "Professional network",
  },
  {
    name: "Email",
    icon: <Mail size={24} />,
    url: "mailto:panmol735@gmail.com",
    desc: "Get in touch directly",
  },
];

const LinksPage = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-10 py-24 max-w-3xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[#62666d] hover:text-[#d0d6e0] transition-colors mb-10 text-sm"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#f7f8f8] leading-tight">
          My{" "}
          <span className="bg-gradient-to-r from-[#7170ff] to-[#ca2f8c] bg-clip-text text-transparent">
            Links
          </span>
        </h1>
        <p className="mt-3 text-[#8a8f98] text-base md:text-lg">
          Find me across the web.
        </p>
      </div>

      {/* Links List */}
      <div className="space-y-3">
        {links.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex items-center gap-5 p-5 rounded-xl
                       border border-[rgba(255,255,255,0.06)]
                       bg-[#0f1011]/60 backdrop-blur-sm
                       hover:border-[rgba(255,255,255,0.1)]
                       hover:bg-[#0f1011]/80
                       transition-all duration-200"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-lg
              bg-[rgba(255,255,255,0.04)]
              border border-[rgba(255,255,255,0.06)]
              text-[#d0d6e0]
              group-hover:bg-[rgba(255,255,255,0.06)]
              transition-colors">
              {item.icon}
            </div>

            <div className="flex-1">
              <h2 className="text-base font-medium text-[#f7f8f8]">
                {item.name}
              </h2>
              <p className="text-xs text-[#62666d] mt-0.5">
                {item.desc}
              </p>
            </div>

            <svg className="w-4 h-4 text-[#62666d] group-hover:text-[#d0d6e0] transition-colors"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default LinksPage;
