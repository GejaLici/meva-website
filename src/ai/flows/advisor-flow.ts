
'use server';
/**
 * @fileOverview An AI-powered virtual consultation agent.
 *
 * - virtualAdvisor - A function that takes a user's photo and concern, and returns a recommended procedure and a "after" image.
 * - AdvisorInput - The input type for the virtualAdvisor function.
 * - AdvisorOutput - The return type for the virtualAdvisor function.
 */

import { z } from 'zod';
import { serviceCategories } from '@/lib/services';
import enMessages from '@/messages/en.json';

// 1. Define Input and Output Schemas
const AdvisorInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's face, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  problemDescription: z
    .string()
    .describe("The user's primary concern or desired aesthetic outcome."),
});
export type AdvisorInput = z.infer<typeof AdvisorInputSchema>;

const RecommendedServiceSchema = z.object({
    serviceId: z.string().describe("The unique ID of the recommended service (e.g., 'op-hunde')."),
    serviceSlug: z.string().describe("The URL slug for the recommended service (e.g., 'rhinoplasty')."),
    categorySlug: z.string().describe("The URL slug for the category of the recommended service (e.g., 'facial-surgery')."),
    reasoning: z.string().describe("A brief, 1-2 sentence explanation for why this service was recommended to the user."),
    procedureName: z.string().describe("The common name of the procedure, like 'Rhinoplasty' or 'Chin Augmentation'.")
});

const AdvisorOutputSchema = z.object({
  recommendation: RecommendedServiceSchema.describe("The single most relevant service recommendation based on the user's query."),
  generatedImageUrl: z.string().describe("The data URI of the 'after' image, showing the potential result of the procedure. This is a static placeholder image.")
});
export type AdvisorOutput = z.infer<typeof AdvisorOutputSchema>;


// 2. Create an exported wrapper function with simplified logic
export async function virtualAdvisor(input: AdvisorInput): Promise<AdvisorOutput> {
    const { problemDescription } = input;
    const lowerCaseDescription = problemDescription.toLowerCase();

    // Define keywords for each of the three main procedures
    const keywords = {
        rhinoplasty: ['nose', 'bump', 'bridge', 'nostril', 'crooked'],
        genioplasty: ['chin', 'jaw', 'profile', 'weak', 'recessed'],
        blepharoplasty: ['eyelid', 'eye lid', 'puffy', 'droopy', 'tired eyes', 'bags under eyes'],
    };

    let recommendedServiceId: string;

    // Simple keyword matching logic
    if (keywords.blepharoplasty.some(keyword => lowerCaseDescription.includes(keyword))) {
        recommendedServiceId = 'blefaroplastika';
    } else if (keywords.genioplasty.some(keyword => lowerCaseDescription.includes(keyword))) {
        recommendedServiceId = 'rim-mjekres';
    } else {
        // Default to rhinoplasty if no other keywords match or if nose keywords are present
        recommendedServiceId = 'op-hunde';
    }

    // Find the full service object based on the determined ID
    const relevantServices = serviceCategories.flatMap(cat =>
        cat.services.map(svc => ({
            ...svc,
            categorySlug: cat.slug
        }))
    );
    const service = relevantServices.find(s => s.id === recommendedServiceId);
    
    if (!service) {
        throw new Error("Could not find a suitable service recommendation.");
    }
    
    // Get the English name for the procedure
    const procedureName = enMessages.Services.items[service.id as keyof typeof enMessages.Services.items]?.name || service.id;

    // Create a static recommendation object
    const recommendation: z.infer<typeof RecommendedServiceSchema> = {
        serviceId: service.id,
        serviceSlug: service.slug,
        categorySlug: service.categorySlug!,
        procedureName: procedureName,
        reasoning: `Based on your concern regarding "${problemDescription.substring(0, 30)}...", ${procedureName} is often a suitable procedure to address such issues. We recommend a full consultation with our specialists to confirm.`,
    };

    // Return a static "after" image based on the recommendation
    const afterImages: Record<string, string> = {
        'op-hunde': '/images/gallery-after-1.jpg', // Replace with a relevant 'after' image for rhinoplasty
        'rim-mjekres': '/images/gallery-after-2.jpg', // Replace with a relevant 'after' image for genioplasty
        'blefaroplastika': '/images/gallery-after-3.jpg', // Replace with a relevant 'after' image for blepharoplasty
    };
    
    const generatedImageUrl = afterImages[service.id] || service.image || '/images/aigen.jpeg';

    // Simulate a delay to mimic processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
        recommendation,
        generatedImageUrl
    };
}
