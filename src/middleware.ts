import { NextRequest, NextResponse } from "next/server";
import { CookieKeys } from "./constants/cookie.constant";

const protectedRoutes = ["/profile", "/"];
const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/api/") ||
    request.nextUrl.pathname.startsWith("/_next/")
  ) {
    return NextResponse.next();
  }
  const token = request.cookies.get(CookieKeys.ACCESS_TOKEN)?.value;
  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    const loginUrl = new URL("/login", request.url).href;
    return NextResponse.redirect(loginUrl);
  }

  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    const homeUrl = new URL("/", request.url).href;
    return NextResponse.redirect(homeUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/login", "/register", "/"],
};
