'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ContactSubmissionsTable } from './_components/ContactSubmissionsTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminContactsPage() {
    const t = useTranslations('AdminContacts');
    const [searchTerm, setSearchTerm] = useState('');
    const [sourceFilter, setSourceFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                 <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-muted-foreground">{t('description')}</p>
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 border rounded-lg bg-card">
                 <div>
                    <Label htmlFor="searchTerm">{t('filterPlaceholder')}</Label>
                    <Input
                        id="searchTerm"
                        placeholder={t('filterPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                 <div>
                    <Label htmlFor="sourceFilter">{t('sourceFilterPlaceholder')}</Label>
                    <Input
                        id="sourceFilter"
                        placeholder={t('sourceFilterPlaceholder')}
                        value={sourceFilter}
                        onChange={(e) => setSourceFilter(e.target.value)}
                    />
                </div>
                 <div>
                    <Label htmlFor="dateFilter">{t('dateFilterLabel')}</Label>
                    <Input
                        id="dateFilter"
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>
            <ContactSubmissionsTable searchTerm={searchTerm} sourceFilter={sourceFilter} dateFilter={dateFilter} />
        </div>
    );
}
