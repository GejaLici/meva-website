
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function AdminDashboardPage() {
    const t = await getTranslations('AdminDashboard');

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight mb-6">{t('title')}</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('welcomeTitle')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{t('welcomeDescription')}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
