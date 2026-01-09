
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { BlogPostsTable } from './_components/BlogPostsTable';

export default async function AdminBlogPage() {
    const t = await getTranslations('AdminBlog');

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-muted-foreground">{t('description')}</p>
                </div>
                <Button asChild>
                    <Link href="/admin/add-post">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        {t('addPost')}
                    </Link>
                </Button>
            </div>
            <BlogPostsTable />
        </div>
    );
}
