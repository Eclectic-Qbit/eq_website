import HowWeDo from "@/components/index/HowWeDo";
import MarketingArtists from "@/components/index/MarketingArtists";
import PaintEarnFirst from "@/components/index/PaintEarnFirst";
import PaintEarnSecond from "@/components/index/PaintEarnSecond";
import PhasesSecond from "@/components/index/PhasesSecond";
import PhasesFirst from "@/components/index/PhasesFirst";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 text-xl">
        <PaintEarnFirst />
        <PaintEarnSecond />
        <MarketingArtists />
        <HowWeDo />
        <PhasesFirst />
        <PhasesSecond />
      </div>
    </>
  );
}
