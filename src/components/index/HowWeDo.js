"use client";

import ConsoleEffect from "../animations/ConsoleEffect";
import ShowOnHover from "../animations/ShowOnHover";
import { H2, H3, H4, H9 } from "../text/Headers";
import { P1, P2 } from "../text/Paragraphs";

export default function HowWeDo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-4 w-full max-w-[130rem]">
        <div className="font-extrabold uppercase mb-8 text-center text-purple">
          <H3 translationPath="howWeDo/title/p1" />
          <H2 translationPath="howWeDo/title/p2" />
        </div>
        <div className="flex flex-col mx-[5%] items-center justify-center lowercase gap-1">
          <ShowOnHover>
            <P2 translationPath="howWeDo/h1" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p1", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h2" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p2", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h3" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p3", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h4" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p4", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h5" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p5", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h6" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p6", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h7" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p7", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h8" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p8", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h9" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p9", type: "ref" }}
            />
          </ShowOnHover>
          <ShowOnHover>
            <P2 translationPath="howWeDo/h10" className="text-orange" />
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content={{ content: "howWeDo/p10", type: "ref" }}
            />
          </ShowOnHover>
        </div>
      </div>
    </div>
  );
}
