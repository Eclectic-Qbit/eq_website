"use client";

import ConsoleEffect from "../../animations/ConsoleEffect";
import { MouseMoveGradient } from "../../animations/MouseMoveAnimations";
import { H2, H3, H4, H9 } from "../../text/Headers";
import { P1, P2 } from "../../text/Paragraphs";

export default function HowWeDo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-4 w-full max-w-[130rem]">
        <MouseMoveGradient
          className="relative font-extrabold uppercase mb-8 text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 translationPath="howWeDo/title/p1" />
          <H3 translationPath="howWeDo/title/p2" />
        </MouseMoveGradient>
        <div className="relative flex flex-col mx-[5%] items-center justify-start lowercase gap-2">
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p1", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h1"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2  w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p2", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h2"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2  w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p3", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h3"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p4", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h4"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p5", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h5"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p6", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h6"
                className="text-purple font-bold uppercase bg-blac"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p7", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h7"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p8", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h8"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
          <div className="grid gap-2 w-full h-full">
            <ConsoleEffect
              onHover
              style={{ textShadow: "2px 2px 2px black" }}
              className="text-yellow grid gap-2"
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p9", type: "ref" }}
            >
              <P2
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="howWeDo/h9"
                className="text-purple font-bold uppercase"
              />
            </ConsoleEffect>
          </div>
        </div>
      </div>
    </div>
  );
}
