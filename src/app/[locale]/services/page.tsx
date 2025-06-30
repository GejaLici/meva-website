
import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';
import { serviceCategories } from '@/lib/services';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'ServicesOverviewPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  return {
    title: t('metaTitle', {siteName: tSite('title')}),
    description: t('metaDescription', {siteName: tSite('title')}),
  };
}

export default async function ServicesOverviewPage() {
  const tOverview = await getTranslations('ServicesOverviewPage');
  const tNav = await getTranslations('Navigation');
  const tServices = await getTranslations('Services');

  const categories = serviceCategories
    .filter(cat => cat.id !== 'dental-summary')
    .map(category => {
      const name = tServices(`categories.${category.id}.name`);
      return {
        ...category,
        name,
        description: tServices(`categories.${category.id}.description`),
        exploreText: tNav('exploreService', { categoryName: name }),
      };
    });
  
  return (
    <>
      <PageHeader
        title={tOverview('title')}
        description={tOverview('description')}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <ServiceCategoryGrid categories={categories} homePageLayout={false} />
      </div>

    </>
  );
}
