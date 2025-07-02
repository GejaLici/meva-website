
import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';
import { serviceCategories, dentalCategoryIds } from '@/lib/services';
import { Separator } from '@/components/ui/separator';
import { ServiceRecommender } from '@/components/services/ServiceRecommender';
import { Lightbulb } from 'lucide-react';

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
  const tSite = await getTranslations('Site');
  const siteName = tSite('title');
  
  const aestheticCategories = serviceCategories.filter(
    cat => !dentalCategoryIds.includes(cat.id) && cat.id !== 'dental-summary'
  );

  const dentalCategories = serviceCategories.filter(
    cat => dentalCategoryIds.includes(cat.id)
  );
  
  return (
    <>
      <PageHeader
        title={tOverview('title')}
        description={tOverview('description', { siteName })}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        
        <section id="aesthetic-services" className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              {tOverview('aestheticServicesTitle')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              {tOverview('aestheticServicesSubtitle')}
            </p>
          </div>
          <ServiceCategoryGrid categories={aestheticCategories} />
        </section>

        <Separator className="my-12 md:my-16" />

        <section id="dental-services" className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              {tOverview('dentalServicesTitle')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              {tOverview('dentalServicesSubtitle')}
            </p>
          </div>
          <ServiceCategoryGrid categories={dentalCategories} />
        </section>

        <Separator className="my-12 md:my-16" />
        
        <section id="service-recommender" className="py-12 md:py-16 bg-muted/50 rounded-lg">
           <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent text-accent-foreground mb-4">
                    <Lightbulb className="h-8 w-8" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                    {tOverview('recommenderTitle')}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {tOverview('recommenderSubtitle')}
                </p>
            </div>
            <ServiceRecommender />
           </div>
        </section>

      </div>
    </>
  );
}
