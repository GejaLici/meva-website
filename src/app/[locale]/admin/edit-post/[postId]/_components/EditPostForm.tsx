
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { getPostForEditing, updateBlogPost } from '@/lib/blog';
import { locales } from '@/navigation';
import { useUser } from '@/firebase';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  slug: z.string().min(1, 'Slug is required.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  author: z.string().optional(),
  category: z.string().optional(),
  imageUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  imageHint: z.string().optional(),
  excerpt: z.string().min(1, 'Excerpt is required.'),
  content: z.string().min(1, 'Content is required.'),
});

type EditPostFormValues = z.infer<typeof formSchema>;

interface EditPostFormProps {
    postId: string;
}

export function EditPostForm({ postId }: EditPostFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(locales[0]);
  const [idToken, setIdToken] = useState<string | null>(null);
  const { toast } = useToast();
  const t = useTranslations('Admin');
  const { user, loading: userLoading } = useUser();

  const form = useForm<EditPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      slug: '',
      author: '',
      category: '',
      imageUrl: '',
      imageHint: '',
      excerpt: '',
      content: '',
    },
  });

  useEffect(() => {
    if (user) {
      user.getIdToken().then(setIdToken);
    }
  }, [user]);

  useEffect(() => {
    if (!postId || !selectedLanguage) return;

    const fetchPostData = async () => {
        setIsLoadingData(true);
        const result = await getPostForEditing({ postId, language: selectedLanguage });

        if (result.success) {
            const { baseData, translationData } = result;
            const contentString = Array.isArray(translationData?.content) ? JSON.stringify(translationData.content, null, 2) : translationData?.content || '';
            form.reset({
                slug: baseData?.slug || '',
                author: baseData?.author || '',
                category: baseData?.category || '',
                imageUrl: baseData?.imageUrl || '',
                imageHint: baseData?.imageHint || '',
                title: translationData?.title || '',
                excerpt: translationData?.excerpt || '',
                content: contentString,
            });
        } else {
            toast({
                variant: 'destructive',
                title: t('fetchErrorTitle', {lng: selectedLanguage.toUpperCase()}),
                description: result.error || 'An unknown error occurred.',
            });
            const baseResult = await getPostForEditing({ postId, language: 'en' });
             form.reset({
                slug: baseResult.baseData?.slug || '',
                author: baseResult.baseData?.author || '',
                category: baseResult.baseData?.category || '',
                imageUrl: baseResult.baseData?.imageUrl || '',
                imageHint: baseResult.baseData?.imageHint || '',
                title: '',
                excerpt: '',
                content: '',
            });
        }
        setIsLoadingData(false);
    }
    fetchPostData();
  }, [postId, selectedLanguage, form, toast, t]);

  async function onSubmit(values: EditPostFormValues) {
    if (!idToken) {
      toast({
        variant: 'destructive',
        title: t('updateErrorTitle'),
        description: 'Authentication token not available. Please sign in again.',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await updateBlogPost({ 
        postId, 
        language: selectedLanguage, 
        idToken, 
        postData: values 
      });

      if (result.success) {
        toast({
          title: t('updateSuccessTitle'),
          description: t('updateSuccessDescription', { postId: result.postId, lng: selectedLanguage.toUpperCase() }),
        });
      } else {
         toast({
          variant: 'destructive',
          title: t('updateErrorTitle'),
          description: result.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('updateErrorTitle'),
        description: error instanceof Error ? error.message : 'An unexpected server error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isButtonDisabled = isSubmitting || isLoadingData || userLoading || !idToken;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <Label>{t('fieldLanguage')}</Label>
            <Select onValueChange={setSelectedLanguage} defaultValue={selectedLanguage} disabled={isLoadingData}>
                <SelectTrigger>
                    <SelectValue placeholder={t('fieldLanguagePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                    {locales.map(locale => (
                        <SelectItem key={locale} value={locale}>{locale.toUpperCase()}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">{t('languageSelectDescription')}</p>
        </div>
        
        {isLoadingData && <div className="flex justify-center p-8"><Loader2 className="h-8 w-8 animate-spin" /></div>}

        <div className={`space-y-8 ${isLoadingData ? 'opacity-50' : ''}`}>
            <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>{t('fieldSlug')}</FormLabel>
                    <FormControl>
                    <Input placeholder={t('fieldSlugPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField control={form.control} name="author" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldAuthor')}</FormLabel> <FormControl> <Input placeholder={t('fieldAuthorPlaceholder')} {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="category" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldCategory')}</FormLabel> <FormControl> <Input placeholder={t('fieldCategoryPlaceholder')} {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
            </div>
            <FormField control={form.control} name="imageUrl" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldImageUrl')}</FormLabel> <FormControl> <Input placeholder={t('fieldImageUrlPlaceholder')} {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
            <FormField control={form.control} name="imageHint" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldImageHint')}</FormLabel> <FormControl> <Input placeholder={t('fieldImageHintPlaceholder')} {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
            
            <hr className="my-8" />
            <h3 className="text-lg font-medium text-primary">{t('translationSectionTitle', {lng: selectedLanguage.toUpperCase()})}</h3>
            
            <FormField control={form.control} name="title" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldTitle')}</FormLabel> <FormControl> <Input placeholder={t('fieldTitlePlaceholder')} {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
            <FormField control={form.control} name="excerpt" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldExcerpt')}</FormLabel> <FormControl> <Textarea placeholder={t('fieldExcerptPlaceholder')} className="min-h-[100px]" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
            <FormField control={form.control} name="content" render={({ field }) => ( <FormItem> <FormLabel>{t('fieldContent')}</FormLabel> <FormControl> <Textarea placeholder={t('fieldContentPlaceholder')} className="min-h-[250px] font-mono" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
            
            <Button type="submit" disabled={isButtonDisabled} className="w-full">
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? t('submittingButton') : t('submitUpdateButton')}
            </Button>
        </div>
      </form>
    </Form>
  );
}
