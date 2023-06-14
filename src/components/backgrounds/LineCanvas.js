import { useCallback, useEffect, useRef } from "react";

export default function LineCanvas({ w, h, rows, spacingX, spacingY }) {
  const canvasRef = useRef(null);
  const drawLines = useCallback(
    (ctx) => {
      for (let i = 0; i < rows; i++) {
        ctx.fillStyle = "rgba(0, 255, 0, 1)";
        ctx.fillRect(spacingX * i, spacingY * i, w, h);
      }
    },
    [h, rows, spacingX, spacingY, w]
  );
  useEffect(() => {
    canvasRef.current.width = (w + spacingX) * rows + 10;
    canvasRef.current.height = (h + spacingY) * rows + 10;
    const context = canvasRef.current.getContext("2d");
    drawLines(context);
  }, [drawLines, h, rows, spacingX, spacingY, w]);
  return <canvas ref={canvasRef} />;
}
