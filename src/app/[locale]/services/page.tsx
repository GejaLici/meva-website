import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = t('title');
  return {
    title: `Our Services | ${siteTitle}`,
    description: `Explore the comprehensive range of advanced aesthetic and dental services offered at ${siteTitle}. Discover treatments tailored by experts to enhance your beauty and well-being.`,
  };
}

export default async function ServicesOverviewPage() {
  const t = await getTranslations('Site');
  const siteTitle = t('title');

  return (
    <>
      <PageHeader
        title="Our Advanced Aesthetic & Dental Services"
        description={`Explore the comprehensive spectrum of specialized aesthetic and dental treatments offered at ${siteTitle}. Each service is meticulously designed to help you achieve your distinct beauty and wellness objectives. Our expert medical team is dedicated to providing advanced, personalized care and delivering exceptional, lasting results.`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <ServiceCategoryGrid />
      </div>
    </>
  );
}
