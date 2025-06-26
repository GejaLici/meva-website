
'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function AboutPageClient() {
  const t = useTranslations('AboutPage');
  const tSite = useTranslations('Site');

  return (
    <>
      <PageHeader
        title={t('headerTitle', { siteName: tSite('title') })}
        description={t('headerDescription')}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                {t('philosophyTitle')}
              </h2>
              <p className="text-base md:text-lg text-foreground mb-4">
                {t('philosophyP1', { siteName: tSite('title') })}
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                {t('philosophyP2')}
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base">
                <Link href="/services">{t('philosophyButton')}</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/aigen.jpeg"
                alt={t('imageAlt', { siteName: tSite('title') })}
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="modern clinic interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            {t('journeyTitle')}
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
           {t('journeyP1')}
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base">
            <Link href="/contact">{t('journeyButton')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
