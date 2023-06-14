"use client";

import LoadingAnimation from "@/components/animations/LoadingAnimation";
import MemoryGame from "@/components/gamification/MemoryGame";
import { P1, P2 } from "@/components/text/Paragraphs";
import ResizeContext from "@/contexts/ResizeContext";
import settings from "@/frontendSettings";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Games() {
  const [msg, setMsg] = useState(null);
  const { winSize, setWinSize } = useContext(ResizeContext);
  useEffect(() => {
    setWinSize({ innerW: window.innerWidth });
  }, [setWinSize]);
  return (
    <div className="w-full h-full min-h-screen gap-10 flex flex-col items-center justify-center pt-20 mb-8">
      {msg && msg}
      <div
        className={`${
          winSize && winSize.innerW > settings.mobileView
            ? "fixed top-0 left-0 pb-10  border-l-2 border-solid border-white bg-black h-screen"
            : "top-0 relative flex-wrap flex-col"
        }
         flex justify-center font-extrabold uppercase w-max text-center`}
        style={
          winSize && winSize.innerW > settings.mobileView
            ? {
                writingMode: "vertical-lr",
                rotate: "180deg",
              }
            : {}
        }
      >
        <div
          className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in"
          onClick={() => {
            document
              .querySelector("#game")
              .scrollIntoView({ behavior: "smooth" });
            setMsg(
              <div
                onClick={() => setMsg(null)}
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.65)] z-50"
              >
                <div className="max-w-[50vw] text-center">
                  <LoadingAnimation
                    elements={[
                      <P1 key={0} className={"uppercase"}>
                        Need a quick tutorial?
                      </P1>,
                      <P2 key={1} className={"lowercase"}>
                        the game is pretty easy! <br /> the time starts when you
                        click a card
                      </P2>,
                      <P2 key={2} className={"lowercase"}>
                        there are 3 types of rankings: <br />
                        1 - speedrun: the earlier you finish the better your
                        rank will be <br />
                        2 - streak: players with highest streaks will be in the
                        first positions of the ranking <br />3 - games played:
                        the more you play, the most likely you&apos;ll be in the
                        first places
                      </P2>,
                      <P2 key={3}>
                        <span className="uppercase">But Remember</span>You need
                        to log-in for accessing the leaderboards and getting
                        some rewards!
                      </P2>,
                    ]}
                    coeffs={[1, 1.3, 1.6, 1.9, 2.2]}
                    delay={5000}
                  />
                </div>
              </div>
            );
          }}
        >
          <P1>Play 🎮</P1>
        </div>
        <div className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in">
          <Link className="cursor-none" href="/games/leaderboards">
            <P1>RANK BLITZ 🥇</P1>
          </Link>
        </div>
        <div
          className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in"
          onClick={() =>
            setMsg(
              <div
                onClick={() => setMsg(null)}
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.65)] z-50"
              >
                <div className="max-w-[50vw]">
                  <LoadingAnimation
                    elements={[<P1 key={0}>You must log-in first</P1>]}
                    coeffs={[1]}
                    delay={1000}
                  />
                </div>
              </div>
            )
          }
        >
          <P1>LEVEL UP 🎉</P1>
        </div>
      </div>
      <div id="game">
        <MemoryGame />
      </div>
    </div>
  );
}
