import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';

export const metadata: Metadata = {
  title: `Our Services | Meva Clinic`,
  description: `Explore the comprehensive range of advanced aesthetic and dental services offered at Meva Clinic. Discover treatments tailored by experts to enhance your beauty and well-being.`,
};

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHeader
        title="Our Advanced Aesthetic & Dental Services"
        description={`Explore the comprehensive spectrum of specialized aesthetic and dental treatments offered at Meva Clinic. Each service is meticulously designed to help you achieve your distinct beauty and wellness objectives. Our expert medical team is dedicated to providing advanced, personalized care and delivering exceptional, lasting results.`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <ServiceCategoryGrid />
      </div>
    </>
  );
}
