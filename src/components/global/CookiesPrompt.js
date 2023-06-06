"use client";

import { useEffect, useState } from "react";
import { H4, H6, H8, H9 } from "../text/Headers";
import { P1, P2, P3, P4 } from "../text/Paragraphs";
import Link from "next/link";

export default function CookiesPrompt() {
  const [accepted, setAccepted] = useState(false);
  const [refused, setRefused] = useState(false);
  useEffect(() => {
    setRefused(JSON.parse(localStorage.getItem("refusedCookies")));
    setAccepted(JSON.parse(localStorage.getItem("acceptedCookies")));
  }, []);
  return (
    <div>
      {!accepted && !refused && (
        <div className="fixed z-10 bottom-0 left-0 w-full h-max flex justify-center items-center">
          <div className="sm:max-w-[90%] bg-white h-max text-black sm:rounded-t-2xl py-3">
            <Link className="cursor-none" href="/privacy">
              <div className=" flex-col sm:flex-row flex gap-2 text-center p-1">
                <H9 className="flex items-center justify-center">🍪</H9>
                <P3 className="lowercase" translationPath="privacy/cookies" />
              </div>
            </Link>
            <div className="w-full flex justify-center items-center gap-[2.5%] p-1">
              <div
                onClick={() => {
                  localStorage.setItem("acceptedCookies", true);
                  setAccepted(true);
                }}
                className="border-2 border-solid border-black rounded-full py-1 px-3 hover:bg-[rgba(0,0,0,0.1)] transition-all duration-150 ease-in"
              >
                <P2 translationPath={"general/accept"} />
              </div>
              <div
                onClick={() => {
                  localStorage.setItem("refusedCookies", true);
                  setRefused(true);
                }}
                className="border-2 border-solid border-black rounded-full py-1 px-3 hover:bg-[rgba(0,0,0,0.1)] transition-all duration-150 ease-in"
              >
                <P2 translationPath={"general/refuse"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
