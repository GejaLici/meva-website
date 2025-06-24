
'use client';

import { SITE_DOMAIN } from '@/lib/constants';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const s = useTranslations('SITE_NAME');
  const siteName = s('self');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">{siteName}</h3>
            <p className="text-sm text-muted-foreground">
              Rruga "Sami Frashëri", No. 123<br />
              Tirana, Albania<br />
              Phone: +355 69 123 4567<br />
              Email: info@{SITE_DOMAIN}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">{t('quick_links')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">{useTranslations('Header')('home')}</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">{useTranslations('Header')('about')}</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">{useTranslations('Header')('services')}</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">{useTranslations('Header')('faq')}</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">{useTranslations('Header')('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">{t('connect_with_us')}</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
             <p className="text-sm text-muted-foreground mt-4">
              {t('stay_updated')}
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t('copyright', {currentYear: currentYear, siteName: siteName})}</p>
          <p className="mt-1">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">{t('privacy_policy')}</Link> | 
            <Link href="/terms-of-service" className="hover:text-primary transition-colors ml-1">{t('terms_of_service')}</Link>
          </p>
          <p className="mt-2">
            {t('designed_by')}
          </p>
        </div>
      </div>
    </footer>
  );
}
