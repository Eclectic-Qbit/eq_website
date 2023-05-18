"use client";

import { useEffect, useRef } from "react";

export default function FirstCanvas() {
  const canvasRef = useRef(null);
  function drawSinusoidal(ctx) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(0,255,0,1)";
    ctx.moveTo(window.innerWidth - 500, 100);
    ctx.beginPath();
    for (let i = window.innerWidth - 500; i < window.innerWidth + 100; i++) {
      const y = 100 + 20 * Math.sin(i * 0.03 * Math.PI + 10);
      ctx.lineTo(i, y);
    }
    ctx.stroke();
  }
  function drawGrid(ctx) {
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 8; j++) {
        ctx.fillStyle = "rgba(0, 255, 0, 0.1)";
        ctx.fillRect(
          window.innerWidth - 650 + i * 50,
          window.innerHeight - 400,
          1,
          400
        );
        ctx.fillRect(
          window.innerWidth - 650,
          window.innerHeight - 400 + i * 50,
          650,
          1
        );
      }
    }
  }
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
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    const context = canvasRef.current.getContext("2d");

    for (let i = 11; i < window.innerWidth - 11; i += 11) {
      for (let j = 11; j < window.innerHeight - 11; j += 11) {
        const num = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
        if (num > 950) {
          drawCircle(context, i, j, num > 995 ? 2 : 1, 1, 1, 0, "white");
        }
      }
    }
    drawGrid(context);
    drawCircle(context, 0, 300, 150, 0, 0, 3, "rgba(0, 255, 0, 0.95)", {
      blur: 10,
      color: "rgba(0,255,0,1)",
    });
    drawSinusoidal(context);
  }, []);
  return <canvas ref={canvasRef} className="rounded-xl"></canvas>;
}
