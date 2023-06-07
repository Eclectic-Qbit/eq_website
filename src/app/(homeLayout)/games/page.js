"use client";

import LoadingAnimation from "@/components/animations/LoadingAnimation";
import MemoryGame from "@/components/gamification/MemoryGame";
import CustomLink from "@/components/global/CustomLink";
import { P1, P2 } from "@/components/text/Paragraphs";
import { useState } from "react";
export default function Games() {
  const [msg, setMsg] = useState(null);
  return (
    <div className="w-full h-full min-h-screen gap-10 flex flex-col items-center justify-center pt-24 pb-8">
      {msg && msg}
      <div className="flex gap-3 font-extrabold uppercase">
        <div
          onClick={() => {
            document
              .querySelector("#game")
              .scrollIntoView({ behavior: "smooth" });
            setMsg(
              <div
                onClick={() => setMsg(null)}
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.65)] z-50"
              >
                <div className="max-w-[50vw]">
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
                    delay={1000}
                  />
                </div>
              </div>
            );
          }}
        >
          <CustomLink>
            <P1>Play 🎮</P1>
          </CustomLink>
        </div>
        <div>
          <CustomLink href="/games/leaderboards">
            <P1>Classify 🥇</P1>
          </CustomLink>
        </div>
        <div
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
          <CustomLink>
            <P1>Win 🎉</P1>
          </CustomLink>
        </div>
      </div>
      <div id="game">
        <MemoryGame />
      </div>
    </div>
  );
}
