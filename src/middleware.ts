
import {NextRequest, NextResponse} from 'next/server';

// This middleware is a placeholder to prevent build errors. It does not
// perform any internationalization logic, allowing the site to function
// as an English-only application.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
