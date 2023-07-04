import { H2, H4, H5, H8 } from "@/components/text/Headers";
import { P2, P3, P4 } from "@/components/text/Paragraphs";
import eth_image from "../../../../public/images/ethBarcelona.gif";
import barcelona from "../../../../public/images/barcelona.jpg";
import Image from "next/image";
import Link from "next/link";
import ImgEnry from "../../../../public/images/team/3.png";

export default function FinalPage() {
  return (
    <div
      className="relative min-h-screen w-full grid px-10 pt-20 gap-10"
      style={{ gridTemplateColumns: "30% 50% 20%" }}
    >
      <div className="flex flex-col justify-between w-full">
        <div className="relative flex justify-center flex-col w-full h-full">
          <div className="flex gap-4">
            <div className="relative w-full h-4 max-w-[200px] bg-purple overflow-hidden">
              <div className="absolute top-0 left-0 w-[10%] h-full bg-yellow" />
            </div>
            <P2>10 / 100 XP</P2>
          </div>
          <P2>Current Role!</P2>
        </div>
        <div className="flex flex-row items-center justify-center gap-10 flex-wrap w-full h-full border-t-2 border-solid border-white">
          <div className="flex justify-center items-center w-[160px] h-[160px] aspect-square border-2 border-solid border-white">
            <H4>?</H4>
          </div>
          <div className="flex justify-center items-center w-[160px] h-[160px] border-2 border-solid border-white">
            <H4>?</H4>
          </div>
        </div>
        <div className="relative w-full h-full border-t-2 border-solid border-white ">
          <P2>Meet our team</P2>
          <div className="flex gap-5 items-center">
            <div className="relative w-full p-2 h-max flex overflow-hidden">
              <div className="absolute top-0 left-0 w-full aspect-video">
                <Image
                  className="opacity-[0.7] rounded-xl"
                  src={barcelona}
                  fill
                  alt="Barcelona"
                />
              </div>
              <div className="relative z-10 flex justify-center items-center text-center w-full h-full">
                <div className="relative h-[120px] w-[60px]">
                  <Image src={eth_image} alt="ETH" fill />
                </div>
                <div className="w-full h-full text-center font-extrabold">
                  <Link
                    className="cursor-none flex flex-col gap-2"
                    target="_blank"
                    href="https://www.ethbarcelona.com/"
                  >
                    <P2 className={"hover:underline"}>ETH Barcelona!</P2>
                    <P4 className={"font-normal"}>
                      Meet our team @ ETH Barcelona!
                    </P4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full">
        <div className="absolute top-0 left-0">
          <P2>Are you an artist???</P2>
        </div>
        <div className="relative w-full aspect-square">
          <Image src={ImgEnry} fill alt="PFP" />
        </div>
      </div>
      <div className="relative w-max flex-col w-full">
        <div className="flex flex-col gap-2">
          <P2>Nickname</P2>
          <P2>Location</P2>
          <P2>Points</P2>
        </div>
        <div className="absolute bottom-0 left-0 flex justify-between w-full">
          <P2>Style</P2>
          <P2>Settings</P2>
        </div>
      </div>
    </div>
  );
}
