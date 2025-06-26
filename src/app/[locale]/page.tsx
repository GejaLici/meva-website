'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, ThumbsUp, Images, BookOpen, HelpCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/testimonials';
import { getAllGalleryItems } from '@/lib/gallery';
import type { GalleryItem as GalleryItemType } from '@/types/gallery';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from '@/navigation';
import { ServiceCategoryGrid } from '@/components/shared/ServiceCategoryGrid';
import { useTranslations } from 'next-intl';

const ContactForm = dynamic(
  () => import('@/app/[locale]/contact/_components/ContactForm').then((mod) => mod.ContactForm),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    ),
  }
);

export default function HomePage() {
  const t = useTranslations('HomePage');
  const galleryPreviewItems = getAllGalleryItems().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-3rem)] min-h-[450px] md:min-h-[550px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portrait-woman.jpg"
            alt="Modern aesthetic clinic backdrop"
            fill
            priority
            style={{ objectFit: 'cover' }}
            data-ai-hint="modern clinic serene"
            className="filter brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 shadow-text">
            {t('heroTitle')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto shadow-text-sm">
            {t('heroSubtitle')}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground py-3 px-8 text-base">
            <Link href="/services">{t('heroButton')}</Link>
          </Button>
        </div>
      </section>

      {/* Main Services Section */}
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
          <ServiceCategoryGrid />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              {t('testimonialsTitle')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('testimonialsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 md:p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Avatar className="h-8 w-8 md:h-10 md:w-10 mr-3 md:mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.imageHint || 'person portrait'}/>
                      <AvatarFallback>{testimonial.name.substring(0,1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-primary text-xs md:text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                    </div>
                  </div>
                  <blockquote className="text-foreground italic border-l-4 border-accent pl-3 md:pl-4 mb-3 md:mb-4 flex-grow text-xs md:text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center text-yellow-500 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-primary-foreground mb-4">
                <ThumbsUp className="h-8 w-8" />
            </div>
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              {t('galleryTitle')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('gallerySubtitle')}
            </p>
          </div>
          {galleryPreviewItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryPreviewItems.map((item: GalleryItemType) => (
                <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-headline text-xl text-primary text-center">{item.procedureName}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">BEFORE</h3>
                      <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                         <Image
                          src={item.beforeImageUrl}
                          alt={`Before - ${item.procedureName}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          data-ai-hint={item.beforeImageHint}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">AFTER</h3>
                       <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                          <Image
                            src={item.afterImageUrl}
                            alt={`After - ${item.procedureName}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={item.afterImageHint}
                          />
                      </div>
                    </div>
                    {item.description && (
                      <CardDescription className="text-sm text-muted-foreground mt-2 text-center flex-grow line-clamp-2">
                        {item.description}
                      </CardDescription>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
             <p className="text-center text-lg text-muted-foreground">
                Our gallery showcasing patient transformations is currently being updated. Please check back soon.
             </p>
          )}
          <div className="mt-12 text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/gallery">{t('galleryButton')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Further Insights & Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              {t('insightsTitle')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('insightsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Images className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-primary">
                  {t('insightsGalleryTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <p className="text-muted-foreground mb-6">
                  {t('insightsGalleryDesc')}
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                  <Link href="/gallery">{t('insightsGalleryButton')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-primary">
                  {t('insightsBlogTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <p className="text-muted-foreground mb-6">
                  {t('insightsBlogDesc')}
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                  <Link href="/blog">{t('insightsBlogButton')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-primary">
                  {t('insightsFaqTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <p className="text-muted-foreground mb-6">
                  {t('insightsFaqDesc')}
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                  <Link href="/faq">{t('insightsFaqButton')}</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              {t('contactTitle')}
            </h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>
          <div className="bg-card p-8 md:p-10 rounded-lg shadow-2xl text-card-foreground">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
