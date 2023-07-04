"use client";

import ConsoleEffect from "@/components/animations/ConsoleEffect";
import { P2 } from "@/components/text/Paragraphs";
import { useCallback, useEffect, useRef, useState } from "react";

export default function AskInfo({
  title,
  placeholder,
  send,
  descrPhrase,
  bottomPhrase,
  defaultValue,
}) {
  const DELTA = useRef(30);
  const [hovering, setHovering] = useState(false);
  const [val, setVal] = useState(defaultValue);
  const [error, setError] = useState(null);
  function callbackError() {
    setError("Value not valid");
  }
  const handleSend = useCallback(
    (ignore) => {
      send(val, callbackError, () => setVal(""), ignore);
    },
    [send, val]
  );
  useEffect(() => {
    error && setVal("");
  }, [error]);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <ConsoleEffect
        style={{ textShadow: "2px 2px 2px black", width: "100%" }}
        className="text-white"
        content={{ content: title, type: "raw" }}
        forceActive={true}
        delta={DELTA.current}
      />
      <div className="flex items-center border-2 border-solid border-white w-max h-max py-2 px-4">
        <input
          className="bg-transparent cursor-none outline-none"
          type="text"
          placeholder={placeholder}
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            if (error) {
              setError(null);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <div onClick={handleSend} className="text-white">
          =&gt;
        </div>
      </div>
      <div>
        {error && (
          <div className="text-center">
            <ConsoleEffect
              style={{ textShadow: "2px 2px 2px black", width: "100%" }}
              className="text-red-500"
              content={{
                content: error,
                type: "raw",
              }}
              forceActive={true}
              delta={DELTA.current}
            />
          </div>
        )}
      </div>
      {descrPhrase && (
        <div className="text-center max-w-[80%]">
          <ConsoleEffect
            style={{ textShadow: "2px 2px 2px black", width: "100%" }}
            className="text-white"
            content={{
              content: descrPhrase,
              type: "raw",
            }}
            forceActive={true}
            delta={DELTA.current}
            delay={title.length * DELTA.current * 2}
          />
        </div>
      )}
      {bottomPhrase && (
        <button
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={() => send("no", null, null, true)}
          className="absolute bottom-4 left-[50%] -translate-x-[50%] cursor-none"
        >
          <ConsoleEffect
            style={{ textShadow: "2px 2px 2px black", width: "100%" }}
            className="text-white hover:underline"
            content={{
              content: bottomPhrase,
              type: "raw",
            }}
            spanStyling={hovering ? { textDecoration: "underline" } : {}}
            forceActive={true}
            delta={DELTA.current}
            delay={descrPhrase ? descrPhrase.length * DELTA.current * 2 : 0}
          />
        </button>
      )}
    </div>
  );
}
