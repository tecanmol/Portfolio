import { useRef, useState, useEffect } from "react";

export default function CursorGlow({ intensity = 0.15 }) {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        rafRef.current = null;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[5] transition-opacity duration-500"
      style={{
        opacity: intensity,
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(113,112,255,0.06), transparent 40%)`,
      }}
    />
  );
}
