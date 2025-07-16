
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/navigation';
import { CalendarDays, UserCircle, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { formatDate, cn } from '@/lib/utils';
import type { BlogPost, HeadingBlock } from '@/types/blog';
import { useTranslations } from 'next-intl';

// TOC component
const TableOfContents = ({ headings }: { headings: { id: string; text: string }[] }) => {
  const t = useTranslations('BlogPostPage');
  const [activeId, setActiveId] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = headings.map(({ id }) => document.getElementById(id)).filter(Boolean);

    if (observer.current) {
      observer.current.disconnect();
    }
    
    const options = {
      rootMargin: '0px 0px -80% 0px',
      threshold: 0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    headingElements.forEach(el => observer.current?.observe(el!));

    return () => observer.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-primary">{t('tableOfContents')}</h3>
      <ul className="space-y-2.5 max-h-[50vh] overflow-y-auto">
        {headings.map(heading => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className={cn(
                "text-sm text-muted-foreground transition-all duration-300 hover:text-primary pl-2 border-l-2",
                activeId === heading.id 
                  ? "font-semibold text-primary border-primary" 
                  : "border-transparent"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface BlogPostClientProps {
  post: BlogPost;
  headings: { id: string; text: string }[];
  locale: string;
}

export default function BlogPostClient({ post, headings, locale }: BlogPostClientProps) {
  const t = useTranslations('BlogPostPage');
  
  return (
    <aside className="hidden lg:block lg:col-span-4">
      <div className="sticky top-24 space-y-8">
        <TableOfContents headings={headings} />
        
        <div className="space-y-4">
           <h3 className="font-semibold text-lg text-primary">{t('sharePost')}</h3>
           <div className="flex space-x-2">
              <Button variant="outline" size="icon" aria-label={t('shareOnFacebook')}>
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="outline" size="icon" aria-label={t('shareOnTwitter')}>
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="outline" size="icon" aria-label={t('shareOnLinkedIn')}>
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </Button>
           </div>
        </div>
        
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{t('ctaTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{t('ctaDescription')}</p>
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">{t('ctaButton')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
