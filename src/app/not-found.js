"use client";

import { finalMediaLink } from "@/commonFrontend";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-20 flex justify-center items-center h-[90vh]">
      <div className="relative aspect-square w-[40rem]">
        <div className="absolute top-5 left-5 text-6xl z-10">🦖</div>
        <Link href="/" onClick={() => refresh()}>
          <Image src={finalMediaLink("images/404.png")} alt="404" fill />
        </Link>
      </div>
    </div>
  );
}
