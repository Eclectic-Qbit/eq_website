"use client";

import { discordLink, downloadFile } from "@/commonFrontend";
import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import { IndexCard } from "@/components/global/Cards";
import CustomLink from "@/components/global/CustomLink";
import PaintEarn from "@/components/specific/index/PaintEarn";
import { H4 } from "@/components/text/Headers";
import { P1, P2, P3 } from "@/components/text/Paragraphs";
import AuthContext from "@/contexts/AuthContext";
import { useContext, useState } from "react";

export default function PaintAndEarn() {
  const [logged, setLogged] = useState(false);
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="overflow-hidden">
      <div className="pt-20 mx-[10%] text-center flex flex-col justify-center items-center">
        <div className="my-[5%] realtive w-full h-full flex flex-col items-center justify-center gap-2 text-center">
          <MouseMoveGradient
            className="font-extrabold uppercase w-full text-center mb-5"
            from="#9500E9"
            to="#FF6600"
          >
            <H4 translationPath="paintEarn/title/p1" />
            <H4 translationPath="paintEarn/title/p2" />
          </MouseMoveGradient>
          <P2
            className={"text-yellow"}
            translationPath="paintEarn/description"
            style={{ textShadow: "2px 2px 2px black" }}
            spanStyling={{ backgroundColor: "#9500E9", lineHeight: "3.75vh" }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-20">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 className="uppercase" translationPath="paintEarn/howItWorks" />
        </MouseMoveGradient>
        <div className="mx-[5%]">
          <div className="flex flex-wrap text-center mt-20 mb-5 gap-5 items-center justify-center">
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                >
                  <P1 translationPath={"paintEarn/firstCard/front/title"} />
                  <P2
                    translationPath={"paintEarn/firstCard/front/description"}
                  />
                </div>
              }
              retro={
                <div className="h-full w-full flex justify-center items-center">
                  <P1
                    translationPath={"paintEarn/firstCard/back"}
                    className="grayscale hover:scale-[1.5] hover:grayscale-0"
                  />
                </div>
              }
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                >
                  <P1 translationPath={"paintEarn/secondCard/front/title"} />
                  <P2
                    translationPath={"paintEarn/secondCard/front/description"}
                  />
                </div>
              }
              retro={
                <div className="h-full w-full flex justify-center items-center">
                  <P1
                    translationPath={"paintEarn/secondCard/back"}
                    className="grayscale hover:scale-[1.5] hover:grayscale-0"
                  />
                </div>
              }
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                >
                  <P1 translationPath={"paintEarn/thirdCard/front/title"} />
                  <P2
                    translationPath={"paintEarn/thirdCard/front/description"}
                  />
                </div>
              }
              retro={
                <div className="h-full w-full flex justify-center items-center">
                  <P1
                    translationPath={"paintEarn/thirdCard/back"}
                    className="grayscale hover:scale-[1.5] hover:grayscale-0"
                  />
                </div>
              }
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                >
                  <P1 translationPath={"paintEarn/forthCard/front/title"} />
                  <P2
                    translationPath={"paintEarn/forthCard/front/description"}
                  />
                </div>
              }
              retro={
                <div className="h-full w-full flex justify-center items-center">
                  <P1
                    translationPath={"paintEarn/forthCard/back"}
                    className="grayscale hover:scale-[1.5] hover:grayscale-0"
                  />
                </div>
              }
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                >
                  <P1 translationPath={"paintEarn/fifthCard/front/title"} />
                  <P2
                    translationPath={"paintEarn/fifthCard/front/description"}
                  />
                </div>
              }
              retro={
                <div className="h-full w-full flex justify-center items-center">
                  <P1
                    translationPath={"paintEarn/fifthCard/back"}
                    className="grayscale hover:scale-[1.5] hover:grayscale-0"
                  />
                </div>
              }
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                >
                  <P1 translationPath={"paintEarn/sixthCard/front/title"} />
                  <P2
                    translationPath={"paintEarn/sixthCard/front/description"}
                  />
                </div>
              }
              retro={
                <div className="h-full w-full flex justify-center items-center">
                  <P1
                    translationPath={"paintEarn/sixthCard/back"}
                    className="grayscale hover:scale-[1.5] hover:grayscale-0"
                  />
                </div>
              }
            />
          </div>
          <div
            className="flex justify-center lowercase text-center font-bold"
            onClick={() => downloadFile("/paintAndEarn.pdf", "url")}
          >
            <CustomLink className={"w-max"}>
              <P2 className="lowercase" translationPath="paintEarn/digDeep" />
            </CustomLink>
          </div>
          {userInfo ? (
            ""
          ) : (
            <div className="mt-16">
              <CustomLink
                defaultUnderline
                className="cursor-none"
                href={discordLink}
              >
                <P1
                  translationPath={
                    logged ? "paintEarn/loggedPhrase" : "paintEarn/loginPhrase"
                  }
                  className="font-bold text-center lowercase"
                />
              </CustomLink>
            </div>
          )}
        </div>
      </div>
      <div>
        <PaintEarn />
      </div>
    </div>
  );
}
