
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About NovaSculpt Clinic',
  description: 'Learn about NovaSculpt Clinic, our mission, our values, and our team of expert aesthetic specialists dedicated to transforming your beauty with care.',
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
        title="About NovaSculpt Clinic"
        description="Transforming beauty with expertise, innovation, and compassionate care."
      />

      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                Our Philosophy: Your Beauty, Our Priority
              </h2>
              <p className="text-lg text-foreground mb-4">
                At NovaSculpt Clinic, we believe that aesthetic enhancement is a journey towards greater self-confidence and well-being. Our core philosophy revolves around providing personalized care, utilizing the latest advancements in aesthetic medicine, and upholding the highest standards of safety and ethics.
              </p>
              <p className="text-muted-foreground mb-6">
                We strive to understand your unique aspirations and tailor our treatments to achieve natural-looking, harmonious results that enhance your individual beauty. Our team is committed to creating a supportive and comfortable environment where you feel heard, respected, and empowered.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/aigen.jpeg"
                alt="NovaSculpt Clinic Interior"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="modern clinic interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose NovaSculpt?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to excellence in every aspect of your care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our highly skilled and experienced specialists are leaders in their respective fields, committed to delivering exceptional results.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mb-4">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We tailor every treatment plan to your unique needs and aesthetic goals, ensuring a personalized and effective approach.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mb-4">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We invest in the latest, safest technologies and techniques to provide you with cutting-edge treatments and superior outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Experts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of dedicated professionals is here to guide you on your aesthetic journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-72">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={member.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{member.name}</CardTitle>
                  <p className="text-sm text-accent font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Schedule a consultation with our experts today and take the first step towards achieving your aesthetic goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
