
'use client';
import { useState, useMemo, useEffect } from 'react';
import { useCollection, useUser, useFirestore } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Trash2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteBlogPost } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

interface Post {
  id: string;
  title: string;
  slug: string;
  category?: string;
  date: {
    toDate: () => Date;
  };
}

interface BlogPostsTableProps {
    searchTerm: string;
    startDate: string;
    endDate: string;
}

export function BlogPostsTable({ searchTerm, startDate, endDate }: BlogPostsTableProps) {
  const { db } = useFirestore();
  const { user, loading: userLoading } = useUser();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const { toast } = useToast();
  const t = useTranslations('AdminBlog');
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      user.getIdToken().then(setIdToken);
    }
  }, [user]);

  const postsQuery = useMemo(() => {
    if (!user || !db) {
      return null;
    }
    return query(collection(db, 'blogPosts'), orderBy('date', 'desc'));
  }, [user?.uid, db]);

  const { data: posts, loading, error } = useCollection<Post>(postsQuery);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter(post => {
      const searchMatch = !searchTerm ||
        (post.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (post.slug?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (post.category?.toLowerCase() || '').includes(searchTerm.toLowerCase());

      const postDate = post.date?.toDate();
      if (!postDate) return false;

      const start = startDate ? new Date(startDate) : null;
      if(start) start.setHours(0, 0, 0, 0);
      
      const end = endDate ? new Date(endDate) : null;
      if(end) end.setHours(23, 59, 59, 999);

      const dateMatch = (!start || postDate >= start) && (!end || postDate <= end);

      return searchMatch && dateMatch;
    });
  }, [posts, searchTerm, startDate, endDate]);


  const handleDelete = async (id: string) => {
    if (!confirm(t('deleteConfirmation'))) return;

    if (!idToken) {
      toast({
        variant: 'destructive',
        title: t('deleteErrorTitle'),
        description: 'Authentication required. Please refresh and try again.',
      });
      return;
    }

    setIsDeleting(id);
    try {
      const result = await deleteBlogPost({ postId: id, idToken });
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
  
  if (!filteredPosts || filteredPosts.length === 0) {
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
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.slug}</TableCell>
                <TableCell>{post.category || 'N/A'}</TableCell>
                <TableCell>{post.date.toDate().toLocaleDateString()}</TableCell>
                <TableCell className="text-right space-x-2">
                    <Button asChild variant="outline" size="icon" aria-label={t('editAriaLabel')}>
                        <Link href={`/admin/edit-post/${post.id}`}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={() => handleDelete(post.id)}
                        disabled={isDeleting === post.id || !idToken}
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
