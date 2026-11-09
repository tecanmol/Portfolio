import ProjectBlock from "../components/ProjectBlock";

const FeaturedProjects = () => {
  const projects = [
    {
      index: "01",
      category: "Hugging Face Space",
      title: "MunshiLM",
      description:
        "A Hinglish-language AI assistant that understands and generates natural Hinglish text. Deployed on Hugging Face Spaces with a chat interface for real-time conversations.",
      gradient: "bg-gradient-to-br from-[#7170ff]/20 to-[#ca2f8c]/15",
      tech: ["Python", "LLM", "Transformers", "Hugging Face", "RAG"],
      githubLink: "https://huggingface.co/spaces/tecanmol/MunshiLM",
      featured: true,
    },
    {
      index: "02",
      category: "Browser Extension",
      title: "T&C Guardian",
      description:
        "Chrome extension that automatically analyzes website Terms & Conditions using AI — highlighting key summaries, unfair clauses, and privacy risks.",
      gradient: "bg-gradient-to-br from-orange-500/15 to-yellow-500/10",
      tech: ["JavaScript", "React", "Node.js", "Python", "LLM"],
      githubLink: "https://github.com/tecanmol/TC_Extension",
      featured: true,
    },
    {
      index: "03",
      category: "AI Agent",
      title: "Customer Support Agent",
      description:
        "RAG-based customer support agent for e-commerce, built with LangGraph and LangChain. Uses ChromaDB for vector search and local embeddings for accurate, context-aware responses.",
      gradient: "bg-gradient-to-br from-[#7170ff]/15 to-blue-500/10",
      tech: ["Python", "LangGraph", "LangChain", "ChromaDB", "Streamlit"],
      githubLink: "https://github.com/tecanmol/Customer-support-agent",
      featured: true,
    },
    {
      index: "04",
      category: "Healthcare AI",
      title: "MedGuard",
      description:
        "Offline skin-disease triage system using TensorFlow.js to detect and classify 34 common skin conditions — designed for accessibility in low-connectivity settings.",
      gradient: "bg-gradient-to-br from-blue-500/15 to-cyan-500/10",
      tech: ["TypeScript", "React", "TensorFlow.js", "Computer Vision"],
      githubLink: "https://github.com/tecanmol/MedGuard_AI",
      featured: true,
    },
    {
      index: "05",
      category: "Browser Extension",
      title: "JevGuard",
      description:
        "AI-powered ad detector that uses semantic classification to identify and remove ads from webpages — going beyond traditional rule-based ad blockers.",
      gradient: "bg-gradient-to-br from-green-500/15 to-emerald-500/10",
      tech: ["Python", "NLP", "Browser Extension", "AI Classification"],
      githubLink: "https://github.com/tecanmol/JevGaurd",
      featured: true,
    },
    {
      index: "06",
      category: "Automation",
      title: "CalendarAgent",
      description:
        "Intelligent automation tool that reads Gmail for assignment emails, extracts key details using AI, and creates Google Calendar events with notifications.",
      gradient: "bg-gradient-to-br from-purple-500/15 to-indigo-500/10",
      tech: ["Python", "Gmail API", "Google Calendar API", "AI Extraction"],
      githubLink: "https://github.com/tecanmol/CalendarAgent",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-10 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#f7f8f8] leading-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#7170ff] to-[#ca2f8c] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mt-4 text-[#8a8f98] max-w-lg text-base md:text-lg">
          A curated selection of projects I've built — from browser extensions to
          healthcare AI.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-6 md:space-y-8">
        {projects.map((project) => (
          <ProjectBlock key={project.index} {...project} />
        ))}
      </div>

      {/* All projects link */}
      <div className="mt-16 md:mt-20 flex justify-center">
        <a
          href="https://github.com/tecanmol"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2
            text-sm font-medium
            text-[#8a8f98] hover:text-[#d0d6e0]
            transition-colors duration-200
            border-b border-transparent hover:border-[#8a8f98]
            pb-0.5"
        >
          See all projects on GitHub
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
