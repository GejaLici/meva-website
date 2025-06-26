import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from './_components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Meva Clinic | Inquiries & Consultations`,
  description: `Contact Meva Clinic for expert inquiries, confidential consultations, or to book an appointment. Our professional team is ready to assist you with your aesthetic and dental needs.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description={`We are dedicated to providing comprehensive information and support. Should you have any inquiries or wish to discuss your aesthetic goals, please complete the secure form below, or contact our professional team directly. We are here to assist you.`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl font-semibold text-primary mb-6">Our Clinic Details & Direct Contact</h2>
            <div className="space-y-4 text-foreground">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p>Rruga "Sami Frashëri", No. 123, Tirana, Albania</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p>+355 69 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>info@{SITE_DOMAIN}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">Clinic Operating Hours</h3>
                <p className="text-foreground">Monday - Friday: 09:00 - 18:00</p>
                <p className="text-foreground">Saturday: 09:00 - 14:00</p>
                <p className="text-foreground">Sunday: Closed</p>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl font-semibold text-primary mb-6">Secure Inquiry Form</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
