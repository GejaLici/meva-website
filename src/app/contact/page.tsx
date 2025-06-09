import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from './_components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Na Kontaktoni',
  description: 'Kontaktoni NovaSculpt Clinic për pyetje, konsultime ose për të rezervuar një takim. Jemi këtu për t\'ju ndihmuar.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Na Kontaktoni"
        description="Jemi këtu për t'iu përgjigjur çdo pyetjeje që mund të keni. Plotësoni formularin më poshtë ose na kontaktoni direkt."
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl font-semibold text-primary mb-6">Informacioni i Kontaktit</h2>
            <div className="space-y-4 text-foreground">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Adresa:</h3>
                  <p>Rruga "Sami Frashëri", Nr. 123, Tiranë, Shqipëri</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Telefoni:</h3>
                  <p>+355 69 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>info@novasculpt.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">Orari i Punës</h3>
                <p className="text-foreground">E Hënë - E Premte: 09:00 - 18:00</p>
                <p className="text-foreground">E Shtunë: 09:00 - 14:00</p>
                <p className="text-foreground">E Diel: Mbyllur</p>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl font-semibold text-primary mb-6">Na Dërgoni një Mesazh</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
