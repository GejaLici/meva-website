'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { BlogPostsTable } from './_components/BlogPostsTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminBlogPage() {
    const t = useTranslations('AdminBlog');
    const tShared = useTranslations('AdminContacts');
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('');

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
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="md:col-span-1">
                    <Label htmlFor="searchTerm">{t('filterPlaceholder')}</Label>
                    <Input
                        id="searchTerm"
                        placeholder={t('filterPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="dateFilter">{tShared('dateFilterLabel')}</Label>
                     <Input
                        id="dateFilter"
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>
            <BlogPostsTable searchTerm={searchTerm} dateFilter={dateFilter} />
        </div>
    );
}
