
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutPageClient from './_components/AboutPageClient';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'AboutPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});

  return {
    title: t('metaTitle'),
    description: t('metaDescription', {siteName: tSite('title')}),
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
