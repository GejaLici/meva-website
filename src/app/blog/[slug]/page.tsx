
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { formatDate } from '@/lib/utils'; // We'll create this utility

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader title={post.title} />
      <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-foreground mx-auto">
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={post.imageHint || 'blog post feature image'}
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
          
          <div 
            className="prose-p:mb-4 prose-headings:text-primary prose-headings:font-headline prose-a:text-accent hover:prose-a:text-accent/80"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
}
