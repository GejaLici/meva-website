
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';
import { serviceCategories } from '@/lib/services';

export async function ServicesSection() {
  const t = await getTranslations('HomePage');
  const tNav = await getTranslations('Navigation');
  const tServices = await getTranslations('Services');

  const categories = serviceCategories
    .filter(cat => cat.displayOnHome)
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
    <section className="py-16">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            {t('servicesTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          <div className="mt-6 h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <ServiceCategoryGrid categories={categories} homePageLayout={true} />
      </div>
    </section>
  );
}
