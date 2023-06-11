"use client";

import MouseContext from "@/contexts/MouseContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

export function MouseMoveGradient({ children, from, to, className }) {
  const { position, setPosition } = useContext(MouseContext);
  const [angle, setAngle] = useState(0);
  let currentTimeout = useRef(null);
  useEffect(() => {
    const x = position.clientX - window.innerWidth / 2;
    const y = position.clientY - window.innerHeight / 2;
    const rawAngle = Math.atan(y / x) * (180 / Math.PI);
    let finalAngle = Math.abs(rawAngle);
    if (x < 0 && y > 0) {
      finalAngle = 180 + rawAngle;
    } else if (x < 0 && y < 0) {
      finalAngle = 180 + rawAngle;
    } else if (x > 0 && y < 0) {
      finalAngle = 360 + rawAngle;
    }
    if (currentTimeout.current) {
      clearTimeout(currentTimeout.current);
      currentTimeout.current = null;
    }
    setAngle(finalAngle);
  }, [position]);
  return (
    <div
      className={`${className} font-mono text-transparent bg-clip-text transition-all duration-150 ease-linear`}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    >
      {children}
    </div>
  );
}
