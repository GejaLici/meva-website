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
import { submitContactForm } from '../actions'; // Assuming actions.ts is in the parent directory

const formSchema = z.object({
  name: z.string().min(2, { message: 'Emri duhet të ketë të paktën 2 karaktere.' }),
  email: z.string().email({ message: 'Ju lutem vendosni një email të vlefshëm.' }),
  subject: z.string().min(5, { message: 'Subjekti duhet të ketë të paktën 5 karaktere.' }),
  message: z.string().min(10, { message: 'Mesazhi duhet të ketë të paktën 10 karaktere.' }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
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
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Mesazhi u dërgua!',
          description: 'Faleminderit që na kontaktuat. Do t\'ju përgjigjemi sa më shpejt të jetë e mundur.',
        });
        form.reset();
      } else {
        toast({
          title: 'Gabim!',
          description: result.error || 'Ndodhi një gabim gjatë dërgimit të mesazhit. Ju lutem provoni përsëri.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Gabim i papritur!',
        description: 'Ndodhi një gabim i papritur. Ju lutem provoni përsëri më vonë.',
        variant: 'destructive',
      });
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
              <FormLabel>Emri Juaj</FormLabel>
              <FormControl>
                <Input placeholder="p.sh. Ana Kola" {...field} />
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
              <FormLabel>Email Juaj</FormLabel>
              <FormControl>
                <Input type="email" placeholder="p.sh. ana.kola@email.com" {...field} />
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
              <FormLabel>Subjekti</FormLabel>
              <FormControl>
                <Input placeholder="p.sh. Kërkesë për konsultë" {...field} />
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
              <FormLabel>Mesazhi Juaj</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Shkruani mesazhin tuaj këtu..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Duke dërguar...' : 'Dërgo Mesazhin'}
        </Button>
      </form>
    </Form>
  );
}
