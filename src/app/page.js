import HowWeDo from "@/components/index/HowWeDo";
import PaintEarnFirst from "@/components/index/PaintEarnFirst";
import PaintEarnSecond from "@/components/index/PaintEarnSecond";
import WhatWeDoFirst from "@/components/index/WhatWeDoFirst";
import WhatWeDoSecond from "@/components/index/WhatWeDoSecond";
export default function Home() {
  return (
    <>
      <div className="">
        <div>
          <WhatWeDoFirst />
          <WhatWeDoSecond />
        </div>
        <HowWeDo />
        <div>
          <PaintEarnFirst />
          <PaintEarnSecond />
        </div>
      </div>
    </>
  );
}
