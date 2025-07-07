
'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { serviceCategories } from '@/lib/services';
import { Logo } from './Logo';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');
  const tServices = useTranslations('Services');
  const aestheticCategories = serviceCategories.filter(cat => ['facial-surgery', 'facial-treatments', 'body-surgical', 'body-non-surgical'].includes(cat.id));

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-foreground">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs p-0 bg-background">
        <SheetHeader className="border-b p-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-2 p-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            {t('home')}
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            {t('about')}
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:no-underline [&[data-state=open]>svg]:text-primary">
                {t('services')}
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                {aestheticCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/services/${category.slug}`}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {tServices(`categories.${category.id}.name`)}
                  </Link>
                ))}
                <Separator className="my-2" />
                <Link
                  href="/services/dental"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {t('dentalServices')}
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/gallery"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            {t('gallery')}
          </Link>

          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            {t('blog')}
          </Link>

          <Link
            href="/faq"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            {t('faq')}
          </Link>

          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            {t('contact')}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
