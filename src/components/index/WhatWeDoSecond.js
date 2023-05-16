import { H9 } from "../text/Headers";
import { P1, P2, P4 } from "../text/Paragraphs";

export default function WhatWeDoSecond() {
  return (
    <div className="relative flex justify-center">
      <div className="flex flex-wrap gap-3 mx-[15%] max-w-[130rem] lowercase">
        <div className="grid gap-2">
          <P2 translationPath="whatWeDo/h3" className="text-orange" />
          <P4 translationPath="whatWeDo/p3" />
        </div>
        <div className="grid gap-2">
          <P2 translationPath="whatWeDo/h4" className="text-orange" />
          <P4 translationPath="whatWeDo/p4" />
        </div>
        <div className="grid gap-2">
          <P2 translationPath="whatWeDo/h5" className="text-orange" />
          <P4 translationPath="whatWeDo/p5" />
        </div>
      </div>
    </div>
  );
}
