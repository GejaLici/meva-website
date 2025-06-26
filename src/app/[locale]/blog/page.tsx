import { PageHeader } from '@/components/shared/PageHeader';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'BlogPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  return {
    title: t('metaTitle', { siteTitle: tSite('title') }),
    description: t('metaDescription', { siteTitle: tSite('title') }),
  };
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const t = await getTranslations('BlogPage');
  const tSite = await getTranslations('Site');

  return (
    <>
      <PageHeader
        title={t('title')}
        description={t('description', {siteTitle: tSite('title')})}
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
            {t('noPosts')}
          </p>
        )}
      </div>
    </>
  );
}
