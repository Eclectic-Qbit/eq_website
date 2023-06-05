"use client";

import Image from "next/image";
import Link from "next/link";
import Img404 from "../../public/images/404.png";

export default function NotFound() {
  return (
    <div className="mt-20 flex justify-center items-center h-[90vh]">
      <div className="relative aspect-square w-[40rem]">
        <div className="absolute top-5 left-5 text-6xl z-10">🦖</div>
        <Link href="/" onClick={() => refresh()}>
          <Image className="cursor-none" src={Img404} alt="404" fill priority />
        </Link>
      </div>
    </div>
  );
}
