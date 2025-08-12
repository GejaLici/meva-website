
import { Skeleton } from '@/components/ui/skeleton';

export default function ServicePageSkeleton() {
    return (
        <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <Skeleton className="h-12 w-1/2 mx-auto mb-12" />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className='prose prose-lg'>
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                    <Skeleton className="h-8 w-1/2 mt-6" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-2" />
                </div>
                 <div>
                    <Skeleton className="w-full aspect-video rounded-lg" />
                     <div className="p-6 rounded-lg bg-muted/50 mt-8">
                        <Skeleton className="h-8 w-3/4 mb-4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-12 w-full mt-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}
