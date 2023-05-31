"use client";
import { useEffect, useRef, useState } from "react";

export default function CircleCanvas({ x, y, r, animate }) {
  const interval = useRef(null);
  const canvasRef = useRef(null);
  const [rotate, setRotate] = useState(45);
  function drawCircle(ctx, x, y, r, fill, blur, w, color, shadow) {
    // Linear gradient
    if (color.type === "gradient") {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0, color.colors[0]);
      gradient.addColorStop(1, color.colors[1]);
      ctx.strokeStyle = gradient;
    } else {
      fill === 1
        ? (ctx.fillStyle = color.colors[0])
        : (ctx.strokeStyle = color.colors[0]);
    }
    // Draw
    ctx.beginPath();
    ctx.filter = `blur(${blur}px)`;
    shadow && shadow.blur && (ctx.shadowBlur = shadow.blur);
    shadow && shadow.color && (ctx.shadowColor = shadow.color);
    ctx.lineWidth = w;
    ctx.arc(x + w, y + w, r, 0, 2 * Math.PI);
    fill === 1 ? ctx.fill() : ctx.stroke();
    ctx.filter = "none";
  }
  useEffect(() => {
    if (animate) {
      interval.current = setTimeout(() => {
        setRotate((rotate + 2) % 360);
      }, 15);
    } else {
      clearInterval(interval.current);
    }
  }, [animate, rotate]);
  useEffect(() => {
    const W = 3;
    canvasRef.current.width = r * 2 + 2 * W;
    canvasRef.current.height = r * 2 + 2 * W;
    const context = canvasRef.current.getContext("2d");
    drawCircle(
      context,
      x,
      y,
      r,
      0,
      0,
      W,
      {
        type: "gradient",
        colors: ["green", "rgba(0, 255, 0, 0)"],
      },
      {
        blur: 10,
        color: "rgba(0,255,0,1)",
      }
    );
  }, [r, x, y]);
  return (
    <canvas style={{ transform: `rotate(${rotate}deg)` }} ref={canvasRef} />
  );
}
