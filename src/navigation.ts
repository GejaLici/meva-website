import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'it', 'sq'] as const;
export const localePrefix = 'always'; // Default

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
    sq: '/pyetje-te-shpeshta'
  },
  '/contact': {
    en: '/contact',
    it: '/contatti',
    sq: '/kontakt'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    it: '/informativa-sulla-privacy',
    sq: '/politika-e-privatesise'
  },
  '/terms-of-service': {
    en: '/terms-of-service',
    it: '/termini-di-servizio',
    sq: '/kushtet-e-sherbimit'
  },
  '/services/dental': {
    en: '/services/dental',
    it: '/servizi/dentistici',
    sq: '/sherbimet/dentare'
  },
  '/services/[categorySlug]': {
    en: '/services/[categorySlug]',
    it: '/servizi/[categorySlug]',
    sq: '/sherbimet/[categorySlug]'
  },
  '/blog/[slug]': {
    en: '/blog/[slug]',
    it: '/blog/[slug]',
    sq: '/blog/[slug]'
  },
  '/services/[categorySlug]/[serviceSlug]': {
    en: '/services/[categorySlug]/[serviceSlug]',
    it: '/servizi/[categorySlug]/[serviceSlug]',
    sq: '/sherbimet/[categorySlug]/[serviceSlug]'
  }
};


export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});