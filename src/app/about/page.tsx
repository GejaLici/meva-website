
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, our mission, our values, and our team of expert aesthetic specialists dedicated to transforming your beauty with care.`,
};

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Lead Plastic Surgeon',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'female doctor professional',
    bio: 'Dr. Reed is a board-certified plastic surgeon with over 15 years of experience in complex aesthetic and reconstructive procedures. She is renowned for her meticulous attention to detail and patient-centered approach.',
  },
  {
    name: 'Dr. Marcus Chen',
    role: 'Dermatology & Aesthetics Specialist',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'male doctor friendly',
    bio: 'Dr. Chen specializes in non-invasive treatments, cosmetic dermatology, and advanced skincare. He is passionate about helping patients achieve radiant skin and natural-looking enhancements.',
  },
  {
    name: 'Sofia Petrova',
    role: 'Lead Aesthetician & Patient Coordinator',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'female aesthetician clinic',
    bio: 'Sofia brings a wealth of knowledge in advanced skincare treatments and ensures every patient feels welcomed and informed. She guides patients through their journey with warmth and expertise.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${SITE_NAME}`}
        description="Transforming beauty with expertise, innovation, and compassionate care."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                Our Philosophy: Your Beauty, Our Priority
              </h2>
              <p className="text-base md:text-lg text-foreground mb-4">
                At {SITE_NAME}, we believe that aesthetic enhancement is a journey towards greater self-confidence and well-being. Our core philosophy revolves around providing personalized care, utilizing the latest advancements in aesthetic medicine, and upholding the highest standards of safety and ethics.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                We strive to understand your unique aspirations and tailor our treatments to achieve natural-looking, harmonious results that enhance your individual beauty. Our team is committed to creating a supportive and comfortable environment where you feel heard, respected, and empowered.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/aigen.jpeg"
                alt={`${SITE_NAME} Interior`}
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="modern clinic interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose {SITE_NAME}?
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to excellence in every aspect of your care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <Users className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <CardTitle className="font-headline text-lg md:text-xl text-primary">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground">Our highly skilled and experienced specialists are leaders in their respective fields, committed to delivering exceptional results.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <Stethoscope className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <CardTitle className="font-headline text-lg md:text-xl text-primary">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground">We tailor every treatment plan to your unique needs and aesthetic goals, ensuring a personalized and effective approach.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <CardTitle className="font-headline text-lg md:text-xl text-primary">Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground">We invest in the latest, safest technologies and techniques to provide you with cutting-edge treatments and superior outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Experts
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of dedicated professionals is here to guide you on your aesthetic journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={member.imageHint}
                  />
                </div>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="font-headline text-lg md:text-xl text-primary">{member.name}</CardTitle>
                  <p className="text-xs md:text-sm text-accent font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-4 md:line-clamp-none">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Schedule a consultation with our experts today and take the first step towards achieving your aesthetic goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base">
            <Link href="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

