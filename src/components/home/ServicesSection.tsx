
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';
import { serviceCategories, dentalCategoryIds } from '@/lib/services';

export async function ServicesSection() {
  const t = await getTranslations('HomePage');
  
  const aestheticCategories = serviceCategories.filter(
    cat => cat.displayOnHome && !dentalCategoryIds.includes(cat.id) && cat.id !== 'dental-summary'
  );
  
  const dentalCategory = serviceCategories.find(cat => cat.id === 'dental-summary');

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
        <ServiceCategoryGrid 
          aestheticCategories={aestheticCategories} 
          dentalCategory={dentalCategory}
          homePageLayout={true} 
        />
      </div>
    </section>
  );
}
