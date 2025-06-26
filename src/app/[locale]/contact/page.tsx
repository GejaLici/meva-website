import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from './_components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_DOMAIN } from '@/lib/constants';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'ContactPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = tSite('title');
  return {
    title: t('metaTitle', { siteTitle }),
    description: t('metaDescription', { siteTitle }),
  };
}

export default async function ContactPage({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'ContactPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});

  return (
    <>
      <PageHeader
        title={t('title')}
        description={t('description')}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl font-semibold text-primary mb-6">{t('detailsTitle')}</h2>
            <div className="space-y-4 text-foreground">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('addressLabel')}</h3>
                  <p>{t('addressValue')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('phoneLabel')}</h3>
                  <p>+355 69 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('emailLabel')}</h3>
                  <p>info@{SITE_DOMAIN}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">{t('hoursTitle')}</h3>
                <p className="text-foreground">{t('hoursWeekdays')}</p>
                <p className="text-foreground">{t('hoursSaturday')}</p>
                <p className="text-foreground">{t('hoursSunday')}</p>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl font-semibold text-primary mb-6">{t('formTitle')}</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
