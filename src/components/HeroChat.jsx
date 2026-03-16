import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react"

const suggestions = ["Work", "About me", "Skills", "Contact"];

export default function HeroChat() {

  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messageContainerRef = useRef(null);

  // Auto-scroll inside chat container
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const askBot = async (text) => {

    const q = text || query;
    if (!q.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setQuery("");
    setLoading(true);

    try {

      const res = await fetch("https://web-production-af570.up.railway.app/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: q })
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let accumulated = "";
      let firstToken = true;

      while (true) {

        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        accumulated += chunk;

        // First token arrives
        if (firstToken) {

          firstToken = false;
          setLoading(false);

          setMessages((prev) => [
            ...prev,
            { role: "bot", text: accumulated }
          ]);

        } else {

          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "bot",
              text: accumulated
            };
            return updated;
          });

        }

      }

    } catch {

      setLoading(false);

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Server error. Please try again." }
      ]);

    }

  };

  const variants ={
        hidden:{opacity:0, x:-50},
        visible: {opacity:1, x:0}
    }

  return (
    <motion.div className="mt-10 w-full max-w-2xl px-4 sm:px-6 md:px-0"
    variants={variants}
    initial="hidden" 
    animate="visible"
    transition={{delay: 2.2}}>

      <div
        className="
        w-full
        min-h-[200px]
        rounded-2xl
        border border-white/10
        bg-black/60
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,0,0,0.6)]
        p-4 sm:p-5
        flex flex-col
      "
      >

        {/* Messages */}
        <div
          ref={messageContainerRef}
          className="
          space-y-3
          text-sm
          max-h-[320px]
          overflow-y-auto
          pr-2
        "
        >

          {messages.length === 0 && !loading && (
            <div className="text-neutral-400 text-center py-8">
              Ask me anything about Anmol...
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-xl max-w-[75%]
                ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-neutral-200"
                }
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Loading bubble */}
          {loading && (
            <div className="flex justify-start">
              <div className="px-3 py-2 rounded-xl bg-white/10 flex gap-1">
                <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}

        </div>

        {/* Suggestions */}
        {messages.length === 0 && (
          <div className="flex gap-2 mt-4 justify-center flex-wrap">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => askBot(s)}
                className="
                text-xs
                px-3 py-1
                rounded-full
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition
              "
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="
          flex items-center
          rounded-full
          bg-black
          border border-white/10
          px-3 py-2
          mt-4
        "
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askBot()}
            placeholder="Ask about Anmol..."
            className="
            flex-1
            bg-transparent
            outline-none
            text-sm
            placeholder-neutral-500
          "
          />

          <button
            onClick={() => askBot()}
            className="
            ml-2
            px-3 py-1
            rounded-full
            bg-white/10
            hover:bg-white/20
            text-xs
            transition
          "
          >
            Ask
          </button>
        </div>

      </div>
    </motion.div>
  );
}