"use client";
import { useEffect, useRef } from "react";

export default function CircleCanvas({ x, y, r }) {
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
    canvasRef.current.width = r * 2 + 10;
    canvasRef.current.height = r * 2 + 10;
    const context = canvasRef.current.getContext("2d");
    drawCircle(context, x, y, r, 0, 0, 3, "rgba(0, 255, 0, 0.95)", {
      blur: 10,
      color: "rgba(0,255,0,1)",
    });
  }, [r, x, y]);
  return <canvas ref={canvasRef} />;
}
