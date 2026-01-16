
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { addBlogPost } from '@/lib/blog';
import { locales } from '@/navigation';
import { useUser } from '@/firebase';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters long.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  author: z.string().optional(),
  category: z.string().optional(),
  imageUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  imageHint: z.string().optional(),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters long.'),
  content: z.string().min(50, 'Content must be at least 50 characters long.'),
  language: z.enum(locales),
});

type AddPostFormValues = z.infer<typeof formSchema>;

export function AddPostForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idToken, setIdToken] = useState<string | null>(null);
  const { toast } = useToast();
  const t = useTranslations('Admin');
  const { user, loading: userLoading } = useUser();

  const form = useForm<AddPostFormValues>({
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
      language: 'en',
    },
  });

  useEffect(() => {
    if (user) {
      user.getIdToken().then(setIdToken);
    }
  }, [user]);

  async function onSubmit(values: AddPostFormValues) {
    if (!idToken) {
      toast({
        variant: 'destructive',
        title: t('postErrorTitle'),
        description: 'Authentication token not available. Please sign in again.',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await addBlogPost({ postData: values, idToken });
      if (result.success) {
        toast({
          title: t('postSuccessTitle'),
          description: t('postSuccessDescription', { postId: result.id }),
        });
        form.reset();
      } else {
         toast({
          variant: 'destructive',
          title: t('postErrorTitle'),
          description: result.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('postErrorTitle'),
        description: error instanceof Error ? error.message : 'An unexpected server error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isButtonDisabled = isSubmitting || userLoading || !idToken;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fieldTitle')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fieldTitlePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
        </div>
        <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fieldLanguage')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={t('fieldLanguagePlaceholder')} />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {locales.map(locale => (
                            <SelectItem key={locale} value={locale}>{locale.toUpperCase()}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fieldAuthor')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fieldAuthorPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fieldCategory')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fieldCategoryPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
         <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fieldImageUrl')}</FormLabel>
              <FormControl>
                <Input placeholder={t('fieldImageUrlPlaceholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="imageHint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fieldImageHint')}</FormLabel>
              <FormControl>
                <Input placeholder={t('fieldImageHintPlaceholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fieldExcerpt')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('fieldExcerptPlaceholder')} className="min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fieldContent')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('fieldContentPlaceholder')}
                  className="min-h-[250px] font-mono"
                  {...field}
                />
              </FormControl>
               <p className="text-sm text-muted-foreground">{t('fieldContentHint')}</p>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isButtonDisabled} className="w-full">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? t('submittingButton') : t('submitPostButton')}
        </Button>
      </form>
    </Form>
  );
}
