import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const PROTECTED_PREFIX = "/admin";
const LOGIN_PATH = "/admin/login";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  if (pathname.startsWith(PROTECTED_PREFIX)) {
    const token = request.cookies.get("admin_session")?.value;
    const session = await decrypt(token);

    if (!session) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
