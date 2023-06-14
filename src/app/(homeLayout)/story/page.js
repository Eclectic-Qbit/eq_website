"use client";

import { isDesktop } from "@/commonFrontend";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import LineCanvas from "@/components/backgrounds/LineCanvas";
import { H4 } from "@/components/text/Headers";
import { P1, P2, P3 } from "@/components/text/Paragraphs";
import { useCallback, useEffect, useState } from "react";

export default function Story() {
  const [desktop, setDesktop] = useState(true);
  const [width, setWidth] = useState(1920);
  const handleResize = useCallback(() => {
    const bool = isDesktop(window.innerWidth);
    if (bool !== desktop) {
      setDesktop(bool);
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
      <LoadingAnimation
        style={{ textShadow: "2px 2px 1px black" }}
        stopFade
        elements={
          desktop
            ? [
                <H4 key={0} className={"uppercase font-extrabold text-center"}>
                  why eclectic?
                </H4>,
                <P2 key={1} className="mt-3 text-left">
                  eclectic because we wholeheartedly embrace a diverse range of
                  influences, ideas, and perspectives
                </P2>,
                <P2 key={2} className="mt-3 text-right">
                  eclectic because we adopt a collaborative and inclusive
                  mindset
                </P2>,
                <P2 key={3} className="mt-3 text-left">
                  eclectic is our team, with diversity of backgrounds and inputs
                </P2>,
                <P2 key={4} className="mt-3 text-right">
                  eclectic to achieve comprehensive and inclusive results
                </P2>,
                <H4
                  key={5}
                  className={"uppercase font-extrabold text-center mt-6"}
                >
                  why qbit?
                </H4>,
                <P2 key={6} className="mt-3 text-left">
                  like a qbit that defies conventional states, we break through
                  limitations to process information with unprecedented
                  potential
                </P2>,
                <P2 key={7} className="mt-3 text-right">
                  through entanglement, we forge instant connections, fostering
                  collaboration and unlocking a network of infinite
                  possibilities.
                </P2>,
                <P2 key={8} className="mt-3 text-left">
                  guided by the quantum interplay of interference, we harmonize
                  diverse perspectives to cultivate groundbreaking innovations,
                  embracing the realm of boundless exploration
                </P2>,
              ]
            : [
                <P1 key={0} className={"uppercase font-extrabold"}>
                  why eclectic?
                </P1>,
                <P3 key={1} className="mt-2">
                  eclectic because we wholeheartedly embrace a diverse range of
                  influences, ideas, and perspectives
                </P3>,
                <P3 key={2} className="mt-2">
                  eclectic because we adopt a collaborative and inclusive
                  mindset
                </P3>,
                <P3 key={3} className="mt-2">
                  eclectic is our team, with diversity of backgrounds and inputs
                </P3>,
                <P3 key={4} className="mt-2">
                  eclectic to achieve comprehensive and inclusive results
                </P3>,
                <P1 key={5} className={"uppercase font-extrabold mt-4"}>
                  why qbit?
                </P1>,
                <P3 key={6} className="mt-2">
                  like a qbit that defies conventional states, we break through
                  limitations to process information with unprecedented
                  potential
                </P3>,
                <P3 key={7} className="mt-2">
                  through entanglement, we forge instant connections, fostering
                  collaboration and unlocking a network of infinite
                  possibilities.
                </P3>,
                <P3 key={8} className="mt-2">
                  guided by the quantum interplay of interference, we harmonize
                  diverse perspectives to cultivate groundbreaking innovations,
                  embracing the realm of boundless exploration
                </P3>,
              ]
        }
        coeffs={[1, 1.2, 1.2, 1.2, 1.2, 1.1, 1.3, 1.3, 1.3]}
        delay={10000}
        className="relative z-10 top-0 left-0 w-screen h-full bg-transparent flex items-center justify-center text-white px-[5%] sm:px-[10%]"
        onFade={() => {}}
      />
    </div>
  );
}
