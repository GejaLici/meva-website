'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export type ContactFormValues = z.infer<typeof formSchema>;

interface SubmitResult {
    success: boolean;
    error?: string;
}

export async function submitContactForm(values: ContactFormValues): Promise<SubmitResult> {
  const validationResult = formSchema.safeParse(values);

  if (!validationResult.success) {
    console.error('Validation failed:', validationResult.error.flatten().fieldErrors);
    return { success: false, error: "Të dhënat e dërguara nuk janë të vlefshme." };
  }

  // Simulate form submission
  console.log('Contact form submitted:', values);

  // In a real application, you would send an email, save to a database, etc.
  // Example:
  // try {
  //   await sendEmail(values);
  //   return { success: true };
  // } catch (error) {
  //   console.error('Error submitting form:', error);
  //   return { success: false, error: "Failed to send message." };
  // }

  // Simulate a short delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
