"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

export default function Testing() {
  const canvasRef = useRef(null);
  const items = useRef([]);
  const lastTime = useRef(0);
  const timeouts = useRef([]);
  const TIMEOUT = 20;
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
  const createTimeout = useCallback(
    (ctx, i, w, creationDate) => {
      const newTimeout = setTimeout(() => {
        drawCircle(
          ctx,
          items.current[i][0],
          items.current[i][1],
          w + 1,
          1,
          1,
          0,
          "black"
        );
        drawCircle(
          ctx,
          items.current[i][0],
          items.current[i][1],
          w,
          1,
          1,
          0,
          "white"
        );
        timeouts.current = timeouts.current.filter((el) => {
          if (
            el.params[0] !== ctx ||
            el.params[1] !== i ||
            el.params[2 !== w]
          ) {
            return el;
          }
        });
      }, 5 * TIMEOUT + Date.now() - creationDate);
      return newTimeout;
    },
    [drawCircle]
  );
  const posticipateTimeouts = useCallback(() => {
    const newTimeouts = [];
    timeouts.current.map((el, i) => {
      clearTimeout(el.timeout);
      newTimeouts.push({
        timeout: createTimeout(
          el.params[0],
          el.params[1],
          el.params[2],
          el.params[3]
        ),
        params: [el.params[0], el.params[1], el.params[2], el.params[3]],
      });
    });
    timeouts.current = newTimeouts;
  }, [createTimeout]);
  const handleMouseMove = useCallback(
    (e, ctx) => {
      const date = Date.now();
      if (date - lastTime.current > TIMEOUT) {
        posticipateTimeouts();
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
                timeouts.current.push({
                  timeout: createTimeout(ctx, i, w, 0),
                  params: [ctx, i, w, Date.now()],
                });
              }
            }
          }
        }
        lastTime.current = Date.now();
      }
    },
    [colors, createTimeout, drawCircle, posticipateTimeouts]
  );
  useEffect(() => {
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
    const context = canvasRef.current.getContext("2d");
    // Costants for optimization and readability
    const xSpacing = 7;
    const yFactor = 150;
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = xSpacing; i < width - xSpacing; i += xSpacing) {
      for (let j = 0; j < height / yFactor; j++) {
        const randomY = Math.floor(
          Math.random() * (height - xSpacing + 1) + xSpacing
        );
        const randomW = Math.floor(Math.random() * 100 + 1);
        const w = randomW > 98 ? 3 : randomW > 80 ? 2 : 1;
        drawCircle(context, i, randomY, w, 1, 1, 0, "white");
        items.current.push([i, randomY, w, 0]);
      }
    }
    canvasRef.current.addEventListener("mousemove", (e) =>
      handleMouseMove(e, context)
    );
    const parsedRef = canvasRef.current;
    return () => parsedRef.removeEventListener("mousemove", handleMouseMove);
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
