import CopyEmailBtn from "../components/CopyEmailBtn";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#f7f8f8] leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-[#7170ff] to-[#ca2f8c] bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Bio card */}
        <div className="md:col-span-2 rounded-2xl
          border border-[rgba(255,255,255,0.06)]
          bg-[#0f1011]/60 backdrop-blur-sm
          p-8 md:p-10">
          <p className="text-[#d0d6e0] text-lg md:text-xl leading-relaxed max-w-3xl">
            I'm Anmol Pandey — a final-year BE student in <span className="text-[#f7f8f8] font-medium">AI &amp; Machine Learning</span>
            at Mumbai University (CGPA 8.84). Over the past few years I've built full-stack
            applications, AI agents, browser extensions, and offline healthcare tools.
            I work across Python, React, Node.js, and LangChain, with a focus on making
            intelligent systems that are actually useful.
          </p>
          <p className="text-[#8a8f98] text-base md:text-lg leading-relaxed max-w-3xl mt-4">
            Based in Mumbai, India. Open to remote internships and opportunities worldwide.
            0-day notice period — can join immediately.
          </p>
        </div>

        {/* Current focus */}
        <div className="rounded-2xl
          border border-[rgba(255,255,255,0.06)]
          bg-[#0f1011]/60 backdrop-blur-sm
          p-8">
          <h3 className="text-sm font-semibold text-[#8a8f98] uppercase tracking-widest mb-4">
            Current Focus
          </h3>
          <ul className="space-y-3 text-[#d0d6e0] text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#7170ff] mt-1">›</span>
              <span>Building LLM-powered tools and AI agents</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#7170ff] mt-1">›</span>
              <span>Growing @2d.brains and @mahayatra.live</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#7170ff] mt-1">›</span>
              <span>"100 Days of AI Engineering" — LLM evals and MCP</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#7170ff] mt-1">›</span>
              <span>Land an AI/ML internship — Mumbai or remote</span>
            </li>
          </ul>
        </div>

        {/* Tech stack */}
        <div className="rounded-2xl
          border border-[rgba(255,255,255,0.06)]
          bg-[#0f1011]/60 backdrop-blur-sm
          p-8">
          <h3 className="text-sm font-semibold text-[#8a8f98] uppercase tracking-widest mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "TypeScript", "JavaScript", "React",
              "Node.js", "LangChain", "LangGraph", "RAG",
              "TensorFlow.js", "Flutter", "Docker", "Firebase",
              "Tailwind CSS", "Git", "Linux", "SQL", "REST APIs",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs rounded-md
                  bg-[rgba(255,255,255,0.04)]
                  text-[#8a8f98]
                  border border-[rgba(255,255,255,0.06)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="md:col-span-2 rounded-2xl
          border border-[rgba(255,255,255,0.06)]
          bg-gradient-to-br from-[#7170ff]/10 to-[#ca2f8c]/5
          backdrop-blur-sm
          p-8 md:p-10 text-center">
          <p className="text-[#f7f8f8] text-lg md:text-xl font-medium mb-4">
            Interested in working together?
          </p>
          <CopyEmailBtn />
        </div>
      </div>
    </section>
  );
};

export default About;
