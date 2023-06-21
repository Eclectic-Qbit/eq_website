"use client";

import { isDesktop } from "@/commonFrontend";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import GridCanvas from "@/components/backgrounds/GridCanvas";
import { H4 } from "@/components/text/Headers";
import { P1, P2, P3 } from "@/components/text/Paragraphs";
import { useCallback, useEffect, useState } from "react";

export default function Story() {
  const [content, setContent] = useState([]);
  const [desktop, setDesktop] = useState(true);
  const [width, setWidth] = useState(1920);
  const [gridDims, setGridDims] = useState(100);
  const handleResize = useCallback(() => {
    const bool = isDesktop(window.innerWidth);
    if (bool !== desktop) {
      setDesktop(bool);
    }
    if (window.innerWidth >= window.innerHeight) {
      setGridDims(window.innerHeight / 2);
    } else {
      setGridDims(window.innerWidth / 2);
    }
  }, [desktop]);
  useEffect(() => {
    handleResize();
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <div className="relative pt-24 pb-16 min-h-screen items-center justify-center flex flex-col gap-6 overflow-hidden">
      {/*
      <div className="absolute bottom-0 right-[120px] -rotate-45 invisible sm:visible">
        <div className="absolute top-0 left-0 -rotate-0">
            <LineCanvas w={width} h={4} rows={6} spacingX={5} spacingY={15} />
          </div>
        </div>
        <div className="absolute top-[200px] -left-[125px] -rotate-45 invisible sm:visible">
          <div className="absolute top-0 left-0 -rotate-0">
            <LineCanvas w={width} h={4} rows={6} spacingX={5} spacingY={15} />
          </div>
        </div>
        <div className="absolute bottom-[250px] -left-[130px] rotate-45 invisible sm:visible">
          <div className="absolute top-0 left-0 -rotate-0">
            <LineCanvas w={width} h={4} rows={6} spacingX={5} spacingY={15} />
        </div>
      </div>
      */}
      <div className="absolute bottom-0 right-[0vw] w-min h-min overflow-hidden">
        <GridCanvas w={gridDims} h={gridDims} cols={9} rows={9} />
      </div>
      <LoadingAnimation
        style={{ textShadow: "2px 2px 1px black" }}
        stopFade
        elements={
          desktop
            ? [
                <H4
                  key={0}
                  className={"uppercase font-extrabold text-center"}
                  translationPath="story/whyEclectic"
                />,
                <P2
                  key={1}
                  className="mt-3 text-left pr-[50%]"
                  translationPath="story/firstP"
                />,
                <P2
                  key={2}
                  className="mt-3 text-right pl-[50%]"
                  translationPath="story/secondP"
                />,
                <P2
                  key={3}
                  className="mt-3 text-left pr-[50%]"
                  translationPath="story/thirdP"
                />,
                <H4
                  key={5}
                  className={"uppercase font-extrabold text-center mt-6"}
                  translationPath="story/whyQbit"
                />,
                <P2
                  key={6}
                  className="mt-3 text-left  pr-[50%]"
                  translationPath="story/forthP"
                />,
                <P2
                  key={7}
                  className="mt-3 text-right  pl-[50%]"
                  translationPath="story/fifthP"
                />,
                <P2
                  key={8}
                  className="mt-3 text-left pr-[50%]"
                  translationPath="story/sixthP"
                />,
              ]
            : [
                <P1 key={0} className={"uppercase font-extrabold text-center"}>
                  why eclectic?
                </P1>,
                <P3 key={1} className="mt-2 text-center">
                  eclectic because we wholeheartedly embrace a diverse range of
                  influences, ideas, and perspectives, adopting a collaborative
                  and inclusive mindset
                </P3>,
                <P3 key={2} className="mt-2 text-center">
                  eclectic is our team, with diversity of backgrounds and inputs
                </P3>,
                <P3 key={3} className="mt-2 text-center">
                  eclectic to achieve comprehensive and inclusive results
                </P3>,
                <P1
                  key={5}
                  className={"uppercase font-extrabold mt-4 text-center"}
                >
                  why qbit?
                </P1>,
                <P3 key={6} className="mt-2 text-center">
                  like a qbit that defies conventional states, we break through
                  limitations to process information with unprecedented
                  potential
                </P3>,
                <P3 key={7} className="mt-2 text-center">
                  through entanglement, we forge instant connections, fostering
                  collaboration and unlocking a network of infinite
                  possibilities
                </P3>,
                <P3 key={8} className="mt-2 text-center">
                  guided by the quantum interplay of interference, we harmonize
                  diverse perspectives to cultivate groundbreaking innovations,
                  embracing the realm of boundless exploration
                </P3>,
              ]
        }
        coeffs={[1, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2]}
        delay={7000}
        className="relative z-10 top-0 left-0 w-screen h-full bg-transparent flex items-center justify-center text-white px-[5%] sm:px-[10%]"
        onFade={() => {}}
      />
    </div>
  );
}
