
import React from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { cn, formatDate } from '@/lib/utils';
import type { ContentBlock, ContentLeaf, HeadingBlock } from '@/types/blog';
import Image from 'next/image';
import { Link } from '@/navigation';
import { CalendarDays, UserCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { ServiceGallery } from '@/components/services/ServiceGallery';
import { BlogContentWrapper } from '@/components/blog/BlogContentWrapper';

const BlogPostClient = dynamic(
  () => import('./_components/BlogPostClient'),
  {
    ssr: false,
    loading: () => (
      <aside className="hidden lg:block lg:col-span-4">
        <div className="sticky top-24 space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="space-y-2.5">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-24" />
            <div className="flex space-x-2">
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-10" />
            </div>
          </div>
          <Skeleton className="h-48 w-full" />
        </div>
      </aside>
    ),
  }
);


interface BlogPostPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const posts = await getAllBlogPosts(locale);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'BlogPostPage'});
  const tSite = await getTranslations({locale: params.locale, namespace: 'Site'});
  const siteName = tSite('title');
  const post = await getBlogPostBySlug(params.slug, params.locale);

  if (!post) {
    return { 
      title: t('postNotFoundTitle', { siteName }),
      description: t('postNotFoundDescription', { siteName }),
    };
  }

  const metaDescription = post.excerpt.length > 155 
    ? `${post.excerpt.substring(0, 152)}...` 
    : post.excerpt;

  return {
    title: t('metaTitle', { postTitle: post.title, siteName }),
    description: t('metaDescription', { postExcerpt: metaDescription }),
    keywords: post.category ? `${post.category}, ${post.title}, ${siteName}` : `${post.title}, ${siteName}`,
    authors: post.author ? [{ name: post.author }] : [{ name: siteName }],
  };
}

// Helper to render RichTextSpans
function renderRichText(spans: ContentLeaf[] | undefined): JSX.Element | null {
  if (!spans) return null;
  return (
    <>
      {spans.map((span, index) => {
        if (span.type === 'text') {
          let element: JSX.Element = <>{span.text}</>;
          if (span.bold) element = <strong>{element}</strong>;
          if (span.italic) element = <em>{element}</em>;
          if (span.underline) element = <u>{element}</u>;
          if (span.code) element = <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono text-foreground/80">{element}</code>;
          if (span.link) element = <a href={span.link} className="text-accent hover:text-accent/80 underline" target="_blank" rel="noopener noreferrer">{element}</a>;
          return <React.Fragment key={index}>{element}</React.Fragment>;
        }
        return null;
      })}
    </>
  );
}

// Main content rendering function
async function renderContentBlocks(blocks: ContentBlock[] | string | undefined): Promise<(JSX.Element | null)[] | null> {
  if (!blocks || (Array.isArray(blocks) && blocks.length === 0)) {
    const t = await getTranslations('BlogPostPage');
    return [<p key="no-content" className="text-muted-foreground">{t('noContent')}</p>];
  }
  
  if (typeof blocks === 'string') {
    return [<div key="rawHtml" dangerouslySetInnerHTML={{ __html: blocks }} />];
  }

  return blocks.map((block) => {
    if (!block || !block.id || !block.type) {
      return null; 
    }
    switch (block.type) {
      case 'heading':
        const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
        return (
          <Tag key={block.id} id={block.id} className={cn({
            'text-4xl mt-8': block.level === 1,
            'text-3xl mt-6': block.level === 2,
            'text-2xl mt-5': block.level === 3,
            'text-xl mt-4': block.level === 4,
          })}>
            {renderRichText(block.children)}
          </Tag>
        );
      case 'paragraph':
        return <p key={block.id}>{renderRichText(block.children)}</p>;
      case 'image':
        return (
          <div key={block.id} className="relative w-full aspect-video my-8 rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 67vw, 850px"
              style={{ objectFit: 'cover' }}
              data-ai-hint={block.imageHint}
            />
          </div>
        );
      case 'list':
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag key={block.id}>
            {block.items.map((item, index) => (
              <li key={index}>{renderRichText(item)}</li>
            ))}
          </ListTag>
        );
      case 'code':
        return (
          <pre key={block.id} className="bg-muted text-muted-foreground p-4 rounded-md overflow-x-auto my-6 text-xs font-mono leading-relaxed border">
            <code>
              {block.code}
            </code>
          </pre>
        );
      case 'blockquote':
        return (
          <blockquote key={block.id}>
            {renderRichText(block.children)}
          </blockquote>
        )
      case 'cta':
        return (
          <Card key={block.id} className="not-prose my-8 bg-accent/20 border-accent/50 shadow-lg">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-lg font-semibold text-foreground text-center md:text-left">{block.text}</p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0 w-full md:w-auto">
                <a href={block.buttonLink} target="_blank" rel="noopener noreferrer">{block.buttonText}</a>
              </Button>
            </CardContent>
          </Card>
        );
      case 'html':
        return <div key={block.id} dangerouslySetInnerHTML={{ __html: block.html }} />;
      default:
        return null;
    }
  });
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const t = await getTranslations('BlogPostPage');
  const tDetails = await getTranslations('ServiceDetailsPage');
  const post = await getBlogPostBySlug(params.slug, params.locale);

  if (!post) {
    notFound();
  }

  const headings = Array.isArray(post.content) ? post.content
    .filter((block): block is HeadingBlock => block.type === 'heading' && block.level === 2)
    .map(block => ({
      id: block.id,
      text: block.children.map(child => child.text).join('')
    })) : [];
  
  const renderedContent = await renderContentBlocks(post.content);
  const encodedFeatureImageUrl = post.imageUrl ? encodeURI(post.imageUrl) : undefined;

  return (
     <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
        
        <main className="lg:col-span-8">
          <article>
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
                  <span>{t('publishedOn', { date: formatDate(post.date, params.locale) })}</span>
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
            
            <BlogContentWrapper postSlug={post.slug}>
              <div className="prose prose-lg max-w-none text-foreground prose-headings:scroll-mt-24 prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground prose-blockquote:border-accent">
                {renderedContent}
              </div>
            </BlogContentWrapper>

             {post.gallery && post.gallery.length > 0 && (
                <section className="my-12 md:my-16 not-prose">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary">{tDetails('galleryTitle')}</h2>
                        <p className="mt-2 text-muted-foreground">{tDetails('gallerySubtitle', { serviceName: post.title })}</p>
                    </div>
                    <ServiceGallery images={post.gallery} />
                </section>
            )}

            <div className="mt-12 text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/blog">{t('backButton')}</Link>
              </Button>
            </div>
          </article>
        </main>
        
        <BlogPostClient post={post} headings={headings} locale={params.locale} />

      </div>
    </div>
  );
}
