"use client";

import { useCallback, useEffect, useRef } from "react";

export default function GridCanvas({ w, h, cols, rows }) {
  const canvasRef = useRef(null);
  const drawGrid = useCallback(
    (ctx) => {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.fillStyle = "rgba(0, 255, 0, 0.1)";
          ctx.fillRect(i * (w / cols), 0, 1, h);
          ctx.fillRect(0, i * (h / rows), w, 1);
        }
      }
    },
    [cols, h, rows, w]
  );
  useEffect(() => {
    canvasRef.current.width = w + 10;
    canvasRef.current.height = h + 10;
    const context = canvasRef.current.getContext("2d");
    drawGrid(context);
  }, [drawGrid, h, w]);
  return <canvas ref={canvasRef} />;
}
