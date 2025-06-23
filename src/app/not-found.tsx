
import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/PageHeader';

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="404 - Page Not Found"
        description="Sorry, but the page you are looking for does not exist or has been moved."
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-muted-foreground mb-8">
          Try returning to the homepage or checking the URL for errors.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </>
  );
}
