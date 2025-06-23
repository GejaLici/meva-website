import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from './src/navigation';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|sq|en)/:path*']
};
