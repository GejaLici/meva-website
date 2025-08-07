
'use server';
/**
 * @fileOverview An AI-powered virtual consultation agent.
 *
 * - virtualAdvisor - A function that takes a user's photo and concern, and returns a recommended procedure and a generated "after" image.
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
  generatedImageUrl: z.string().describe("The data URI of the generated 'after' image, showing the potential result of the procedure. It must be a 'data:image/png;base64,...' string.")
});
export type AdvisorOutput = z.infer<typeof AdvisorOutputSchema>;


// 2. Create an exported wrapper function
export async function virtualAdvisor(input: AdvisorInput): Promise<AdvisorOutput> {
  return advisorFlow(input);
}


// 3. Define the main Genkit Flow
const advisorFlow = ai.defineFlow(
  {
    name: 'advisorFlow',
    inputSchema: AdvisorInputSchema,
    outputSchema: AdvisorOutputSchema,
  },
  async (input) => {
    // A. First, get the service recommendation.
    const { output: recommendationOutput } = await getRecommendation(input);
    if (!recommendationOutput?.recommendation) {
        throw new Error("Could not determine a recommendation.");
    }
    
    // B. Then, generate the "after" image based on the recommendation.
    const { output: imageResponse } = await generateAfterImage({
        photoDataUri: input.photoDataUri,
        procedureName: recommendationOutput.recommendation.procedureName,
        problemDescription: input.problemDescription
    });

    if (!imageResponse?.media?.url) {
        throw new Error("Image generation failed to produce an image.");
    }

    // C. Combine and return the final output.
    return {
        recommendation: recommendationOutput.recommendation,
        generatedImageUrl: imageResponse.media.url,
    };
  }
);


// Helper flow for getting the recommendation
const getRecommendation = ai.defineFlow(
    {
        name: 'getRecommendationFlow',
        inputSchema: AdvisorInputSchema,
        outputSchema: z.object({ recommendation: RecommendedServiceSchema.nullable() }),
    },
    async ({ photoDataUri, problemDescription }) => {
        const relevantServices = [
            'op-hunde', // Rhinoplasty
            'rim-mjekres', // Genioplasty (Chin Augmentation)
            'blefaroplastika' // Blepharoplasty (Eyelid Surgery)
        ];

        const servicesForPrompt = serviceCategories
            .flatMap(cat => cat.services.map(svc => ({...svc, categorySlug: cat.slug})))
            .filter(svc => relevantServices.includes(svc.id))
            .map(svc => ({
                id: svc.id,
                slug: svc.slug,
                categorySlug: svc.categorySlug,
                name: enMessages.Services.items[svc.id as keyof typeof enMessages.Services.items]?.name || svc.id,
            }));

        const recommendationPrompt = ai.definePrompt({
            name: 'recommendationPrompt',
            input: { schema: z.object({ services: z.any(), problem: z.string(), photoDataUri: z.string() }) },
            output: { schema: z.object({ recommendation: RecommendedServiceSchema.nullable() }) },
            prompt: `You are an expert, friendly, and helpful medical assistant for Meva Clinic.
            
            A user will provide a photo and describe their concern. Your task is to analyze their query and recommend the single most relevant service from the provided list. The focus is on rhinoplasty, chin reshaping, and eyelid surgery.
            
            IMPORTANT RULES:
            1. You MUST recommend exactly ONE service from the list.
            2. You MUST provide the exact 'serviceId', 'serviceSlug', 'categorySlug', 'procedureName', and a brief, helpful 'reasoning' (1-2 sentences).
            3. If the query is vague or unrelated, select the most likely service based on the image.
            
            USER'S CONCERN:
            "{{{problem}}}"
            
            AVAILABLE SERVICES:
            {{#each services}}
            - [{{this.id}}] {{this.name}}
            {{/each}}
            
            PHOTO OF THE USER:
            {{media url=photoDataUri}}`
        });

        const { output } = await recommendationPrompt({
            services: servicesForPrompt,
            problem: problemDescription,
            photoDataUri: photoDataUri,
        });

        return output || { recommendation: null };
    }
);


// Helper flow for generating the "after" image
const generateAfterImage = ai.defineFlow(
    {
        name: 'generateAfterImageFlow',
        inputSchema: z.object({
            photoDataUri: z.string(),
            procedureName: z.string(),
            problemDescription: z.string(),
        }),
        outputSchema: z.any(), // Output from generate is complex
    },
    async ({ photoDataUri, procedureName, problemDescription }) => {
        const { media } = await ai.generate({
            model: 'googleai/gemini-2.0-flash-preview-image-generation',
            prompt: [
                { media: { url: photoDataUri } },
                { text: `Based on the user's concern ("${problemDescription}"), generate a realistic 'after' image showing the subtle and aesthetically pleasing result of a ${procedureName}. The result should look natural, professional, and enhance the person's features positively. Do not make exaggerated changes.` },
            ],
            config: {
                responseModalities: ['TEXT', 'IMAGE'],
            },
        });
        
        if (!media) {
            throw new Error('Image generation failed to produce an image.');
        }

        return { media };
    }
);
