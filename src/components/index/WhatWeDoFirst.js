import Link from "next/link";
import Facebook from "../../../public/svgs/Facebook";
import Instagram from "../../../public/svgs/Instagram";
import TikTok from "../../../public/svgs/TikTok";
import Image from "next/image";

export default function WhatWeDoFirst() {
  return (
    <div className="relative min-h-[95%] mt-20">
      <div className="absolute top-0 right-4 flex flex-col gap-3 mr-auto top-10">
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
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-[65%_35%] gap-8 mt-[5%] mx-32 max-w-[130rem]">
          <div className="flex flex-col gap-9">
            <h1 className="font-bold text-purple">
              <span className="text-7xl">THIS IS</span> <br />{" "}
              <span className="text-8xl">WHAT WE DO</span>
            </h1>
            <div className="flex flex-wrap gap-3">
              <div className="grid gap-2">
                <h2 className="text-orange font-bold text-2xl">
                  🌌 Quantum Vibe: interdependence is the new independence 🕶️
                </h2>
                <h2>
                  eclectic qbit, it&apos;s all about bringing the modus operandi
                  of qbits, into web3, with a it&apos;s a me twist nature is our
                  main inspiration, and just like fungi, we exchange nutrients
                  and other resources within & beyond web3 space <br />
                  our team of regens will help you grow an eclectic community,
                  powered up by multidimensional inputs & co-built values, to
                  create unique and exciting experiences
                </h2>
              </div>
              <div className="grid gap-2">
                <h2 className="text-orange font-bold text-2xl">
                  🍄 Community Building: Joining Forces with Eclectic regens 🎮
                </h2>
                <h2>
                  at eclectic qbit, we know that building a successful web3
                  project takes more than just cutting-edge technology - it also
                  requires a touch of magic <br />
                  that&apos;s why we bring the it&apos;s a me vibe into the
                  picture, infusing your project with the fun and excitement
                  that players of all ages have come to know and love <br />
                  your web3 project needs to be able to navigate the
                  complexities of the blockchain world, and that&apos;s where
                  our eclectic regens come in, to quantum leap your project to
                  the next level <br />
                  we harness the power of interdependence to create projects
                  that are not bound by the limitations of classical bits,
                  leveraging partnerships and mass collaboration
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-auto my-auto relative flex items-center justify-center w-full max-w-md aspect-[3/4] grayscale hover:grayscale-0 transition ease-in duration-200">
            <Link href="https://malpegados.jimdosite.com/" target="_blank">
              <Image
                src={"/images/proudCat.jpg"}
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
