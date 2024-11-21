import { CookieKeys } from "@/constants/cookie.constant";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { accessToken } = await request.json();
  const response = NextResponse.json({ message: "Authenticated" });
  response.cookies.set(CookieKeys.ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Number(process.env.ACCESS_TOKEN_EXPIRE_TIME),
  });
  return response;
}
// code loading button when call api
// code session backend
// prisma studio to view data
//code logout flow call api logout and clear cookie on next server
