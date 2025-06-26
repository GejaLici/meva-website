import { PageHeader } from '@/components/shared/PageHeader';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = t('title');
  return {
    title: `Expert Blog | ${siteTitle}`,
    description: `Stay informed with the latest advancements, expert tips, and insightful articles from the forefront of aesthetic and dental care, curated by the professionals at ${siteTitle}.`,
  };
}

// Changed to async function to await data fetching
export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const t = await getTranslations('Site');
  const siteTitle = t('title');

  return (
    <>
      <PageHeader
        title="Our Expert Insights Blog"
        description={`Stay informed with the latest advancements, expert tips, and insightful articles from the forefront of aesthetic and dental care, curated by the professionals at ${siteTitle}.`}
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
            No blog posts are available at this moment. Please check back later, or ensure your Firestore 'blogPosts' collection is populated with valid entries.
          </p>
        )}
      </div>
    </>
  );
}
