
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/navigation';
import { CalendarDays, UserCircle, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
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
    
    // The top value of -20% means a heading is considered "active" when it's in the top 20% of the viewport.
    // The bottom value of -80% means it's still active until it's 80% of the way up and off the screen.
    // This makes it so the correct heading is highlighted as the user scrolls.
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

// Main Layout Component
interface BlogPostLayoutProps {
  post: BlogPost;
  headings: { id: string; text: string }[];
  locale: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ post, headings, locale, children }: BlogPostLayoutProps) {
  const t = useTranslations('BlogPostPage');
  const encodedFeatureImageUrl = post.imageUrl ? encodeURI(post.imageUrl) : undefined;
  
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
        
        <main className="lg:col-span-8">
          <article>
            {/* Post Header */}
            <header className="mb-8">
              {post.category && (
                <p className="text-base font-semibold text-accent mb-2">{post.category}</p>
              )}
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <div className="mb-6 text-sm text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{t('publishedOn', { date: formatDate(post.date, locale) })}</span>
                </div>
                {post.author && (
                  <div className="flex items-center">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>{t('by', { author: post.author })}</span>
                  </div>
                )}
              </div>
              {encodedFeatureImageUrl && (
                <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-lg border">
                  <Image
                    src={encodedFeatureImageUrl}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 67vw, 850px"
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={post.imageHint || 'blog post feature image'}
                  />
                </div>
              )}
            </header>

            {/* Post Body */}
            <div className="prose prose-lg max-w-none text-foreground prose-headings:scroll-mt-24 prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground prose-blockquote:border-accent">
              {children}
            </div>

            {/* Back to Blog Button */}
            <div className="mt-12 text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/blog">{t('backButton')}</Link>
              </Button>
            </div>
          </article>
        </main>
        
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
      </div>
    </div>
  );
}
