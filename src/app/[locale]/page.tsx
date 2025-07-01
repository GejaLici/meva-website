import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { InsightsSection } from '@/components/home/InsightsSection';
import { HomeContactSection } from '@/components/home/HomeContactSection';
import { ServiceRecommender } from '@/components/services/ServiceRecommender';
import { getTranslations } from 'next-intl/server';
import { Sparkles } from 'lucide-react';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent text-accent-foreground mb-4">
                    <Sparkles className="h-8 w-8" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                    {t('recommenderTitle')}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('recommenderSubtitle')}
                </p>
            </div>
          <ServiceRecommender />
        </div>
      </section>
      <TestimonialsSection />
      <GalleryPreviewSection />
      <InsightsSection />
      <HomeContactSection />
    </>
  );
}
