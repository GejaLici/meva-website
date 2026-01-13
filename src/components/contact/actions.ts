
'use server';

import { getFirestore, serverTimestamp } from 'firebase-admin/firestore';
import { adminAuth } from '@/lib/firebase-admin-config';
import { formSchema } from './schema';
import type { ContactFormValues } from './schema';

const db = getFirestore(adminAuth.app);

interface SubmitResult {
    success: boolean;
    error?: string;
}

export async function submitContactForm(values: ContactFormValues & { source: string }): Promise<SubmitResult> {
  const validationResult = formSchema.safeParse(values);

  if (!validationResult.success) {
    console.error('Validation failed:', validationResult.error.flatten().fieldErrors);
    return { success: false, error: "The submitted data is not valid." };
  }

  try {
    const docRef = await db.collection("contactSubmissions").add({
      ...values,
      submittedAt: serverTimestamp(),
    });
    console.log("Contact form data saved to Firestore with ID: ", docRef.id);
    return { success: true };
  } catch (error) {
    console.error('Error submitting form to Firestore:', error);
    let errorMessage = "Failed to send message due to a server error.";
    if (error instanceof Error && error.message.includes('PERMISSION_DENIED')) {
        errorMessage = "Failed to send message. Please ensure Firebase configuration is correct and permissions are set.";
        console.error("Firebase permission denied. Check Firestore rules and configuration.");
    }
    return { success: false, error: errorMessage };
  }
}
