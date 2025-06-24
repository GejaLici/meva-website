
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/contact/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const v = useTranslations('ValidationErrors');

  const formSchema = z.object({
    name: z.string().min(2, { message: v('name_min') }),
    email: z.string().email({ message: v('email_invalid') }),
    subject: z.string().min(5, { message: v('subject_min') }),
    message: z.string().min(10, { message: v('message_min') }),
  });

  type ContactFormValues = z.infer<typeof formSchema>;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: t('success_title'),
          description: t('success_description'),
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: t('error_title'),
          description: result.error || t('error_description'),
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('error_title'),
        description: t('server_error_description'),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('name_label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('name_placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email_label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('email_placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('subject_label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('subject_placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('message_label')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('message_placeholder')}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? t('submitting_button') : t('submit_button')}
        </Button>
      </form>
    </Form>
  );
}

export type ContactFormValues = z.infer<z.ZodObject<{
  name: z.ZodString,
  email: z.ZodString,
  subject: z.ZodString,
  message: z.ZodString,
}>>;
