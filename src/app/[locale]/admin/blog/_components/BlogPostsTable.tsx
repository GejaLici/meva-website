
'use client';
import { useState, useMemo } from 'react';
import { useCollection, useUser } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Trash2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteBlogPost } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';

interface Post {
  id: string;
  title: string;
  slug: string;
  category?: string;
  date: {
    toDate: () => Date;
  };
}

export function BlogPostsTable() {
  const { db } = useFirestore();
  const { user, loading: userLoading } = useUser();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const { toast } = useToast();
  const t = useTranslations('AdminBlog');

  const collectionRef = useMemo(() => {
    if (user && db) {
      return collection(db, 'blogPosts');
    }
    return null;
  }, [user, db]);

  const { data: posts, loading, error } = useCollection<Post>(collectionRef);

  const handleDelete = async (id: string) => {
    if (!confirm(t('deleteConfirmation'))) return;

    setIsDeleting(id);
    try {
      const result = await deleteBlogPost(id);
      if (result.success) {
        toast({
          title: t('deleteSuccessTitle'),
          description: t('deleteSuccessDescription', { postId: id }),
        });
      } else {
        toast({
          variant: 'destructive',
          title: t('deleteErrorTitle'),
          description: result.error,
        });
      }
    } catch (e: any) {
      toast({
        variant: 'destructive',
        title: t('deleteErrorTitle'),
        description: e.message,
      });
    } finally {
      setIsDeleting(null);
    }
  };

  if (loading || userLoading) {
    return <div className="flex justify-center items-center py-10"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  if (error) {
    return <p className="text-destructive">Error: {error.message}</p>;
  }
  
  if (!posts || posts.length === 0) {
    return <p>{t('noPosts')}</p>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('tableTitle')}</CardTitle>
        <CardDescription>{t('tableDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('headerTitle')}</TableHead>
              <TableHead>{t('headerSlug')}</TableHead>
              <TableHead>{t('headerCategory')}</TableHead>
              <TableHead>{t('headerDate')}</TableHead>
              <TableHead className="text-right">{t('headerActions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.slug}</TableCell>
                <TableCell>{post.category || 'N/A'}</TableCell>
                <TableCell>{post.date.toDate().toLocaleDateString()}</TableCell>
                <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="icon" aria-label={t('editAriaLabel')}>
                        <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={() => handleDelete(post.id)}
                        disabled={isDeleting === post.id}
                        aria-label={t('deleteAriaLabel')}
                    >
                        {isDeleting === post.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
