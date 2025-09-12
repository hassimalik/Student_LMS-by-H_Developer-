// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false); // Mobile touch visibility

  useEffect(() => {
    // Mouse move
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    // Touch move
    const touchMove = (e) => {
      if (e.touches.length > 0) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setVisible(true);
      }
    };

    // Hide cursor when mouse leaves window (desktop)
    const mouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  if (!visible) return null; // Hide when not active

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className="w-4 h-4 rounded-full border-2 border-[#073764] opacity-80 
          transition-transform duration-150 ease-out shadow-amber-900 shadow-lg"
      ></div>
    </div>
  );
}

export default CustomCursor;
