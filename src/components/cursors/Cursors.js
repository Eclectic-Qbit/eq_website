"use client";

import MouseContext from "@/contexts/MouseContext";
import { useContext, useEffect, useRef, useState } from "react";
import { P2 } from "../text/Paragraphs";

export function HomepageCursor() {
  const ref = useRef(null);
  const [side, setSide] = useState(0);
  const { position } = useContext(MouseContext);
  useEffect(() => {
    setSide(ref.current.offsetWidth);
  }, []);
  return (
    <div
      className="fixed z-50 transition-none pointer-events-none	"
      ref={ref}
      style={{
        top: position.clientY - side / 2,
        left: position.clientX - side / 2,
      }}
    >
      <P2>👾</P2>
    </div>
  );
}
