import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      bgRef.current.style.setProperty("--x", `${e.clientX}px`);
      bgRef.current.style.setProperty("--y", `${e.clientY}px`);
      bgRef.current.classList.add("active"); // activate glow
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={bgRef} className="interactive-bg" />;
}
