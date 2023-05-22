"use client";

import LastTestingCanvas from "@/components/testing/LastTestingCanvas";

export default function Testing1() {
  return (
    <div>
      <div className="realtive w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <LastTestingCanvas />
        </div>
      </div>
    </div>
  );
}
