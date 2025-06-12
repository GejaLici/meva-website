
import { PageHeader } from '@/components/shared/PageHeader';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Read the latest news, articles, and insights from ${SITE_NAME}.`,
};

// Changed to async function to await data fetching
export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <PageHeader
        title="Our Blog"
        description="Stay updated with the latest news, tips, and insights from the world of aesthetic and dental care."
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            No blog posts available at the moment. Please check back later or ensure your Firestore 'blogPosts' collection is populated.
          </p>
        )}
      </div>
    </>
  );
}

