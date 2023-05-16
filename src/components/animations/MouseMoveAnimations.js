"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function MouseMoveGradient({ children, from, to, className }) {
  const [angle, setAngle] = useState(0);
  let currentTimeout = useRef(null);
  const ENBLE_EASING = false;
  const easeToValue = useCallback(
    (initial, final, t) => {
      if (ENBLE_EASING) {
        if (t < 1) {
          currentTimeout.current = setTimeout(() => {
            const newAngle = initial + (final - initial) * t;
            setAngle(newAngle);
            easeToValue(initial, final, t + 0.01);
          }, 1);
        }
      } else {
        setAngle(final);
      }
    },
    [ENBLE_EASING]
  );
  const handleMouseMove = useCallback(
    (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
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
      easeToValue(angle, finalAngle, 0);
    },
    [angle, easeToValue]
  );
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
  return (
    <div
      className="text-transparent bg-clip-text transition-all duration-150 ease-linear"
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    >
      <div className={className}>{children}</div>
    </div>
  );
}
