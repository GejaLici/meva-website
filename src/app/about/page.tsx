import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `About Meva Clinic`,
  description: `Discover the mission, values, and distinguished team of board-certified medical professionals at Meva Clinic. Learn about our commitment to excellence in aesthetic and dental care.`,
};

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Lead Plastic Surgeon',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'female doctor professional',
    bio: 'Dr. Reed is a board-certified plastic surgeon with over 15 years of experience in complex aesthetic and reconstructive procedures. She is renowned for her meticulous attention to detail, artistic vision, and patient-centered approach to achieving natural, harmonious results.',
  },
  {
    name: 'Dr. Marcus Chen',
    role: 'Dermatology & Aesthetics Specialist',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'male doctor friendly',
    bio: 'Dr. Chen specializes in advanced non-invasive treatments, cosmetic dermatology, and evidence-based skincare. He is passionate about leveraging the latest technologies to help patients achieve radiant skin and natural-looking enhancements, prioritizing safety and efficacy.',
  },
  {
    name: 'Sofia Petrova',
    role: 'Lead Aesthetician & Patient Coordinator',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'female aesthetician clinic',
    bio: 'Sofia brings a wealth of knowledge in advanced skincare treatments and ensures every patient feels welcomed, informed, and supported. She expertly guides patients through their aesthetic journey with warmth, professionalism, and in-depth understanding of our procedures.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About Meva Clinic`}
        description="Transforming beauty through medical expertise, technological innovation, and compassionate, patient-focused care."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                Our Philosophy: Your Beauty, Our Priority, Guided by Medical Excellence
              </h2>
              <p className="text-base md:text-lg text-foreground mb-4">
                At Meva Clinic, we believe that aesthetic enhancement is a deeply personal journey towards greater self-confidence and well-being, grounded in medical science and safety. Our core philosophy revolves around providing highly personalized care, utilizing evidence-based advancements in aesthetic medicine, and upholding the highest medical and ethical standards.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                We are committed to thoroughly understanding your unique aspirations and anatomical considerations. Our expert team tailors treatments to achieve natural-looking, harmonious results that enhance your individual beauty while prioritizing your health and safety. We foster a supportive, professional, and comfortable environment where you feel heard, respected, and empowered throughout your transformative experience.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base">
                <Link href="/services">Explore Our Advanced Services</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/aigen.jpeg"
                alt={`Meva Clinic state-of-the-art clinic interior`}
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
              Why Choose Meva Clinic?
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
             Our unwavering dedication to clinical excellence and patient-centered care distinguishes Meva Clinic as a premier destination for aesthetic and dental treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <Users className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <CardTitle className="font-headline text-lg md:text-xl text-primary">Distinguished Medical Team</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground">Our distinguished team comprises board-certified specialists and highly skilled medical professionals, recognized leaders in their respective fields, dedicated to delivering superior, safe, and personalized outcomes.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <Stethoscope className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <CardTitle className="font-headline text-lg md:text-xl text-primary">Personalized Patient Care</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground">At Meva Clinic, personalized care is paramount. We meticulously tailor each treatment plan to your unique anatomical considerations, aesthetic aspirations, and overall well-being, ensuring an effective and deeply individualized approach.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4 md:p-6">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground mb-3 md:mb-4">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <CardTitle className="font-headline text-lg md:text-xl text-primary">Advanced Technology & Techniques</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground">We are committed to integrating the latest, clinically-proven, and safest medical technologies and advanced procedural techniques. This investment ensures our patients benefit from cutting-edge treatments that deliver superior, predictable outcomes and enhanced safety.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Medical Experts
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of dedicated, highly qualified medical professionals is committed to guiding you with expertise and compassion throughout your aesthetic journey at Meva Clinic.
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
            Begin Your Transformation Journey
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
           We invite you to schedule a comprehensive consultation with our medical experts today. Take the decisive first step towards achieving your aesthetic aspirations in a safe, supportive, and professional environment.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base">
            <Link href="/contact">Book Your Confidential Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
