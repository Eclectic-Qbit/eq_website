import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  const prot = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("host");
  if (!token || !token.value) {
    return NextResponse.redirect(new URL("/", `${prot}://${host}`));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/troopa/:path*",
};
