import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `About Meva Clinic`,
  description: `Discover the mission, values, and distinguished team of board-certified medical professionals at Meva Clinic. Learn about our commitment to excellence in aesthetic and dental care.`,
};

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
