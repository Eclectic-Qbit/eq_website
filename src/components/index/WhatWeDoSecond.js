import { P1, P2, P4 } from "../text/Paragraphs";

export default function WhatWeDoSecond() {
  return (
    <div className="relative flex justify-center">
      <div className="flex flex-wrap gap-3 mx-[15%] max-w-[130rem] lowercase">
        <div className="grid gap-2">
          <P2 translationPath="whatWeDo/h3" className="text-pink font-bold" />
          <P4 translationPath="whatWeDo/p3" className="text-yellow" />
        </div>
        <div className="grid gap-2">
          <P2 translationPath="whatWeDo/h4" className="text-yellow font-bold" />
          <P4 translationPath="whatWeDo/p4" className="text-white" />
        </div>
        <div className="grid gap-2">
          <P2 translationPath="whatWeDo/h5" className="text-orange font-bold" />
          <P4 translationPath="whatWeDo/p5" className="text-yellow" />
        </div>
      </div>
    </div>
  );
}
