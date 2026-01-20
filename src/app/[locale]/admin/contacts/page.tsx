'use client';
import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { ContactSubmissionsTable } from './_components/ContactSubmissionsTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AdminContactsPage() {
    const t = useTranslations('AdminContacts');
    const [searchTerm, setSearchTerm] = useState('');
    const [sourceFilter, setSourceFilter] = useState('');
    const [monthFilter, setMonthFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    const dateFilter = useMemo(() => {
        const year = yearFilter && yearFilter !== 'all' ? yearFilter : null;
        const month = monthFilter && monthFilter !== 'all' ? monthFilter : null;
        
        if (year && month) {
            return `${year}-${month}`;
        }
        if (year) {
            return year;
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
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 border rounded-lg bg-card">
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
                    <Label htmlFor="monthFilter">{t('monthFilterLabel')}</Label>
                     <Select value={monthFilter} onValueChange={setMonthFilter}>
                        <SelectTrigger id="monthFilter">
                            <SelectValue placeholder={t('monthFilterPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">{t('allMonths')}</SelectItem>
                            {months.map(m => (
                                <SelectItem key={m.value} value={m.value}>{t(`months.${m.label}`)}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                     <Label htmlFor="yearFilter">{t('yearFilterLabel')}</Label>
                     <Select value={yearFilter} onValueChange={setYearFilter}>
                        <SelectTrigger id="yearFilter">
                            <SelectValue placeholder={t('yearFilterPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                             <SelectItem value="all">{t('allYears')}</SelectItem>
                            {years.map(y => (
                                <SelectItem key={y} value={y.toString()}>{y.toString()}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <ContactSubmissionsTable searchTerm={searchTerm} sourceFilter={sourceFilter} dateFilter={dateFilter} />
        </div>
    );
}
