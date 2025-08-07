
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AiAdvisorClient from './_components/AiAdvisorClient';
import { PageHeader } from '@/components/shared/PageHeader';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'AiAdvisorPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});

  return {
    title: t('metaTitle'),
    description: t('metaDescription', {siteName: tSite('title')}),
  };
}

export default async function AiAdvisorPage() {
  const t = await getTranslations('AiAdvisorPage');
  
  return (
    <>
      <PageHeader
        title={t('title')}
        description={t('description')}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:py-12">
        <AiAdvisorClient />
      </div>
    </>
  );
}
