'use client';
import { useState, useMemo, useEffect } from 'react';
import { useCollection, useUser, useFirestore } from '@/firebase';
import { collection, query } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteContactSubmission } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
  submittedAt: {
    toDate: () => Date;
  };
}

interface ContactSubmissionsTableProps {
  searchTerm: string;
  sourceFilter: string;
  dateFilter: string;
}

export function ContactSubmissionsTable({ searchTerm, sourceFilter, dateFilter }: ContactSubmissionsTableProps) {
  const { db } = useFirestore();
  const { user, loading: userLoading } = useUser();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const { toast } = useToast();
  const t = useTranslations('AdminContacts');
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      user.getIdToken().then(setIdToken);
    }
  }, [user]);

  const submissionsQuery = useMemo(() => {
    if (!user || !db) {
      return null;
    }
    // Firestore security rules will enforce that only authenticated users can read.
    return query(collection(db, 'contactSubmissions'));
  }, [user, db]);
  
  const { data: submissions, loading, error } = useCollection<Submission>(submissionsQuery);

  const filteredSubmissions = useMemo(() => {
    if (!submissions) return [];
    return submissions.filter(submission => {
        const generalSearchMatch = !searchTerm ||
            (submission.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (submission.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (submission.subject?.toLowerCase() || '').includes(searchTerm.toLowerCase());
        
        const sourceMatch = !sourceFilter || (submission.source?.toLowerCase() || '').includes(sourceFilter.toLowerCase());

        const dateMatch = !dateFilter || (
            submission.submittedAt &&
            submission.submittedAt.toDate().toISOString().startsWith(dateFilter)
        );

        return generalSearchMatch && sourceMatch && dateMatch;
    });
  }, [submissions, searchTerm, sourceFilter, dateFilter]);


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
      const result = await deleteContactSubmission({ submissionId: id, idToken });
      if (result.success) {
        toast({
          title: t('deleteSuccessTitle'),
          description: t('deleteSuccessDescription', { submissionId: id }),
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

  if (!filteredSubmissions || filteredSubmissions.length === 0) {
    return <p>{t('noSubmissions')}</p>
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
              <TableHead>{t('headerName')}</TableHead>
              <TableHead>{t('headerEmail')}</TableHead>
              <TableHead>{t('headerSubject')}</TableHead>
              <TableHead>{t('headerSource')}</TableHead>
              <TableHead>{t('headerDate')}</TableHead>
              <TableHead className="text-right">{t('headerActions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubmissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.subject}</TableCell>
                <TableCell><span className="font-mono text-xs">{submission.source || 'N/A'}</span></TableCell>
                <TableCell>{submission.submittedAt ? submission.submittedAt.toDate().toLocaleString() : 'N/A'}</TableCell>
                <TableCell className="text-right">
                    <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={() => handleDelete(submission.id)}
                        disabled={isDeleting === submission.id || !idToken}
                        aria-label={t('deleteAriaLabel')}
                    >
                        {isDeleting === submission.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
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
