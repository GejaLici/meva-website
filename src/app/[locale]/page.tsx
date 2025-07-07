
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const TestimonialsSection = dynamic(
  () => import('@/components/home/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-[500px] w-full" /> 
  }
);

const GalleryPreviewSection = dynamic(
  () => import('@/components/home/GalleryPreviewSection').then((mod) => mod.GalleryPreviewSection),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-[700px] w-full" /> 
  }
);

const InsightsSection = dynamic(
  () => import('@/components/home/InsightsSection').then((mod) => mod.InsightsSection),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" /> 
  }
);

const HomeContactSection = dynamic(
  () => import('@/components/home/HomeContactSection').then((mod) => mod.HomeContactSection),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-[600px] w-full" /> 
  }
);


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
