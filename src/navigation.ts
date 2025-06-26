import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'it', 'sq', 'de', 'fr', 'es'] as const;
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal pathnames and
// locale-specific pathnames.
export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    it: '/chi-siamo',
    sq: '/rreth-nesh',
    de: '/ueber-uns',
    fr: '/a-propos',
    es: '/sobre-nosotros'
  },
  '/services': {
    en: '/services',
    it: '/servizi',
    sq: '/sherbimet',
    de: '/leistungen',
    fr: '/services',
    es: '/servicios'
  },
   '/gallery': {
    en: '/gallery',
    it: '/galleria',
    sq: '/galeria',
    de: '/galerie',
    fr: '/galerie',
    es: '/galeria'
  },
   '/blog': {
    en: '/blog',
    it: '/blog',
    sq: '/blog',
    de: '/blog',
    fr: '/blog',
    es: '/blog'
  },
   '/faq': {
    en: '/faq',
    it: '/faq',
    sq: '/faq',
    de: '/faq',
    fr: '/faq',
    es: '/faq'
  },
  '/contact': {
    en: '/contact',
    it: '/contatti',
    sq: '/kontakt',
    de: '/kontakt',
    fr: '/contact',
    es: '/contacto'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    it: '/politica-sulla-privacy',
    sq: '/politika-e-privatesise',
    de: '/datenschutzrichtlinie',
    fr: '/politique-de-confidentialite',
    es: '/politica-de-privacidad'
  },
  '/terms-of-service': {
    en: '/terms-of-service',
    it: '/termini-di-servizio',
    sq: '/kushtet-e-sherbimit',
    de: '/nutzungsbedingungen',
    fr: '/conditions-d-utilisation',
    es: '/terminos-de-servicio'
  },
  '/services/dental': {
    en: '/services/dental',
    it: '/servizi/dentistici',
    sq: '/sherbimet/dentare',
    de: '/leistungen/zahnmedizin',
    fr: '/services/dentaires',
    es: '/servicios/dentales'
  }
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
