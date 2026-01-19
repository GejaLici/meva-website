'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ContactForm } from '@/components/contact/ContactForm';
import { useTranslations } from 'next-intl';

interface BlogContentWrapperProps {
  children: ReactNode;
}

export function BlogContentWrapper({ children }: BlogContentWrapperProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('ContactPage');

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleCtaClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Find the closest ancestor anchor tag that matches our special link
      const ctaLink = target.closest('a[href="#contact-popup"]');
      if (ctaLink) {
        event.preventDefault();
        setIsPopupOpen(true);
      }
    };

    contentElement.addEventListener('click', handleCtaClick);

    return () => {
      contentElement.removeEventListener('click', handleCtaClick);
    };
  }, []);

  return (
    <>
      <div ref={contentRef}>{children}</div>

      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card">
          <DialogHeader>
            <DialogTitle className="text-primary">{t('formTitle')}</DialogTitle>
            <DialogDescription>
              Let us know how we can help you achieve your goals.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <ContactForm />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
