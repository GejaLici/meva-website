import { SITE_NAME } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-1">
            Website designed by an expert designer.
          </p>
        </div>
      </div>
    </footer>
  );
}
