import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge middleware — cheap gate for the authenticated provider area (`/app/*`).
 *
 * We only check for the presence of the Auth.js session cookie here (Prisma runs in the Node
 * runtime, not the edge, so the session can't be verified in middleware). Real authorization is
 * enforced server-side by `protectedProcedure` (tRPC) and by server components calling `auth()`.
 */
const SESSION_COOKIES = [
  "authjs.session-token",
  "__Secure-authjs.session-token",
  "next-auth.session-token",
  "__Secure-next-auth.session-token",
];

export function middleware(request: NextRequest) {
  const hasSession = SESSION_COOKIES.some((name) =>
    request.cookies.has(name),
  );

  if (!hasSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
