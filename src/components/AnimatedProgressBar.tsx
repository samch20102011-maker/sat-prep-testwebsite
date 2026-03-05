"use client";

import { useEffect, useState } from "react";

interface AnimatedProgressBarProps {
  percentage: number;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

export function AnimatedProgressBar({ 
  percentage, 
  className = "", 
  delay = 0,
  gradient = true
}: AnimatedProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-slate-800 ${className}`}>
      <div
        className={`h-full rounded-full ${
          gradient 
            ? "bg-gradient-to-r from-primary-400 to-accent-500" 
            : "bg-emerald-400"
        }`}
        style={{
          width: isVisible ? `${percentage}%` : "0%",
          transition: isVisible ? `width 1.5s cubic-bezier(0.22, 1, 0.36, 1)` : "none"
        }}
      />
    </div>
  );
}
