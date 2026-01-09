
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
    sq: '/pyetje-te-shpeshta',
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
  '/admin': {
    en: '/admin',
    it: '/admin',
    sq: '/admin',
    de: '/admin',
    fr: '/admin',
    es: '/admin'
  },
  '/admin/dashboard': {
    en: '/admin/dashboard',
    it: '/admin/dashboard',
    sq: '/admin/dashboard',
    de: '/admin/dashboard',
    fr: '/admin/dashboard',
    es: '/admin/dashboard'
  },
  '/admin/contacts': {
    en: '/admin/contacts',
    it: '/admin/contacts',
    sq: '/admin/contacts',
    de: '/admin/contacts',
    fr: '/admin/contacts',
    es: '/admin/contacts'
  },
  '/admin/blog': {
    en: '/admin/blog',
    it: '/admin/blog',
    sq: '/admin/blog',
    de: '/admin/blog',
    fr: '/admin/blog',
    es: '/admin/blog'
  },
  '/admin/add-post': {
    en: '/admin/add-post',
    it: '/admin/add-post',
    sq: '/admin/add-post',
    de: '/admin/add-post',
    fr: '/admin/add-post',
    es: '/admin/add-post'
  },
  '/services/dental': {
    en: '/services/dental',
    it: '/servizi/dentistici',
    sq: '/sherbimet/dentare',
    de: '/leistungen/zahnmedizin',
    fr: '/services/dentaires',
    es: '/servicios/dentales'
  },
  '/services/[categorySlug]/[serviceSlug]': {
    en: '/services/[categorySlug]/[serviceSlug]',
    it: '/servizi/[categorySlug]/[serviceSlug]',
    sq: '/sherbimet/[categorySlug]/[serviceSlug]',
    de: '/leistungen/[categorySlug]/[serviceSlug]',
    fr: '/services/[categorySlug]/[serviceSlug]',
    es: '/servicios/[categorySlug]/[serviceSlug]'
  }
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
