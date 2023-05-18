"use client";

import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import { H4 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import { useEffect, useRef } from "react";

export default function Testing() {
  const canvasRef = useRef(null);
  function drawDebugLines(ctx) {
    ctx.fillStyle = "rgba(0, 255, 0, 1)";
    for (let i = 0; i < canvasRef.current.width; i += 20) {
      ctx.fillRect(i, 0, i % 3, canvasRef.current.height);
    }
    ctx.stroke();
  }
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
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
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
    /* Testing */
    drawDebugLines(context);
  }, []);
  return (
    <div className="realtive w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <canvas ref={canvasRef} className="rounded-xl"></canvas>
      </div>
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
    </div>
  );
}
