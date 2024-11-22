import { CookieKeys } from "@/constants/cookie.constant";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { accessToken, refreshToken } = await request.json();
  const response = NextResponse.json({ message: "Authenticated" });
  const session = JSON.stringify({ accessToken, refreshToken });
  response.cookies.set(CookieKeys.SESSION, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
