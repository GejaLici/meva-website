
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/shared/PageHeader';
import { EditPostForm } from './_components/EditPostForm';

interface EditPostPageProps {
    params: {
        postId: string;
    }
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    const t = await getTranslations('Admin');
    const { postId } = params;

    return (
        <>
            <PageHeader title={t('editPostTitle')} description={t('editPostDescription')} />
            <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
                <div className="bg-card p-8 rounded-lg shadow-lg">
                    <EditPostForm postId={postId} />
                </div>
            </div>
        </>
    );
}
