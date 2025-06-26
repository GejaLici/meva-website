import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'ServicesOverviewPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  return {
    title: t('metaTitle', {siteTitle: tSite('title')}),
    description: t('metaDescription', {siteTitle: tSite('title')}),
  };
}

export default async function ServicesOverviewPage({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'ServicesOverviewPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  
  return (
    <>
      <PageHeader
        title={t('title')}
        description={t('description', {siteTitle: tSite('title')})}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <ServiceCategoryGrid />
      </div>
    </>
  );
}
