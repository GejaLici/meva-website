import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'it', 'sq'] as const;
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal pathnames and
// locale-specific pathnames.
export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    it: '/chi-siamo',
    sq: '/rreth-nesh'
  },
  '/services': {
    en: '/services',
    it: '/servizi',
    sq: '/sherbimet'
  },
   '/gallery': {
    en: '/gallery',
    it: '/galleria',
    sq: '/galeria'
  },
   '/blog': {
    en: '/blog',
    it: '/blog',
    sq: '/blog'
  },
   '/faq': {
    en: '/faq',
    it: '/faq',
    sq: '/faq'
  },
  '/contact': {
    en: '/contact',
    it: '/contatti',
    sq: '/kontakt'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    it: '/politica-sulla-privacy',
    sq: '/politika-e-privatesise'
  },
  '/terms-of-service': {
    en: '/terms-of-service',
    it: '/termini-di-servizio',
    sq: '/kushtet-e-sherbimit'
  }
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
