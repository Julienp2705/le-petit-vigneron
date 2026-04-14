import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || ""

  // Si le host commence par www, on redirige en 301 vers non-www
  if (host.startsWith("www.")) {
    const newHost = host.replace(/^www\./, "")
    const url = request.nextUrl.clone()
    url.host = newHost
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

// Le middleware s'applique à toutes les routes sauf fichiers statiques et API
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}