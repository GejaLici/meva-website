
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { serviceCategories } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="Welcome to NovaSculpt Clinic"
        description="Explore our specialized services and discover how we can help you achieve your ideal look with professionalism and maximum care."
      />

      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Our Main Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a wide range of aesthetic procedures for the face, breasts, and body.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {category.image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={category.imageHint || 'medical collage'}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground mb-6 flex-grow">
                    {category.description}
                  </CardDescription>
                  <Button asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Link href={`/services/${category.slug}`}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            Ready for Your Transformation?
          </h2>
          <p className="mt-4 mb-8 text-lg text-muted-foreground max-w-xl mx-auto">
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
