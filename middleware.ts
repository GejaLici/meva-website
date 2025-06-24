
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './src/navigation';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  // Match all pathnames except for
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - any file with an extension (e.g. .ico, .png, .svg)
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
};
