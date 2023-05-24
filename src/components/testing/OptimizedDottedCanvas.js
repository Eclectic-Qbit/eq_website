import { useCallback, useEffect, useRef } from "react";
import canvasData from "./canvas.json";

export default function OptimizedDottedCanvas() {
  const canvasRef = useRef(null);
  const canvasContext = useRef(null);
  const lastW = useRef(0);
  const handleResize = useCallback(() => {
    const newW = window.innerWidth;
    if (newW > lastW.current) {
      const parsedCanvasData = JSON.parse(JSON.stringify(canvasData));
      const imageData = canvasContext.current.createImageData(
        parsedCanvasData.width,
        parsedCanvasData.height
      );
      const pixelData = new Uint8ClampedArray(
        Object.values(parsedCanvasData.data)
      );
      imageData.data.set(pixelData);
      for (
        let i = 0;
        i * parsedCanvasData.width <
        canvasRef.current.width + parsedCanvasData.width - 1;
        i++
      ) {
        for (
          let j = 0;
          j * parsedCanvasData.height <
          canvasRef.current.height + parsedCanvasData.height - 1;
          j++
        ) {
          canvasContext.current.putImageData(
            imageData,
            i * parsedCanvasData.width,
            j * parsedCanvasData.height
          );
        }
      }
    }
  }, []);
  useEffect(() => {
    // Set canvas dimensions to default
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
    canvasContext.current = canvasRef.current.getContext("2d");
    handleResize();
  }, [handleResize]);
  return <canvas ref={canvasRef} />;
}
