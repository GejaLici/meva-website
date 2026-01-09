
import { getTranslations } from 'next-intl/server';
import { ContactSubmissionsTable } from './_components/ContactSubmissionsTable';

export default async function AdminContactsPage() {
    const t = await getTranslations('AdminContacts');

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight mb-6">{t('title')}</h1>
            <p className="text-muted-foreground mb-6">{t('description')}</p>
            <ContactSubmissionsTable />
        </div>
    );
}
