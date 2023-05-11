import Link from "next/link";
import Facebook from "../../../public/svgs/Facebook";
import Instagram from "../../../public/svgs/Instagram";
import TikTok from "../../../public/svgs/TikTok";
import Image from "next/image";

export default function WhatWeDoFirst() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-20 top-4 right-4 flex flex-col gap-3">
        <Link
          href="https://instagram.com/eclecticqbit?igshid=YmMyMTA2M2Y="
          target="_blank"
          className="bg-white rounded-full w-8 p-2 scale-100 hover:scale-125 transition"
        >
          <Instagram fill="black" />
        </Link>
        <div className="bg-white rounded-full w-8 p-2 scale-100 hover:scale-125 transition">
          <TikTok fill="black" />
        </div>
        <div className="bg-white rounded-full w-8 p-2 scale-100 hover:scale-125 transition">
          <Facebook fill="black" />
        </div>
      </div>
      <div className="relative h-[90vh]">
        <div className="grid grid-cols-[65%_35%] gap-8 mt-[5%] mx-32 max-w-[130rem]">
          <div className="flex flex-col justify-center items-center gap-9">
            <h1 className="font-bold text-purple">
              <span className="text-7xl">THIS IS</span> <br />{" "}
              <span className="text-8xl">WHAT WE DO</span>
            </h1>
            <div className="flex flex-wrap gap-3">
              <div className="grid gap-2">
                <h2 className="text-orange text-2xl">
                  🌌 Quantum Vibe: interdependence is the new independence 🕶️
                </h2>
                <h2>
                  eclectic qbit, it&apos;s all about bringing the modus operandi
                  of qbits, into web3, with a IT&apos;S A ME twist with nature
                  as our main inspiration, just like fungi, we exchange
                  nutrients and other resources within & beyond web3 space
                </h2>
              </div>
              <div className="grid gap-2">
                <h2 className="text-orange text-2xl">
                  🍄 Community Building: Joining Forces with Eclectic regens 🎮
                </h2>
                <h2>
                  we know that building a successful web3 project takes more
                  than just cutting-edge technology - it also requires a touch
                  of magic our eclectic regens will quantum leap your project to
                  the next level, infusing your community with the fun and
                  excitement that players of all ages have come to know and love
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-auto my-auto relative flex items-center justify-center w-full max-w-md aspect-[3/4] grayscale hover:grayscale-0 transition ease-in duration-200">
            <Link href="https://malpegados.jimdosite.com/" target="_blank">
              <Image
                src={
                  true
                    ? "https://raw.githubusercontent.com/Eclectic-Qbit/eq_website/main/public/images/proudCat - latest.jpg"
                    : "/images/proudCat - latest.jpg"
                }
                fill
                sizes="auto"
                alt="Cat Logo"
                className="scale-100 hover:scale-110 transition rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
