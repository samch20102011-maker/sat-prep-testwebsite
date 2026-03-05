"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0,
  stagger = 30,
  style = {}
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`text-reveal ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            ...style,
            animationDelay: `${delay + index * stagger}ms`,
            animationPlayState: isVisible ? "running" : "paused"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
