import ProjectBlock from "../components/ProjectBlock";

const FeaturedProjects = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-20 md:mb-28">
        {/* <p className="tracking-widest text-xs md:text-sm text-neutral-400 mb-4">
          PORTFOLIO
        </p> */}

        <h2 className="text-3xl md:text-6xl font-bold text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="mt-6 text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
          A curated selection of projects that made me confident in building software.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">

        <ProjectBlock
          index="01"
          category="Browser Extension"
          title="TC_Extension"
          description="Chrome extension that analyzes website terms and conditions, highlighting critical risks using a local AI backend."
          image="assets/TC_Extension.png"
          gradient="bg-gradient-to-br from-orange-500/80 to-yellow-500/70"
          tech={["JavaScript", "React", "Node.js", "Python", "LLM"]}
          githubLink="https://github.com/tecanmol/TC_Extension"
        />

        <ProjectBlock
          index="02"
          category="Web Application"
          title="AI Career Coach"
          description="AI-powered career guidance platform generating personalized career roadmaps through psychometric analysis using Gemini AI."
          image="assets/AI Career Coach.png"
          gradient="bg-gradient-to-br from-green-500/80 to-emerald-600/70"
          tech={["TypeScript", "JavaScript", "React", "Node.js", "REST APIs", "Google Gemini API"]}
        //   githubLink="https://github.com/tecanmol/TC_Extension"
        />

      </div>

      {/* Explore All Button */}
    <div className="mt-20 flex justify-center">
    <a
        href="https://github.com/tecanmol"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 
                text-lg md:text-xl font-semibold
                text-white
                transition"
    >
        <span className="relative">
        Explore all projects on GitHub
        {/* Underline animation */}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        {/* Icon */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
        >
        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
        <path d="M5 5h5V3H3v7h2V5z" />
        <path d="M19 19h-5v2h7v-7h-2v5z" />
        <path d="M5 19v-5H3v7h7v-2H5z" />
        </svg>
    </a>
    </div>


    </section>
  );
};

export default FeaturedProjects;
