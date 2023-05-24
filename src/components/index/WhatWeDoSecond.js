import ConsoleEffect from "../animations/ConsoleEffect";
import ShowOnHover from "../animations/ShowOnHover";
import { P1, P2, P4 } from "../text/Paragraphs";

export default function WhatWeDoSecond() {
  return (
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
  );
}
