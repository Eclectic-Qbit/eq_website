import ConsoleEffect from "../animations/ConsoleEffect";
import { MouseMoveGradient } from "../animations/MouseMoveAnimations";
import ShowOnHover from "../animations/ShowOnHover";
import { H3, H4 } from "../text/Headers";
import { P1, P2, P4 } from "../text/Paragraphs";

export default function WhatWeDo() {
  return (
    <div>
      <div className="ml-[5%] mr-[25%] max-w-[130rem] grid gap-6">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 translationPath="whatWeDo/title/p1" />
          <H3 translationPath="whatWeDo/title/p2" />
        </MouseMoveGradient>
        <ShowOnHover>
          <P2
            style={{ textShadow: "1px 1px 2px white" }}
            translationPath="whatWeDo/h2"
            className="text-purple font-bold uppercase"
          />
          <ConsoleEffect
            style={{ textShadow: "2px 2px 2px black" }}
            className="text-yellow font-bold"
            additionalChar="_"
            placeholderChar="$ "
            content={{ content: "whatWeDo/p2", type: "ref" }}
          />
        </ShowOnHover>
      </div>
      <div className="relative flex justify-center">
        <div className="flex flex-wrap gap-3 mt-3 mx-[15%] max-w-[130rem] lowercase">
          <ShowOnHover>
            <P2
              style={{ textShadow: "1px 1px 1px white" }}
              translationPath="whatWeDo/h3"
              className="text-purple font-bold uppercase"
            />
            <ConsoleEffect
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow font-bold"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "whatWeDo/p3", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2
              style={{ textShadow: "1px 1px 1px white" }}
              translationPath="whatWeDo/h4"
              className="text-purple font-bold uppercase"
            />
            <ConsoleEffect
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow font-bold"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "whatWeDo/p4", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2
              style={{ textShadow: "1px 1px 1px white" }}
              translationPath="whatWeDo/h5"
              className="text-purple font-bold uppercase"
            />
            <ConsoleEffect
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow font-bold"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "whatWeDo/p5", type: "ref" }}
            />
          </ShowOnHover>
        </div>
      </div>
    </div>
  );
}
