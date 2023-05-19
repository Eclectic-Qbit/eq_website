"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

export default function TestingCanvas() {
  const canvasRef = useRef(null);
  const items = useRef([]);
  const lastTime = useRef(0);
  const TIMEOUT = 10;
  const CIRCLE = 40;
  const colors = useMemo(() => {
    return ["#CCFF00", "#FF6600", "#00BFFF", "#00FF00", "#FF007F", "#9500E9"];
  }, []);
  const drawCircle = useCallback(
    (ctx, x, y, r, fill, blur, w, color, shadow) => {
      ctx.beginPath();
      ctx.filter = `blur(${blur}px)`;
      shadow && shadow.blur && (ctx.shadowBlur = shadow.blur);
      shadow && shadow.color && (ctx.shadowColor = shadow.color);
      ctx.lineWidth = w;
      fill === 1 ? (ctx.fillStyle = color) : (ctx.strokeStyle = color);
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      fill === 1 ? ctx.fill() : ctx.stroke();
      ctx.filter = "none";
    },
    []
  );
  const handleMouseMove = useCallback(
    (e, ctx) => {
      const date = Date.now();
      if (date - lastTime.current > TIMEOUT) {
        const x = e.clientX;
        const y = e.clientY;
        for (let i = 0; i < items.current.length; i++) {
          if (date - items.current[i][3] > 2 * TIMEOUT) {
            if (
              items.current[i][0] + CIRCLE > x &&
              items.current[i][0] - CIRCLE < x
            ) {
              if (
                items.current[i][1] + CIRCLE > y &&
                items.current[i][1] - CIRCLE < y
              ) {
                const w = items.current[i][2];
                drawCircle(
                  ctx,
                  items.current[i][0],
                  items.current[i][1],
                  w + 1, // consider the border (1) too!
                  1,
                  1,
                  0,
                  "black"
                );
                const number = Math.floor(Math.random() * (5 - 0 + 1) + 0);
                const color = colors[number];
                drawCircle(
                  ctx,
                  items.current[i][0],
                  items.current[i][1],
                  w,
                  1,
                  1,
                  0,
                  color
                );
                //items.current.splice(i, 1);
                //items.current.push([x, y, w, date]);
              }
            }
          }
        }
        lastTime.current = Date.now();
      }
    },
    [colors, drawCircle]
  );
  useEffect(() => {
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
    const context = canvasRef.current.getContext("2d");
    for (let i = 11; i < window.innerWidth - 11; i += 11) {
      for (let j = 11; j < window.innerHeight - 11; j += 11) {
        const num = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
        if (num > 950) {
          drawCircle(context, i, j, num > 990 ? 2 : 1, 1, 1, 0, "white");
          items.current.push([i, j, num > 985 ? 2 : 1, 0]);
        }
      }
    }
    window.addEventListener("mousemove", (e) => handleMouseMove(e, context));
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [drawCircle, handleMouseMove]);
  return (
    <div>
      <div className="realtive w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <canvas ref={canvasRef} className="rounded-xl"></canvas>
        </div>
      </div>
    </div>
  );
}
