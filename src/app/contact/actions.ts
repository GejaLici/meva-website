'use server';

import * as z from 'zod';
import { db } from '@/lib/firebaseConfig'; // Ensure this path is correct
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { ContactFormValues } from './_components/ContactForm'; // Assuming type is exported from here

// Schema can remain the same, or be co-located with the form component if preferred
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

interface SubmitResult {
    success: boolean;
    error?: string;
}

export async function submitContactForm(values: ContactFormValues): Promise<SubmitResult> {
  const validationResult = formSchema.safeParse(values);

  if (!validationResult.success) {
    console.error('Validation failed:', validationResult.error.flatten().fieldErrors);
    return { success: false, error: "The submitted data is not valid." };
  }

  try {
    // IMPORTANT: Ensure 'db' is correctly initialized in firebaseConfig.ts
    // and your Firebase project has Firestore enabled with appropriate security rules.
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...values,
      submittedAt: serverTimestamp(), // Adds a server-side timestamp
    });
    console.log("Contact form data saved to Firestore with ID: ", docRef.id);
    return { success: true };
  } catch (error) {
    console.error('Error submitting form to Firestore:', error);
    // It's good practice to provide a more generic error to the client
    // and log the specific error server-side for debugging.
    let errorMessage = "Failed to send message due to a server error.";
    if (error instanceof Error && error.message.includes('PERMISSION_DENIED')) {
        errorMessage = "Failed to send message. Please ensure Firebase configuration is correct and permissions are set.";
        console.error("Firebase permission denied. Check Firestore rules and firebaseConfig.ts credentials.");
    }
    return { success: false, error: errorMessage };
  }
}
