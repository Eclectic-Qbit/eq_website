"use client";

import LastTestingCanvas from "@/components/testing/LastTestingCanvas";
import OptimizedDottedCanvas from "@/components/backgrounds/OptimizedDottedCanvas";

export default function Testing() {
  return (
    <div>
      <div className="realtive w-full h-full">
        <div className="absolute top-0 left-0 w-full max-w-screen h-full overflow-hidden">
          <OptimizedDottedCanvas />
        </div>
      </div>
    </div>
  );
}
