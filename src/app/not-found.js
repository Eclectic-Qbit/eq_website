"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-screen mt-20 flex justify-center items-center">
      <div className="text-center text-6xl">
        <h1>404!</h1>
        <Link href="/" className="underline" onClick={() => refresh()}>
          Go back to the index
        </Link>
      </div>
    </div>
  );
}
