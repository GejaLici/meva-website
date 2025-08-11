
'use server';
/**
 * @fileOverview An AI-powered virtual consultation agent.
 *
 * - virtualAdvisor - A function that takes a user's photo and concern, and returns a recommended procedure and a "after" image.
 * - AdvisorInput - The input type for the virtualAdvisor function.
 * - AdvisorOutput - The return type for the virtualAdvisor function.
 */

import { ai } from '@/ai/genkit';
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
  generatedImageUrl: z.string().describe("The data URI of the 'after' image, showing the potential result of the procedure. This is a dynamically generated image.")
});
export type AdvisorOutput = z.infer<typeof AdvisorOutputSchema>;


// 2. Create an exported wrapper function
export async function virtualAdvisor(input: AdvisorInput): Promise<AdvisorOutput> {
    const { problemDescription, photoDataUri } = input;
    const lowerCaseDescription = problemDescription.toLowerCase();

    // Define keywords for each of the three main procedures
    const keywords = {
        rhinoplasty: ['nose', 'bump', 'bridge', 'nostril', 'crooked'],
        genioplasty: ['chin', 'jaw', 'profile', 'weak', 'recessed'],
        blepharoplasty: ['eyelid', 'eye lid', 'puffy', 'droopy', 'tired eyes', 'bags under eyes'],
    };

    let recommendedServiceId: string;
    let imageGenPrompt: string;

    // Simple keyword matching logic to determine recommendation and image generation prompt
    if (keywords.blepharoplasty.some(keyword => lowerCaseDescription.includes(keyword))) {
        recommendedServiceId = 'blefaroplastika';
        imageGenPrompt = 'Perform a blepharoplasty to remove excess skin from the eyelids for a more youthful and awake appearance. The change should be subtle and natural-looking.';
    } else if (keywords.genioplasty.some(keyword => lowerCaseDescription.includes(keyword))) {
        recommendedServiceId = 'rim-mjekres';
        imageGenPrompt = 'Perform a genioplasty to augment the chin, creating a more defined and balanced facial profile. The result should look natural and proportional.';
    } else {
        // Default to rhinoplasty if no other keywords match or if nose keywords are present
        recommendedServiceId = 'op-hunde';
        imageGenPrompt = 'Perform a rhinoplasty to smooth out any bumps on the bridge of the nose and refine the tip. The result should be a natural-looking, harmonious nose that fits the face.';
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

    // Generate the "after" image
    const { media } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: [
            { media: { url: photoDataUri } },
            { text: `Generate a realistic 'after' photo. ${imageGenPrompt}` },
        ],
        config: {
            responseModalities: ['TEXT', 'IMAGE'],
        },
    });

    const generatedImageUrl = media?.url;

    if (!generatedImageUrl) {
      throw new Error("Could not generate an image. The model may be unavailable or overloaded.");
    }

    return {
        recommendation,
        generatedImageUrl
    };
}
