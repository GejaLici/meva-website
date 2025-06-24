
import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'it'] as const;
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal pathnames and
// locale-specific pathnames.
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/contact': '/contact',
  '/faq': '/faq',
  '/gallery': '/gallery',
  '/privacy-policy': '/privacy-policy',
  '/services': '/services',
  '/services/dental': '/services/dental',
  '/services/[categorySlug]': '/services/[categorySlug]',
  '/services/[categorySlug]/[serviceSlug]': '/services/[categorySlug]/[serviceSlug]',
  '/terms-of-service': '/terms-of-service'
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
