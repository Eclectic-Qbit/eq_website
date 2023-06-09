import { IndexCard } from "@/components/global/Cards";
import ConsoleEffect from "../../animations/ConsoleEffect";
import { MouseMoveGradient } from "../../animations/MouseMoveAnimations";
import { H3, H4, H6 } from "../../text/Headers";
import { P1, P2, P4 } from "../../text/Paragraphs";

export default function WhatWeDo() {
  return (
    <div className="relative z-10 mb-10 sm:mb-20">
      <div className="grid gap-6 mb-10">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 translationPath="whatWeDo/title/p1" />
          <H3 translationPath="whatWeDo/title/p2" />
        </MouseMoveGradient>
      </div>
      <div className="relative flex justify-center">
        <div className="flex flex-wrap justify-center items-center mt-4 gap-4 lowercase">
          <IndexCard
            front={
              <P1
                style={{ textShadow: "1px 1px 2px white" }}
                translationPath="whatWeDo/h2"
                className="text-white font-bold uppercase"
              />
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-4 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/p2", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
          <IndexCard
            front={
              <P1
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="whatWeDo/h3"
                className="text-white font-bold uppercase"
              />
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-2 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/p3", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
          <IndexCard
            front={
              <P1
                style={{
                  textShadow: "1px 1px 1px white",
                }}
                translationPath="whatWeDo/h4"
                className="text-white font-bold uppercase w-full"
              />
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-2 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/p4", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
          <IndexCard
            front={
              <P1
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="whatWeDo/h5"
                className="text-white font-bold uppercase"
              />
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-2 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/p5", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
        </div>
      </div>
    </div>
  );
}
