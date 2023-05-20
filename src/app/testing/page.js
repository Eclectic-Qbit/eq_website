"use client";

/*

<div className="relative flex flex-wrap justify-center gap-6">
          <div>
            <H4 className="text-orange font-extrabold">HELLO</H4>
            <H4 className="text-orange font-bold">HELLO</H4>
            <H4 className="text-orange">HELLO</H4>
            <P1 className="text-orange font-extrabold">hello</P1>
            <P1 className="text-orange font-bolder">hello</P1>
            <P1 className="text-orange">hello</P1>
          </div>
          <div>
            <H4 className="text-purple font-extrabold">HELLO</H4>
            <H4 className="text-purple font-bold">HELLO</H4>
            <H4 className="text-purple">HELLO</H4>
            <P1 className="text-purple font-extrabold">hello</P1>
            <P1 className="text-purple font-bolder">hello</P1>
            <P1 className="text-purple">hello</P1>
          </div>
          <div>
            <H4 className="text-pink font-extrabold">HELLO</H4>
            <H4 className="text-pink font-bold">HELLO</H4>
            <H4 className="text-pink">HELLO</H4>
            <P1 className="text-pink font-extrabold">hello</P1>
            <P1 className="text-pink font-bolder">hello</P1>
            <P1 className="text-pink">hello</P1>
          </div>
          <div>
            <H4 className="text-green font-extrabold">HELLO</H4>
            <H4 className="text-green font-bold">HELLO</H4>
            <H4 className="text-green">HELLO</H4>
            <P1 className="text-green font-extrabold">hello</P1>
            <P1 className="text-green font-bolder">hello</P1>
            <P1 className="text-green">hello</P1>
          </div>
          <div>
            <H4 className="text-blue font-extrabold">HELLO</H4>
            <H4 className="text-blue font-bold">HELLO</H4>
            <H4 className="text-blue">HELLO</H4>
            <P1 className="text-blue font-extrabold">hello</P1>
            <P1 className="text-blue font-bolder">hello</P1>
            <P1 className="text-blue">hello</P1>
          </div>
          <div>
            <H4 className="text-yellow font-extrabold">HELLO</H4>
            <H4 className="text-yellow font-bold">HELLO</H4>
            <H4 className="text-yellow">HELLO</H4>
            <P1 className="text-yellow font-extrabold">hello</P1>
            <P1 className="text-yellow font-bolder">hello</P1>
            <P1 className="text-yellow">hello</P1>
          </div>
          <div>
            <H4 className="text-white font-extrabold">HELLO</H4>
            <H4 className="text-white font-bold">HELLO</H4>
            <H4 className="text-white">HELLO</H4>
            <P1 className="text-white font-extrabold">hello</P1>
            <P1 className="text-white font-bolder">hello</P1>
            <P1 className="text-white">hello</P1>
          </div>
          <MouseMoveGradient className="" from="#FF6600" to="#9500E9">
            <H4 className="font-extrabold">HELLO</H4>
            <H4 className=" font-bold">HELLO</H4>
            <H4 className="">HELLO</H4>
            <P1 className=" font-extrabold">hello</P1>
            <P1 className=" font-bolder">hello</P1>
            <P1 className="">hello</P1>
          </MouseMoveGradient>
        </div>

*/

import { useCallback, useEffect, useMemo, useRef } from "react";

/*

1) yellow: "#CCFF00",
2) orange: "#FF6600",
3) blue: "#00BFFF",
4) green: "#00FF00",
5) pink: "#FF007F",
6) purple: "#9500E9",

*/

export default function Testing() {
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
                setTimeout(() => {
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
                }, 5000);
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
