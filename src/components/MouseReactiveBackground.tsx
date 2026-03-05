"use client";

import { useCallback, useEffect, useState } from "react";

export function MouseReactiveBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [smooth, setSmooth] = useState({ x: 50, y: 50 });

  const onMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  useEffect(() => {
    const tick = () => {
      setSmooth((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.08,
        y: prev.y + (mouse.y - prev.y) * 0.08
      }));
    };
    const id = requestAnimationFrame(function loop() {
      tick();
      requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(id);
  }, [mouse.x, mouse.y]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={
        {
          "--mouse-x": `${smooth.x}%`,
          "--mouse-y": `${smooth.y}%`
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-slate-950" />
      <div className="mouse-gradient absolute inset-0 opacity-100" />
      <div className="mouse-mesh absolute inset-0 opacity-[0.4]" />
      <div className="mouse-spot absolute -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] rounded-full opacity-30" />
    </div>
  );
}
