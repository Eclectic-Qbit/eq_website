"use client";

import LoadingAnimation from "@/components/animations/LoadingAnimation";
import CustomLink from "@/components/global/CustomLink";
import { P1, P2 } from "@/components/text/Paragraphs";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import ResizeContext from "@/contexts/ResizeContext";
import settings from "@/frontendSettings";
import { useContext, useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [msg, setMsg] = useState(null);
  const { winSize, setWinSize } = useContext(ResizeContext);
  const { page } = useContext(CurrentPageContext);
  const routerLink = ["/games/levelUp", "/games/leaderboards", "/games"];
  useEffect(() => {
    setWinSize({ innerW: window.innerWidth });
  }, [setWinSize]);
  return (
    <div>
      {msg && msg}
      <div
        className={`${
          winSize && winSize.innerW > settings.mobileView
            ? "fixed top-0 left-0 pb-10  border-l-2 border-solid border-white bg-black h-screen"
            : "top-24 relative flex-wrap flex-col left-[50%] -translate-x-[50%]"
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
        {routerLink.includes(page) ? (
          <CustomLink noUnderline href={"/games"}>
            <P2
              className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in"
              translationPath={"gamesPage/menu/play"}
            />
          </CustomLink>
        ) : (
          <div
            className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in"
            onClick={() => {
              document
                .querySelector("#game")
                .scrollIntoView({ behavior: "smooth" });
              setMsg(
                <LoadingAnimation
                  elements={[
                    <P1
                      key={0}
                      className={"uppercase"}
                      translationPath={"gamesPage/tutorial/first"}
                    />,
                    <P2
                      key={1}
                      className={"lowercase"}
                      translationPath={"gamesPage/tutorial/second"}
                    />,
                    <P2
                      key={2}
                      className={"lowercase"}
                      translationPath={"gamesPage/tutorial/third"}
                    />,
                    <P2
                      key={3}
                      className={"lowercase"}
                      translationPath={"gamesPage/tutorial/forth"}
                    />,
                  ]}
                  coeffs={[1, 1.3, 1.6, 1.9, 2.2]}
                  delay={5000}
                  fadeDuration={750}
                  onFade={() => setMsg(null)}
                  className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.65)] z-30 flex items-center justify-center text-white text-center px-[10%]"
                />
              );
            }}
          >
            <P2
              className={"uppercase"}
              translationPath={"gamesPage/menu/play"}
            />
          </div>
        )}

        <div className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in">
          <CustomLink className="cursor-none" href="/games/leaderboards">
            <P2
              className={"uppercase"}
              translationPath={"gamesPage/menu/ranking"}
            />
          </CustomLink>
        </div>
        <div className="sm:border-y-2 sm:px-2 sm:py-2 sm:hover:invert border-solid border-white py-1 bg-black transition-all duration-150 ease-in">
          <CustomLink className="cursor-none" href={"/games/levelUp"}>
            <P2
              className={"uppercase"}
              translationPath={"gamesPage/menu/levelUp"}
            />
          </CustomLink>
        </div>
      </div>
      <div className="h-max w-full flex justify-center items-center">
        <div className="max-w-[90%]">{children}</div>
      </div>
    </div>
  );
}
