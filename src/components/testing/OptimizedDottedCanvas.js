import { useCallback, useContext, useEffect, useRef } from "react";
import canvasData from "./parsedCanvas.json";
import baseCanvasItems from "./canvasItems.json";
import MouseContext from "@/contexts/MouseContext";
import { downloadFile } from "@/commonFrontend";

export default function OptimizedDottedCanvas() {
  const { position, setPosition, samplingDelta } = useContext(MouseContext);
  const canvasRef = useRef(null);
  const canvasContext = useRef(null);
  const canvasItems = useRef([]);
  const timeouts = useRef([]);
  const lastW = useRef(0);
  const COLORS = useRef([
    "#CCFF00",
    "#FF6600",
    "#00BFFF",
    "#00FF00",
    "#FF007F",
    "#9500E9",
  ]);
  const CIRCLE = 20;
  const DOWNLOAD_PARSED = false;
  // Draw a circle given some specs
  const drawCircle = useCallback((x, y, r, fill, blur, w, color, shadow) => {
    canvasContext.current.beginPath();
    canvasContext.current.filter = `blur(${blur}px)`;
    shadow && shadow.blur && (canvasContext.current.shadowBlur = shadow.blur);
    shadow &&
      shadow.color &&
      (canvasContext.current.shadowColor = shadow.color);
    canvasContext.current.lineWidth = w;
    fill === 1
      ? (canvasContext.current.fillStyle = color)
      : (canvasContext.current.strokeStyle = color);
    canvasContext.current.arc(x, y, r, 0, 2 * Math.PI);
    fill === 1 ? canvasContext.current.fill() : canvasContext.current.stroke();
    canvasContext.current.filter = "none";
  }, []);
  const createTimeout = useCallback(
    (i, w, creationDate) => {
      const newTimeout = setTimeout(() => {
        drawCircle(
          canvasItems.current[i][0],
          canvasItems.current[i][1],
          w + 1,
          1,
          1,
          0,
          "black"
        );
        drawCircle(
          canvasItems.current[i][0],
          canvasItems.current[i][1],
          w,
          1,
          1,
          0,
          "white"
        );
        timeouts.current = timeouts.current.filter((el) => {
          if (el.params[0] !== i || el.params[1 !== w]) {
            return el;
          }
        });
      }, 5 * samplingDelta + Date.now() - creationDate);
      return newTimeout;
    },
    [drawCircle, samplingDelta]
  );
  // Posticipate the draw-to-white stars timeout
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
  const handleResize = useCallback(() => {
    // Set canvas dimensions to default
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
    const newW = window.innerWidth;
    // Parse "texture" and logic points
    const parsedCanvasData = JSON.parse(JSON.stringify(canvasData));
    const parsedCanvasItems = JSON.parse(JSON.stringify(baseCanvasItems));
    const imageData = canvasContext.current.createImageData(
      parsedCanvasData.width,
      parsedCanvasData.height
    );
    const finalData = {};
    if (DOWNLOAD_PARSED) {
      Object.keys(parsedCanvasData.data).forEach((key) => {
        if (parsedCanvasData.data[key] === 0) {
          delete parsedCanvasData.data[key];
        }
      });
      const parsedObj = {
        height: parsedCanvasData.height,
        width: parsedCanvasData.width,
        data: parsedCanvasData.data,
      };
      const json = JSON.stringify(parsedObj);
      const blob = new Blob([json], { type: "application/json" });
      downloadFile(blob);
    }
    for (
      let i = 0;
      i < parsedCanvasData.width * parsedCanvasData.height * 4;
      i++
    ) {
      const val = parsedCanvasData.data[i];
      finalData[i] = val ? val : 0;
    }
    const pixelData = new Uint8ClampedArray(Object.values(finalData));
    imageData.data.set(pixelData);
    // Repeat the texture and logic points until the screen is covered
    for (
      let i = 0;
      i * parsedCanvasData.height < canvasRef.current.height;
      i++
    ) {
      for (
        let j = 0;
        j * parsedCanvasData.width < canvasRef.current.width;
        j++
      ) {
        canvasContext.current.putImageData(
          imageData,
          j * parsedCanvasData.width,
          i * parsedCanvasData.height
        );
        for (let k = 0; k < parsedCanvasItems.length; k++) {
          canvasItems.current.push([
            parsedCanvasItems[k][0] + j * parsedCanvasData.width,
            parsedCanvasItems[k][1] + i * parsedCanvasData.height,
            parsedCanvasItems[k][2],
            parsedCanvasItems[k][3],
          ]);
        }
      }
    }

    lastW.current = newW;
  }, [DOWNLOAD_PARSED]);
  useEffect(() => {
    const date = Date.now();
    posticipateTimeouts();
    const x = position.clientX;
    const y = position.clientY + window.scrollY;
    // Check which star is in range
    for (let i = 0; i < canvasItems.current.length; i++) {
      // If it wasn't updated in the recent past
      if (date - canvasItems.current[i][3] > 2 * samplingDelta) {
        // If it is in range
        if (
          canvasItems.current[i][0] + CIRCLE > x &&
          canvasItems.current[i][0] - CIRCLE < x
        ) {
          if (
            canvasItems.current[i][1] + CIRCLE > y &&
            canvasItems.current[i][1] - CIRCLE < y
          ) {
            // Draw back and paint again on it
            const w = canvasItems.current[i][2];
            drawCircle(
              canvasItems.current[i][0],
              canvasItems.current[i][1],
              w + 1, // consider the border (1) too!
              1,
              1,
              0,
              "black"
            );
            const number = Math.floor(Math.random() * (5 - 0 + 1) + 0);
            const color = COLORS.current[number];
            drawCircle(
              canvasItems.current[i][0],
              canvasItems.current[i][1],
              w,
              1,
              1,
              0,
              color
            );
            timeouts.current.push({
              timeout: createTimeout(i, w, date),
              params: [i, w, date],
            });
          }
        }
      }
    }
  }, [
    COLORS,
    position,
    createTimeout,
    drawCircle,
    posticipateTimeouts,
    samplingDelta,
  ]);
  useEffect(() => {
    // Event listeners
    window.addEventListener("resize", handleResize);
    canvasContext.current = canvasRef.current.getContext("2d");
    handleResize();
    // Remove event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return <canvas ref={canvasRef} />;
}
