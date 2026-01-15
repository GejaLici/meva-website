
'use server';

import { FieldValue } from 'firebase-admin/firestore';
import { getFirebaseAdmin } from '@/lib/firebase-admin-config';
import { formSchema } from './schema';
import type { ContactFormValues } from './schema';

interface SubmitResult {
    success: boolean;
    error?: string;
}

export async function submitContactForm(values: ContactFormValues & { source: string }): Promise<SubmitResult> {
  try {
    const { adminDb } = await getFirebaseAdmin();
    
    if (!adminDb) {
        const errorMessage = "Firebase Admin is not configured correctly on the server.";
        console.error(errorMessage);
        return { success: false, error: errorMessage };
    }

    const validationResult = formSchema.safeParse(values);

    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.flatten().fieldErrors);
      return { success: false, error: "The submitted data is not valid." };
    }

    const docRef = await adminDb.collection("contactSubmissions").add({
      ...values,
      submittedAt: FieldValue.serverTimestamp(),
    });
    console.log("Contact form data saved to Firestore with ID: ", docRef.id);
    return { success: true };
  } catch (error) {
    console.error('Error submitting form to Firestore:', error);
    let errorMessage = "Failed to send message due to a server error.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}
