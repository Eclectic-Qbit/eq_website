"use client";

import ConsoleEffect from "@/components/animations/ConsoleEffect";
import { useRef, useState } from "react";

export default function AskInfo({ title, placeholder, send, userInfo }) {
  const [val, setVal] = useState("");
  const requirements = useRef(
    "Your username must be at least 3 chars long and must contain numbers, letters or symbols like $,&,.,_"
  );
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <ConsoleEffect
        style={{ textShadow: "2px 2px 2px black", width: "max-content" }}
        className="text-white"
        content={{ content: title, type: "raw" }}
        forceActive={true}
        delta={40}
      />
      <div className="flex items-center border-2 border-solid border-white w-max h-max py-2 px-4">
        <input
          className="bg-transparent cursor-none outline-none"
          type="text"
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => console.log(e.key)}
        />
        <div className="text-white">=&gt;</div>
      </div>
      <ConsoleEffect
        style={{ textShadow: "2px 2px 2px black", width: "max-content" }}
        className="text-white"
        content={{
          content: requirements.current,
          type: "raw",
        }}
        forceActive={true}
        delta={40}
        delay={title.length * 40 * 2}
      />
      <button
        onClick={send("no")}
        className="absolute bottom-4 left-[50%] -translate-x-[50%]"
      >
        <ConsoleEffect
          style={{ textShadow: "2px 2px 2px black", width: "max-content" }}
          className="text-white hover:underline"
          content={{
            content: `Or keep using your discord username (${userInfo.username})`,
            type: "raw",
          }}
          forceActive={true}
          delta={40}
          delay={requirements.current.length * 40 * 2}
        />
      </button>
    </div>
  );
}
