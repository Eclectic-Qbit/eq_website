"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SinusoidalCanvas({ w, h, freq, animate }) {
  const canvasRef = useRef(null);
  const fase = useRef(10);
  const context = useRef(null);
  const interval = useRef(null);
  const drawSinusoidal = useCallback(() => {
    if (!context.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    // Cancel previous draw
    context.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    // New draw
    context.current.lineWidth = 4;
    context.current.strokeStyle = "rgba(0,255,0,1)";
    context.current.moveTo(0, 0);
    context.current.beginPath();
    for (let i = 0; i < window.innerWidth; i++) {
      const y = h * Math.sin(i * freq * Math.PI + fase.current) + h + 5;
      context.current.lineTo(i, y);
    }
    context.current.stroke();
  }, [freq, h]);
  useEffect(() => {
    if (animate) {
      interval.current = setInterval(() => {
        fase.current += 0.1;
        drawSinusoidal();
      }, 15);
    } else {
      clearInterval(interval.current);
    }
  }, [animate, drawSinusoidal]);
  useEffect(() => {
    canvasRef.current.width = w + 10;
    canvasRef.current.height = h * 2 + 10;
    drawSinusoidal();
  }, [drawSinusoidal, h, w]);
  return <canvas ref={canvasRef} />;
}
