import ConsoleEffect from "@/components/animations/ConsoleEffect";
import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import ShowOnHover from "@/components/animations/ShowOnHover";
import CircleCanvas from "@/components/backgrounds/CirlceCanvas";
import DottedCanvas from "@/components/backgrounds/DottedCanvas";
import GridCanvas from "@/components/backgrounds/GridCanvas";
import SinusoidalCanvas from "@/components/backgrounds/SinusoidalCanvas";
import EclecticQbit from "@/components/index/EclecticQbit";
import HowWeDo from "@/components/index/HowWeDo";
import PaintEarnFirst from "@/components/index/PaintEarnFirst";
import PaintEarnSecond from "@/components/index/PaintEarnSecond";
import WhatWeDoFirst from "@/components/index/WhatWeDoFirst";
import WhatWeDoSecond from "@/components/index/WhatWeDoSecond";
import TestingCanvas from "@/components/testing/TestingCanvas";
import { H3, H4 } from "@/components/text/Headers";
import { P2 } from "@/components/text/Paragraphs";
export default function Home() {
  return (
    <>
      <div className="relative flex flex-col pt-[17.5vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <TestingCanvas />
        </div>
        {/* Content */}
        <div>
          <div className="absolute top-[50vh] -left-[150px] w-min h-min">
            <CircleCanvas x={150} y={150} r={150} />
          </div>
          <EclecticQbit />
        </div>
        <div className="relative flex flex-col gap-20">
          <div className="absolute top-[20vh] right-[0vw] w-min h-min overflow-hidden">
            <SinusoidalCanvas w={400} h={30} freq={0.03} />
          </div>
          <div>
            <MouseMoveGradient
              className="font-extrabold uppercase w-full"
              from="#9500E9"
              to="#FF6600"
            >
              <H4 translationPath="whatWeDo/title/p1" />
              <H3 translationPath="whatWeDo/title/p2" />
            </MouseMoveGradient>
            <ShowOnHover>
              <P2
                style={{ textShadow: "1px 1px 2px white" }}
                translationPath="whatWeDo/h2"
                className="text-purple font-bold uppercase"
              />
              <ConsoleEffect
                style={{ textShadow: "2px 2px 2px black" }}
                className="text-yellow font-bold"
                additionalChar="_"
                placeholderChar="$ "
                content={{ content: "whatWeDo/p2", type: "ref" }}
              />
            </ShowOnHover>
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
        <div className="relative">
          <div className="absolute bottom-0 right-[0vw] w-min h-min overflow-hidden">
            <GridCanvas w={400} h={400} cols={10} rows={10} />
          </div>
          <HowWeDo />
        </div>
        <div>
          {/* NOT READY 
          <PaintEarnFirst />
          <PaintEarnSecond />
          */}
        </div>
      </div>
    </>
  );
}
