import Link from "next/link";
import Image from "next/image";
import { H2, H3, H4, H9 } from "../text/Headers";
import { P1, P2, P3, P4 } from "../text/Paragraphs";

export default function WhatWeDoFirst() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full">
        <div className="flex flex-wrap gap-8 mt-[5%] mx-[5%]">
          <div className="flex flex-col justify-center gap-9 max-w-2xl xl:max-w-4xl">
            <div className="font-extrabold uppercase w-full bg-clip-text text-transparent bg-gradient-to-tr from-orange to-purple">
              <H4 translationPath="whatWeDo/title/p1" />
              <H3 translationPath="whatWeDo/title/p2" />
            </div>
            <div className="flex flex-wrap gap-3 lowercase w-full">
              <div className="grid gap-2">
                <P3 translationPath="whatWeDo/h2" className="text-orange" />
                <P4 translationPath="whatWeDo/p2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
