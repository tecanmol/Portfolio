import ProjectBlock from "../components/ProjectBlock";

const FeaturedProjects = () => {
  const projects = [
    {
      index: "01",
      category: "Hugging Face Space",
      title: "MunshiLM",
      description:
        "Hinglish-language AI assistant that understands and generates natural Hinglish conversations. Deployed on Hugging Face Spaces with real-time chat interface.",
      gradient: "bg-gradient-to-br from-[#7170ff]/20 to-[#ca2f8c]/15",
      tech: ["Python", "LLM", "Transformers", "Hugging Face"],
      image: "assets/MunshiLM.png",
      githubLink: "https://huggingface.co/spaces/tecanmol/MunshiLM",
    },
    {
      index: "02",
      category: "Browser Extension",
      title: "T&C Guardian",
      description:
        "Chrome extension that analyzes website Terms & Conditions using AI — highlighting key summaries, unfair clauses, and privacy risks.",
      gradient: "bg-gradient-to-br from-orange-500/15 to-yellow-500/10",
      tech: ["JavaScript", "React", "Node.js", "Python", "LLM"],
      image: "assets/TC_Extension.png",
      githubLink: "https://github.com/tecanmol/TC_Extension",
    },
    {
      index: "03",
      category: "AI Agent",
      title: "Customer Support Agent",
      description:
        "RAG-based customer support agent built with LangGraph and LangChain. Uses ChromaDB for vector search and local embeddings for context-aware responses.",
      gradient: "bg-gradient-to-br from-[#7170ff]/15 to-blue-500/10",
      tech: ["Python", "LangGraph", "LangChain", "ChromaDB", "Streamlit"],
      image: "assets/Customer_support_agent.png",
      githubLink: "https://github.com/tecanmol/Customer-support-agent",
    },
    {
      index: "04",
      category: "Healthcare AI",
      title: "MedGuard",
      description:
        "Offline skin-disease triage system using TensorFlow.js to detect and classify 34 common skin conditions — designed for low-connectivity settings.",
      gradient: "bg-gradient-to-br from-blue-500/15 to-cyan-500/10",
      tech: ["TypeScript", "React", "TensorFlow.js", "Computer Vision"],
      image: "assets/MedGuard_AI.png",
      githubLink: "https://github.com/tecanmol/MedGuard_AI",
    },
    {
      index: "05",
      category: "Browser Extension",
      title: "JevGuard",
      description:
        "AI-powered ad detector using semantic classification to identify and remove ads from webpages — going beyond traditional rule-based blockers.",
      gradient: "bg-gradient-to-br from-green-500/15 to-emerald-500/10",
      tech: ["Python", "NLP", "Browser Extension", "AI Classification"],
      image: "assets/JevGaurd.png",
      githubLink: "https://github.com/tecanmol/JevGaurd",
    },
    {
      index: "06",
      category: "Automation",
      title: "CalendarAgent",
      description:
        "AI tool that reads Gmail for assignment emails, extracts key details, and creates Google Calendar events with notifications.",
      gradient: "bg-gradient-to-br from-purple-500/15 to-indigo-500/10",
      tech: ["Python", "Gmail API", "Google Calendar API"],
      image: "assets/CalendarAgent.png",
      githubLink: "https://github.com/tecanmol/CalendarAgent",
    },
    {
      index: "07",
      category: "Security AI",
      title: "AI Smart Contract Auditor",
      description:
        "AI-powered smart contract auditor for Solidity — scans and audits Ethereum smart contracts for vulnerabilities and best practices.",
      gradient: "bg-gradient-to-br from-red-500/15 to-orange-500/10",
      tech: ["Python", "LLM", "Solidity", "Security"],
      image: "assets/AI-Smart-Contract-Auditor.png",
      githubLink: "https://github.com/tecanmol/AI-Smart-Contract-Auditor",
    },
    {
      index: "08",
      category: "RAG System",
      title: "RagChatbot",
      description:
        "RAG-based chatbot backend with vector search, providing context-aware responses from document knowledge bases.",
      gradient: "bg-gradient-to-br from-teal-500/15 to-cyan-500/10",
      tech: ["Python", "RAG", "LangChain", "Vector Search"],
      image: "assets/RagChatbot_backend.png",
      githubLink: "https://github.com/tecanmol/RagChatbot_backend",
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
          AI engineering projects — from language models to security auditing.
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
