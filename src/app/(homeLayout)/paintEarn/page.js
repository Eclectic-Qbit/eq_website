"use client";

import ConsoleEffect from "@/components/animations/ConsoleEffect";
import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import { IndexCard } from "@/components/global/Cards";
import CustomLink from "@/components/global/CustomLink";
import PaintEarn from "@/components/specific/index/PaintEarn";
import { H1, H2, H4 } from "@/components/text/Headers";
import { P1, P2 } from "@/components/text/Paragraphs";
import Link from "next/link";

export default function PaintAndEarn() {
  return (
    <div className="mt-20 overflow-hidden">
      <div className="mx-[10%] text-center ">
        <div
          style={{ transform: "perspective(300px) rotateX(20deg)" }}
          className="my-[5%] realtive w-full h-full flex flex-col items-center justify-center gap-2 text-center"
        >
          <MouseMoveGradient
            className="font-extrabold uppercase w-full text-center"
            from="#9500E9"
            to="#FF6600"
          >
            <H4 translationPath="paintEarn/title/p1" />
            <H4 translationPath="paintEarn/title/p2" />
          </MouseMoveGradient>
          <P2
            className={"text-yellow"}
            translationPath="paintEarn/description"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center my-20">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 className="uppercase" translationPath="paintEarn/howItWorks" />
        </MouseMoveGradient>
        <div className="">
          <div className="flex flex-wrap text-center my-20 gap-5 items-center justify-center grayscale text-[#C0C0C0]">
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly"
                >
                  <P1 translationPath={"paintEarn/firstCard/title"} />
                  <P2 translationPath={"paintEarn/firstCard/description"} />
                </div>
              }
              retro={<P1>Link</P1>}
              pass={{
                retro: ["forceActiveWhenRotate"],
              }}
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly"
                >
                  <P1 translationPath={"paintEarn/secondCard/title"} />
                  <P2 translationPath={"paintEarn/secondCard/description"} />
                </div>
              }
              retro={<P1>Link</P1>}
              pass={{
                retro: ["forceActiveWhenRotate"],
              }}
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly"
                >
                  <P1 translationPath={"paintEarn/thirdCard/title"} />
                  <P2 translationPath={"paintEarn/thirdCard/description"} />
                </div>
              }
              retro={<P1>Link</P1>}
              pass={{
                retro: ["forceActiveWhenRotate"],
              }}
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly"
                >
                  <P1 translationPath={"paintEarn/forthCard/title"} />
                  <P2 translationPath={"paintEarn/forthCard/description"} />
                </div>
              }
              retro={<P1>Link</P1>}
              pass={{
                retro: ["forceActiveWhenRotate"],
              }}
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly"
                >
                  <P1 translationPath={"paintEarn/fifthCard/title"} />
                  <P2 translationPath={"paintEarn/fifthCard/description"} />
                </div>
              }
              retro={<P1>Link</P1>}
              pass={{
                retro: ["forceActiveWhenRotate"],
              }}
            />
            <IndexCard
              form={"square"}
              front={
                <div
                  style={{ textShadow: "1px 1px 1px white" }}
                  className="h-full font-bold uppercase flex flex-col justify-evenly"
                >
                  <P1 translationPath={"paintEarn/sixthCard/title"} />
                  <P2 translationPath={"paintEarn/sixthCard/description"} />
                </div>
              }
              retro={<P1>Link</P1>}
              pass={{
                retro: ["forceActiveWhenRotate"],
              }}
            />
          </div>
          <div>
            <CustomLink
              defaultUnderline
              className="cursor-none"
              href={"/login"}
            >
              <P1 className="font-bold text-center">
                To complete this objectives please Log In!
              </P1>
            </CustomLink>
          </div>
        </div>
      </div>
      <div>
        <PaintEarn />
      </div>
    </div>
  );
}
