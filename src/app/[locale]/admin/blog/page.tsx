'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { BlogPostsTable } from './_components/BlogPostsTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AdminBlogPage() {
    const t = useTranslations('AdminBlog');
    const tShared = useTranslations('AdminContacts');
    const [searchTerm, setSearchTerm] = useState('');
    const [monthFilter, setMonthFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    const dateFilter = useMemo(() => {
        if (yearFilter && monthFilter) {
            return `${yearFilter}-${monthFilter}`;
        }
        return '';
    }, [yearFilter, monthFilter]);
    
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    const months = [
        { value: '01', label: 'January' }, { value: '02', label: 'February' },
        { value: '03', label: 'March' }, { value: '04', label: 'April' },
        { value: '05', label: 'May' }, { value: '06', label: 'June' },
        { value: '07', label: 'July' }, { value: '08', label: 'August' },
        { value: '09', label: 'September' }, { value: '10', label: 'October' },
        { value: '11', label: 'November' }, { value: '12', label: 'December' }
    ];

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
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
                    <Label htmlFor="monthFilter">{tShared('monthFilterLabel')}</Label>
                     <Select value={monthFilter} onValueChange={setMonthFilter}>
                        <SelectTrigger id="monthFilter">
                            <SelectValue placeholder={tShared('monthFilterPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">{tShared('allMonths')}</SelectItem>
                            {months.map(m => (
                                <SelectItem key={m.value} value={m.value}>{tShared(`months.${m.label}`)}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                     <Label htmlFor="yearFilter">{tShared('yearFilterLabel')}</Label>
                     <Select value={yearFilter} onValueChange={setYearFilter}>
                        <SelectTrigger id="yearFilter">
                            <SelectValue placeholder={tShared('yearFilterPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                             <SelectItem value="">{tShared('allYears')}</SelectItem>
                            {years.map(y => (
                                <SelectItem key={y} value={y.toString()}>{y.toString()}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <BlogPostsTable searchTerm={searchTerm} dateFilter={dateFilter} />
        </div>
    );
}
