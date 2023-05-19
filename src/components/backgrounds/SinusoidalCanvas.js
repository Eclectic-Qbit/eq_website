"use client";
import { useCallback, useEffect, useRef } from "react";

export default function SinusoidalCanvas({ w, h, freq }) {
  const canvasRef = useRef(null);
  const drawSinusoidal = useCallback(
    (ctx) => {
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(0,255,0,1)";
      ctx.moveTo(0, 0);
      ctx.beginPath();
      for (let i = 0; i < window.innerWidth; i++) {
        const y = h * Math.sin(i * freq * Math.PI + 10) + h + 5;
        ctx.lineTo(i, y);
      }
      ctx.stroke();
    },
    [freq, h]
  );
  useEffect(() => {
    canvasRef.current.width = w + 10;
    canvasRef.current.height = h * 2 + 10;
    const context = canvasRef.current.getContext("2d");
    drawSinusoidal(context);
  }, [drawSinusoidal, h, w]);
  return <canvas ref={canvasRef} />;
}
