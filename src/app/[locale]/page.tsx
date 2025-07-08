
import { HeroSection } from '@/components/home/HeroSection';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const ServicesSection = dynamic(
  () => import('@/components/home/ServicesSection').then((mod) => mod.ServicesSection),
  {
    ssr: false,
    loading: () => (
      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/2 mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
            <Skeleton className="h-1 w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <Skeleton className="h-[450px] md:col-span-2" />
            <Skeleton className="h-[450px] md:col-span-2" />
            <Skeleton className="h-[450px] md:col-span-2" />
            <Skeleton className="h-[450px] md:col-span-3" />
            <Skeleton className="h-[450px] md:col-span-3" />
          </div>
        </div>
      </section>
    ),
  }
);

const TestimonialsSection = dynamic(
  () => import('@/components/home/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { 
    ssr: false,
    loading: () => (
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/3 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </section>
    )
  }
);

const GalleryPreviewSection = dynamic(
  () => import('@/components/home/GalleryPreviewSection').then((mod) => mod.GalleryPreviewSection),
  { 
    ssr: false,
    loading: () => (
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-20 w-20 rounded-full mx-auto mb-4" />
            <Skeleton className="h-10 w-1/3 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <Skeleton className="h-[500px]" />
             <Skeleton className="h-[500px]" />
             <Skeleton className="h-[500px]" />
          </div>
          <div className="mt-12 text-center">
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>
        </div>
      </section>
    )
  }
);

const InsightsSection = dynamic(
  () => import('@/components/home/InsightsSection').then((mod) => mod.InsightsSection),
  { 
    ssr: false,
    loading: () => (
       <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/3 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <Skeleton className="h-72" />
            <Skeleton className="h-72" />
            <Skeleton className="h-72" />
          </div>
        </div>
       </section>
    )
  }
);

const HomeContactSection = dynamic(
  () => import('@/components/home/HomeContactSection').then((mod) => mod.HomeContactSection),
  { 
    ssr: false,
    loading: () => (
      <section className="py-16 bg-primary">
        <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/2 mx-auto bg-primary-foreground/20" />
            <Skeleton className="h-6 w-3/4 mx-auto mt-4 bg-primary-foreground/20" />
          </div>
          <Skeleton className="h-96 w-full rounded-lg" />
        </div>
      </section>
    )
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
