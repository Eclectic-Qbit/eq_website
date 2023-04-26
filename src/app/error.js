"use client";

export default function Error() {
  return (
    <div className="min-w-screen mt-20 flex justify-center items-center">
      <div className="text-center text-6xl">
        <h1>Something went wrong...</h1>
        <Link href="/" className="underline" onClick={() => refresh()}>
          Go back to the index
        </Link>
      </div>
    </div>
  );
}
