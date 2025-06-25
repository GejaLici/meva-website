'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { serviceCategories } from '@/lib/services';
import { ArrowRight, Star, Gem, Heart, PersonStanding, Sparkles, Images, BookOpen, HelpCircle, ThumbsUp, Leaf } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/testimonials';
import { cn } from '@/lib/utils';
import { getAllGalleryItems } from '@/lib/gallery';
import type { GalleryItem as GalleryItemType } from '@/types/gallery';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

const ContactForm = dynamic(
  () => import('@/app/contact/_components/ContactForm').then((mod) => mod.ContactForm),
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

const DENTAL_CATEGORY_IDS = [
  'aesthetic-dentistry',
  'prosthetics',
  'orthodontics',
  'restorative-dentistry',
  'oral-surgery',
  'pediatric-dentistry',
];

export default function HomePage() {
  const siteName = SITE_NAME;

  const aestheticServiceCategories = serviceCategories.filter(
    (category) => !DENTAL_CATEGORY_IDS.includes(category.id)
  );

  const displayCategories = [
    {
      id: 'facial-surgery',
      name: 'Facial Plastic Surgery',
      slug: 'facial-surgery',
      description: serviceCategories.find(cat => cat.id === 'facial-surgery')?.description || 'Expert surgical procedures to refine and restore facial harmony and youthfulness.',
      image: serviceCategories.find(cat => cat.id === 'facial-surgery')?.image || 'https://placehold.co/800x600.png',
      imageHint: serviceCategories.find(cat => cat.id === 'facial-surgery')?.imageHint || 'facial surgery precision',
      icon: Gem,
    },
    {
      id: 'facial-treatments',
      name: 'Facial Treatments',
      slug: 'facial-treatments',
      description: serviceCategories.find(cat => cat.id === 'facial-treatments')?.description || 'Rejuvenate and enhance your features with our advanced non-surgical facial treatments.',
      image: serviceCategories.find(cat => cat.id === 'facial-treatments')?.image || 'https://placehold.co/800x600.png',
      imageHint: serviceCategories.find(cat => cat.id === 'facial-treatments')?.imageHint || 'facial treatment variety',
      icon: Leaf,
    },
    {
      id: 'breasts',
      name: 'Breast Procedures',
      slug: 'breasts',
      description: serviceCategories.find(cat => cat.id === 'breasts')?.description || 'Procedures for breast augmentation, lift, reduction, and reconstruction.',
      image: serviceCategories.find(cat => cat.id === 'breasts')?.image || 'https://placehold.co/800x600.png',
      imageHint: serviceCategories.find(cat => cat.id === 'breasts')?.imageHint || 'breast surgery results',
      icon: Heart,
    },
    {
      id: 'body',
      name: 'Body Contouring',
      slug: 'body',
      description: serviceCategories.find(cat => cat.id === 'body')?.description || 'Services for body contouring and reshaping for a harmonious appearance.',
      image: serviceCategories.find(cat => cat.id === 'body')?.image || 'https://placehold.co/800x600.png',
      imageHint: serviceCategories.find(cat => cat.id === 'body')?.imageHint || 'body contouring technology',
      icon: PersonStanding,
    },
    {
      id: 'dental-services-summary',
      name: 'Comprehensive Dental Care',
      slug: 'dental',
      description: 'Explore our full range of expert dental services, from cosmetic enhancements and orthodontics to surgical procedures and pediatric care, all tailored to your oral health needs.',
      image: '/images/dentist-turkey-antalya.jpg',
      imageHint: 'dental clinic modern',
      icon: Sparkles,
    },
  ];

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
            Reveal Your Radiance. Redefine Your Beauty.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto shadow-text-sm">
            Experience the science and art of aesthetic transformation at {siteName}. Our highly skilled medical professionals combine state-of-the-art technology with personalized care to help you achieve your ultimate aesthetic and wellness goals.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground py-3 px-8 text-base">
            <Link href="/services">Explore Our Expert Treatments</Link>
          </Button>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Our Premier Aesthetic & Dental Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              At {siteName}, we provide a comprehensive suite of advanced aesthetic and dental procedures, meticulously tailored by our specialists to enhance your natural beauty and elevate your confidence.
            </p>
            <div className="mt-6 h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
            {displayCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              let colSpanClass = '';
              if (index < 3) { 
                colSpanClass = 'md:col-span-2';
              } else { 
                colSpanClass = 'md:col-span-3';
              }
              return (
                <Card key={category.id} className={cn("group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", colSpanClass)}>
                  {category.image && (
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={category.imageHint || 'medical collage'}
                        className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  )}
                  <CardHeader className="text-center">
                    {CategoryIcon && (
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <CategoryIcon className="h-6 w-6" />
                      </div>
                    )}
                    <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="text-muted-foreground mb-6 flex-grow line-clamp-3 text-center">
                      {category.description}
                    </CardDescription>
                    <Button asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Link href={`/services/${category.slug}`}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from those who have experienced the {siteName} difference and entrusted us with their care.
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
                    "{testimonial.quote.replace('{SITE_NAME}', siteName)}"
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
              Transformations We're Proud Of
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the meticulous skill and artistry of our specialists through these real patient outcomes. Glimpse into the stunning results our patients have achieved at {siteName}.
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
              <Link href="/gallery">View Full Gallery of Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Further Insights & Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Further Insights & Expert Support
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore in-depth information about our specialized treatments, stay informed with the latest advancements in aesthetic care, and find comprehensive answers to your questions from our expert team at {siteName}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Images className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-primary">
                  View Our Transformations
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <p className="text-muted-foreground mb-6">
                  See the stunning transformations and real-patient results our expert medical team has achieved.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                  <Link href="/gallery">Visit Patient Gallery</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-primary">
                  Explore Our Expert Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <p className="text-muted-foreground mb-6">
                  Dive into our blog for the latest trends, procedural insights, and expert advice in advanced aesthetic and dental care.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                  <Link href="/blog">Read Our Expert Blog</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-primary">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <p className="text-muted-foreground mb-6">
                  Find comprehensive answers to common queries about our procedures, recovery protocols, and what to expect during your journey with us.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                  <Link href="/faq">Visit Our Comprehensive FAQ</Link>
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
              Ready for Your Transformation?
            </h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Initiate your journey towards your desired aesthetic outcomes. Contact {siteName} today for a confidential consultation. Complete the form below, and our dedicated team of medical experts will promptly connect with you to discuss your aspirations and guide you through our personalized treatment pathways.
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
