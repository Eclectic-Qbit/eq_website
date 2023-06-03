"use client";

import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import WritingEffect from "@/components/animations/WritingEffect";
import { TwitterLogo } from "@/components/logos/BorderLogo";
import {
  DiscordLogo,
  MediumLogo,
  RedditLogo,
} from "@/components/logos/FullLogo";
import StickySection from "@/components/specific/brojects/StickySection";
import { H10, H3, H4, H8, H9 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Brojects() {
  const DEFAULT_TEXT =
    "welcome in the brojects page \n here you'll find all 'project' \n plz tab find a cooler description xD";
  const [text, setText] = useState(DEFAULT_TEXT);
  const changeVisibility = useCallback((newText) => {
    setText(newText);
  }, []);
  return (
    <div className="relative w-full h-full">
      <MouseMoveGradient
        className="w-auto text-center mx-auto uppercase font-extrabold mt-16"
        from="#9500E9"
        to="#FF6600"
      >
        <H3>Brojects</H3>
      </MouseMoveGradient>
      <div className="mt-10 p-10 flex gap-4">
        <div className="flex flex-col w-1/3 h-full gap-32">
          <StickySection
            className="mt-[100vh]"
            changeVisibility={changeVisibility}
            texts={{
              visible:
                "stakeame is a very cool very nice project \n tab plz help c.c",
              invisible: DEFAULT_TEXT,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-10">
              <H8>Stakeame</H8>
              <div className="relative w-64 aspect-[20/9]">
                <Link href="https://stakea.me">
                  <Image src="/images/stakeame.jpeg" alt="stameame" fill />
                </Link>
              </div>
              <div className="relative w-full h-full flex flex-wrap justify-center items-center gap-5">
                <DiscordLogo width={"3rem"} height={"100%"} fill={"white"} />
                <TwitterLogo width={"3rem"} height={"100%"} fill={"white"} />
                <MediumLogo width={"3rem"} height={"100%"} fill={"white"} />
                <RedditLogo width={"3rem"} height={"100%"} fill={"white"} />
              </div>
            </div>
          </StickySection>
        </div>
        <div className="sticky top-0 w-full h-full py-20 ">
          <div className=" m-10 p-10  border-2 border-solid border-white">
            <P1>
              <WritingEffect
                defaultPhrase=""
                phrases={[text]}
                duration={2250}
                timeoutBetween={1500}
                additionalChar={"_"}
                stop={true}
              />
            </P1>
          </div>
        </div>
      </div>
    </div>
  );
}
