import { useEffect, useRef, useState } from "react";

export default function StarWarsEffect({ children, className, style }) {
  const [transform, setTransform] = useState(null);
  useEffect(() => {
    setTransform({ transform: "translateY(0)", opacity: 1 });
  }, []);
  return (
    <div
      className={`${
        className ? className : ""
      } translate-y-full opacity-0 transition-all duration-[1s] ease-in`}
      style={{
        ...transform,
      }}
    >
      <div style={{ transform: "perspective(300px) rotateX(20deg)" }}>
        {children}
      </div>
    </div>
  );
}
