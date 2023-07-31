import { IndexCard } from "@/components/global/Cards";
import ConsoleEffect from "../../animations/ConsoleEffect";
import { MouseMoveGradient } from "../../animations/MouseMoveAnimations";
import { H3, H4, H6 } from "../../text/Headers";
import { P1, P1SP, P2, P4 } from "../../text/Paragraphs";

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
          <H4 translationPath="whatWeDo/title/p2" />
        </MouseMoveGradient>
      </div>
      <div className="relative flex justify-center">
        <div className="grid 2xl:grid-cols-2 justify-center items-center mt-4 gap-4 sm:gap-12 lowercase">
          <IndexCard
            front={
              <div>
                <P1
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/community/h1"
                  className="text-white font-bold uppercase"
                />
                <br />
                <P2
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/community/h2"
                  className="text-white font-bold lowercase"
                />
              </div>
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-4 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/community/p", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
          <IndexCard
            front={
              <div>
                <P1
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/gamification/h1"
                  className="text-white font-bold uppercase"
                />
                <br />
                <P2
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/gamification/h2"
                  className="text-white font-bold lowercase"
                />
              </div>
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-2 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/gamification/p", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
          <IndexCard
            front={
              <div>
                <P1
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/grey/h1"
                  className="text-white font-bold uppercase"
                />
                <br />
                <P2
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/grey/h2"
                  className="text-white font-bold lowercase"
                />
              </div>
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-2 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/grey/p", type: "ref" }}
              />
            }
            pass={{
              retro: ["forceActiveWhenRotate"],
            }}
          />
          <IndexCard
            front={
              <div>
                <P1
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/refi/h1"
                  className="text-white font-bold uppercase"
                />
                <br />
                <P2
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/refi/h2"
                  className="text-white font-bold lowercase"
                />
              </div>
            }
            retro={
              <ConsoleEffect
                onHover
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow grid gap-2 text-center"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/refi/p", type: "ref" }}
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
