
import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';
import { serviceCategories, dentalCategoryIds } from '@/lib/services';
import { Separator } from '@/components/ui/separator';

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

  const aestheticCategories = serviceCategories.filter(cat => !dentalCategoryIds.includes(cat.id) && cat.id !== 'dental-summary');
  const dentalCategories = serviceCategories.filter(cat => dentalCategoryIds.includes(cat.id));
  
  return (
    <>
      <PageHeader
        title={tOverview('title')}
        description={tOverview('description')}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                {tOverview('aestheticTitle')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {tOverview('aestheticSubtitle')}
            </p>
            <div className="mt-6 h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <ServiceCategoryGrid categories={aestheticCategories} homePageLayout={false} />

        <Separator className="my-16" />

        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                {tOverview('dentalTitle')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {tOverview('dentalSubtitle')}
            </p>
            <div className="mt-6 h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <ServiceCategoryGrid categories={dentalCategories} homePageLayout={false} />
      </div>
    </>
  );
}
