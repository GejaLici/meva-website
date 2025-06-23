
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { formatDate, cn } from '@/lib/utils';
import type { ContentBlock, ContentLeaf, RichTextSpan } from '@/types/blog';
import { SITE_NAME } from '@/lib/constants';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return { 
      title: `Post Not Found | ${SITE_NAME}`,
      description: `The requested blog post could not be found on ${SITE_NAME}.` 
    };
  }
  const metaDescription = post.excerpt.length > 155 
    ? `${post.excerpt.substring(0, 152)}...` 
    : post.excerpt;
  return {
    title: `${post.title} | ${SITE_NAME} Blog`,
    description: metaDescription,
    keywords: post.category ? `${post.category}, ${post.title}, ${SITE_NAME}` : `${post.title}, ${SITE_NAME}`,
    authors: post.author ? [{ name: post.author }] : [{ name: SITE_NAME }],
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
          if (span.link) element = <Link href={span.link} className="text-accent hover:text-accent/80 underline" target="_blank" rel="noopener noreferrer">{element}</Link>;
          return <React.Fragment key={index}>{element}</React.Fragment>;
        }
        return null;
      })}
    </>
  );
}

// Main content rendering function
function renderContentBlocks(blocks: ContentBlock[] | undefined): (JSX.Element | null)[] | null {
  if (!blocks || blocks.length === 0) {
    return [<p key="no-content" className="text-muted-foreground">This post has no content yet. Please check back later for updates.</p>];
  }

  return blocks.map((block) => {
    if (!block || !block.id || !block.type) {
      // console.warn('Invalid block structure:', block);
      return null; 
    }
    switch (block.type) {
      case 'heading':
        const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
        return (
          <Tag key={block.id} className={cn(
            "font-headline text-primary mb-4",
            {
              'text-4xl mt-8': block.level === 1,
              'text-3xl mt-6': block.level === 2,
              'text-2xl mt-5': block.level === 3,
              'text-xl mt-4': block.level === 4,
              'text-lg mt-3': block.level === 5, 
              'text-base mt-2 font-semibold': block.level === 6, 
            }
          )}>
            {renderRichText(block.children)}
          </Tag>
        );
      case 'paragraph':
        return <p key={block.id} className="mb-4 text-foreground leading-relaxed">{renderRichText(block.children)}</p>;
      case 'image':
        return (
          <figure key={block.id} className="my-6">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md border">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                style={{ objectFit: 'contain' }}
                data-ai-hint={block.imageHint}
                className="bg-muted"
                quality={90}
              />
            </div>
            {block.caption && block.caption.length > 0 && (
              <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                {renderRichText(block.caption)}
              </figcaption>
            )}
          </figure>
        );
      case 'list':
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag key={block.id} className={cn("mb-4 pl-6 space-y-2 text-foreground", block.ordered ? 'list-decimal' : 'list-disc')}>
            {block.items.map((item, index) => (
              <li key={index}>{renderRichText(item)}</li>
            ))}
          </ListTag>
        );
      case 'code':
        return (
          <pre key={block.id} className="bg-muted p-4 rounded-md overflow-x-auto my-6 text-sm">
            <code className={`language-${block.language || 'plaintext'} text-foreground/90`}>
              {block.code}
            </code>
          </pre>
        );
      case 'blockquote':
        return (
          <blockquote key={block.id} className="my-6 border-l-4 border-accent pl-4 italic text-muted-foreground">
            <p>{renderRichText(block.children)}</p>
          </blockquote>
        )
      default:
        // console.warn('Unknown block type:', (block as any).type);
        return null;
    }
  });
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader title={post.title} />
      <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
        <article className="text-foreground mx-auto">
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg border">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={post.imageHint || 'blog post feature image'}
                quality={90}
              />
            </div>
          )}

          <div className="mb-6 text-sm text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Published on {formatDate(post.date)}</span>
            </div>
            {post.author && (
              <div className="flex items-center">
                <UserCircle className="mr-2 h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            )}
            {post.category && (
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                <span>{post.category}</span>
              </div>
            )}
          </div>
          
          <div className="mt-8 space-y-6">
            {renderContentBlocks(post.content)}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/blog">Back to All Blog Articles</Link>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
}
