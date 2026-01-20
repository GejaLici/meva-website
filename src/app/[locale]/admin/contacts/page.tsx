
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
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                 <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-muted-foreground">{t('description')}</p>
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 border rounded-lg bg-card">
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
                 <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                        <Label htmlFor="startDate">{t('dateFilterFromLabel')}</Label>
                        <Input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <Label htmlFor="endDate">{t('dateFilterToLabel')}</Label>
                        <Input
                            id="endDate"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <ContactSubmissionsTable searchTerm={searchTerm} sourceFilter={sourceFilter} startDate={startDate} endDate={endDate} />
        </div>
    );
}
