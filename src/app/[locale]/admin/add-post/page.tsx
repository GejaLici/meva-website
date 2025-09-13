
import { PageHeader } from '@/components/shared/PageHeader';
import { AddPostForm } from './_components/AddPostForm';
import { getTranslations } from 'next-intl/server';

export default async function AddPostPage() {
    const t = await getTranslations('Admin');
    return (
        <>
            <PageHeader title={t('addPostTitle')} description={t('addPostDescription')} />
            <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
                <div className="bg-card p-8 rounded-lg shadow-lg">
                    <AddPostForm />
                </div>
            </div>
        </>
    );
}
