import { useState } from "react";
import { MouseMoveGradient } from "../animations/MouseMoveAnimations";
import { H3, H4 } from "../text/Headers";
import { P2 } from "../text/Paragraphs";
import ConsoleEffect from "../animations/ConsoleEffect";
import PaintEarnImgs from "../specific/paintEarn/PaintEarnImgs";

export default function PaintEarn() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="relative flex items-center justify-center pb-[10vh]">
      <div className="grid gap-6 mx-[15%]">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 translationPath="paintEarn/title/p1" />
          <H3 translationPath="paintEarn/title/p2" />
        </MouseMoveGradient>
        <P2
          style={{ textShadow: "1px 1px 2px white" }}
          translationPath="paintEarn/h2"
          className="text-purple text-center font-bold uppercase"
        />
        <div className="flex justify-center items-center gap-10 uppercase font-extrabold text-center ">
          <div className="relative w-full max-w-[15rem] sm:max-w-[40rem] flex flex-col gap-10 sm:grid sm:grid-cols-2">
            <PaintEarnImgs selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <ConsoleEffect
          delta={15}
          style={{
            textShadow: "2px 2px 2px black",
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
          className="text-yellow font-bold"
          content={{
            content: `paintEarn/${selected ? selected : "artist"}`,
            type: "ref",
          }}
          active={selected}
          spanStyling={{ backgroundColor: "#9500E9", lineHeight: "24px" }}
        />
      </div>
    </div>
  );
}
