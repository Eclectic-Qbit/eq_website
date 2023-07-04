import Link from "next/link";
import { MouseMoveGradient } from "../../animations/MouseMoveAnimations";
import { H1, H2, H2SP, H3, H4, H5, H6, H7, H8, H9 } from "../../text/Headers";
import { P1, P2, P3, P4 } from "../../text/Paragraphs";
import Image from "next/image";
import ImgDante from "../../../../public/images/latestDante.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import ScrollContext from "@/contexts/ScrollContext";
import settings from "@/frontendSettings";
import { DanteCard } from "@/components/global/Cards";
import StarWarsEffect from "@/components/animations/StarWarsEffect";

export default function EclecticQbit() {
  const parentRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const { scroll } = useContext(ScrollContext);
  useEffect(() => {
    if (window.innerWidth > settings.mobileView) {
      const parentDistance =
        window.innerHeight / 2 - parentRef.current.getBoundingClientRect().y;
      setTranslateY(parentDistance * 0.15);
    } else {
      setTranslateY(0);
    }
  }, [scroll]);
  return (
    <div className="relative w-full min-h-screen ">
      <div className="flex flex-wrap items-center justify-evenly font-extrabold uppercase w-full gap-y-10 mb-4">
        <MouseMoveGradient className="text-center" from="#9500E9" to="#FF6600">
          <H3 translationPath="eclecticQbit/title/p1" />
          <H3 translationPath="eclecticQbit/title/p2" />
        </MouseMoveGradient>
        <DanteCard>
          <Image
            sizes="100%"
            src={ImgDante}
            fill
            priority
            alt="Cat Logo"
            className="grayscale hover:grayscale-0 transition rounded-xl cursor-none"
          />
        </DanteCard>
      </div>
      <StarWarsEffect>
        <div className="mb-4">
          <div
            ref={parentRef}
            className="realtive w-full h-full flex items-center justify-center gap-2 text-center z-10"
          >
            <div
              style={{ transform: `translateY(${translateY}px)` }}
              className="w-2/3 grid gap-5 mb-[2.5%]"
            >
              <P1
                style={{ textShadow: "1px 1px 1px white" }}
                translationPath="eclecticQbit/h1"
                className="text-purple uppercase font-bold mt-[2.5%]"
              />
              <P2
                style={{ textShadow: "2px 2px 2px black" }}
                translationPath="eclecticQbit/p1"
                className="text-yellow"
              />
            </div>
          </div>
        </div>
      </StarWarsEffect>
    </div>
  );
}
