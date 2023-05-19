"use client";

import { useEffect, useRef } from "react";

export default function DottedCanvas() {
  const canvasRef = useRef(null);
  function drawCircle(ctx, x, y, r, fill, blur, w, color, shadow) {
    ctx.beginPath();
    ctx.filter = `blur(${blur}px)`;
    shadow && shadow.blur && (ctx.shadowBlur = shadow.blur);
    shadow && shadow.color && (ctx.shadowColor = shadow.color);
    ctx.lineWidth = w;
    fill === 1 ? (ctx.fillStyle = color) : (ctx.strokeStyle = color);
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    fill === 1 ? ctx.fill() : ctx.stroke();
    ctx.filter = "none";
  }
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = document.documentElement.offsetWidth;
    canvasRef.current.height = document.documentElement.offsetHeight;
    for (let i = 11; i < canvasRef.current.width - 11; i += 11) {
      for (let j = 11; j < canvasRef.current.height - 11; j += 11) {
        const num = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
        if (num > 950) {
          drawCircle(context, i, j, num > 995 ? 2 : 1, 1, 1, 0, "white");
        }
      }
    }
  }, []);
  return <canvas ref={canvasRef} />;
}
