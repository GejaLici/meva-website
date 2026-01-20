'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { BlogPostsTable } from './_components/BlogPostsTable';
import { Input } from '@/components/ui/input';

export default function AdminBlogPage() {
    const t = await getTranslations('AdminBlog');
    const [searchTerm, setSearchTerm] = useState('');

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
             <div className="mb-6">
                <Input
                    placeholder={t('filterPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>
            <BlogPostsTable searchTerm={searchTerm} />
        </div>
    );
}
