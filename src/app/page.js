import HowWeDo from "@/components/index/HowWeDo";
import PaintEarnFirst from "@/components/index/PaintEarnFirst";
import PaintEarnSecond from "@/components/index/PaintEarnSecond";
import WhatWeDoFirst from "@/components/index/WhatWeDoFirst";
import WhatWeDoSecond from "@/components/index/WhatWeDoSecond";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-20">
          <WhatWeDoFirst />
          <WhatWeDoSecond />
        </div>
        <div>
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
