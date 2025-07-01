import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { InsightsSection } from '@/components/home/InsightsSection';
import { HomeContactSection } from '@/components/home/HomeContactSection';

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <InsightsSection />
      <HomeContactSection />
    </>
  );
}
