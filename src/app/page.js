import HowWeDo from "@/components/index/HowWeDo";
import PaintEarnFirst from "@/components/index/PaintEarnFirst";
import PaintEarnSecond from "@/components/index/PaintEarnSecond";
import WhatWeDoFirst from "@/components/index/WhatWeDoFirst";
import WhatWeDoSecond from "@/components/index/WhatWeDoSecond";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 text-xl">
        <WhatWeDoFirst />
        <WhatWeDoSecond />
        <HowWeDo />
        <PaintEarnFirst />
        <PaintEarnSecond />
      </div>
    </>
  );
}
