import { CookieKeys } from "@/constants/cookie.constant";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const response = NextResponse.json({
    message: "Logged out successfully",
  });
  response.cookies.set(CookieKeys.ACCESS_TOKEN, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
