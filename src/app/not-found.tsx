import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/PageHeader';

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="404 - Faqja nuk u Gjet"
        description="Na vjen keq, por faqja që po kërkoni nuk ekziston ose është zhvendosur."
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-muted-foreground mb-8">
          Provoni të ktheheni në faqen kryesore ose të kontrolloni URL-në për gabime.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/">Kthehu në Faqen Kryesore</Link>
        </Button>
      </div>
    </>
  );
}
