
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { serviceCategories } from '@/lib/services';
import { ArrowRight, Star, Gem, Heart, PersonStanding, Sparkles, Leaf, Smile } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/testimonials';

const DENTAL_CATEGORY_IDS = [
  'aesthetic-dentistry',
  'prosthetics',
  'orthodontics',
  'restorative-dentistry',
  'oral-surgery',
  'pediatric-dentistry',
];

export default function HomePage() {
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
      image: 'https://placehold.co/800x600.png',
      imageHint: 'dental clinic modern',
      icon: Sparkles, // Using Sparkles, as Smile icon seems not to be available or was previously Smile from lucide. Changed to Sparkles.
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portrait-woman.jpg"
            alt="Modern aesthetic clinic backdrop"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="modern clinic serene"
            className="filter brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Reveal Your Radiance. Redefine Your Beauty.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Experience the art of aesthetic transformation at NovaSculpt Clinic. Our expert team combines advanced technology with personalized care to help you achieve your ultimate aesthetic goals.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground py-3 px-8 text-lg">
            <Link href="/services">Explore Our Treatments</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Our Main Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of aesthetic and dental procedures, tailored to enhance your natural beauty and confidence.
            </p>
            <div className="mt-6 h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {displayCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <Card key={category.id} className="group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {category.image && (
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        layout="fill"
                        objectFit="cover"
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

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from those who have experienced the NovaSculpt difference.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.imageHint || 'person portrait'}/>
                      <AvatarFallback>{testimonial.name.substring(0,1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                    </div>
                  </div>
                  <blockquote className="text-foreground italic border-l-4 border-accent pl-4 mb-4 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground"> 
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Ready for Your Transformation?
          </h2>
          <p className="mt-4 mb-8 text-lg max-w-xl mx-auto">
            Contact us today for a consultation and let our team of experts guide you towards the results you've dreamed of.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
