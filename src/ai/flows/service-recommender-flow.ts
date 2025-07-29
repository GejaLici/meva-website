
'use server';
/**
 * @fileOverview An AI-powered service recommender for the clinic.
 *
 * - recommendServices - A function that takes a user's query and suggests relevant services.
 * - ServiceRecommenderInput - The input type for the recommendServices function.
 * - ServiceRecommenderOutput - The return type for the recommendServices function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { serviceCategories } from '@/lib/services';
import { stripHtml } from '@/lib/utils';
import enMessages from '../../../messages/en.json';

// --- Data Preparation ---
// Create a detailed list of all services with English names and descriptions for the AI prompt.
const allServicesWithDetails = serviceCategories.flatMap(category =>
  // Exclude the summary card for dental services from the recommender's knowledge base.
  category.id === 'dental-summary' ? [] : 
  category.services.map(service => {
    const serviceTranslations = enMessages.Services.items[service.id as keyof typeof enMessages.Services.items];
    return {
      id: service.id,
      slug: service.slug,
      categoryId: category.id,
      categorySlug: category.slug,
      name: serviceTranslations?.name || service.id,
      description: stripHtml(serviceTranslations?.description || '')
    };
  })
);

// --- Zod Schemas ---
const ServiceRecommenderInputSchema = z.object({
  query: z.string().describe("The user's concern or desired cosmetic/dental outcome."),
});
export type ServiceRecommenderInput = z.infer<typeof ServiceRecommenderInputSchema>;

const RecommendationSchema = z.object({
  serviceId: z.string().describe("The unique ID of the recommended service (e.g., 'op-hunde')."),
  serviceSlug: z.string().describe("The URL slug of the recommended service (e.g., 'rhinoplasty')."),
  categorySlug: z.string().describe("The URL slug of the category for the recommended service (e.g., 'facial-surgery')."),
  reasoning: z.string().describe("A brief, 1-2 sentence explanation for why this service was recommended to the user."),
});

const ServiceRecommenderOutputSchema = z.object({
  recommendations: z.array(RecommendationSchema).describe("A list of recommended services based on the user's query."),
});
export type ServiceRecommenderOutput = z.infer<typeof ServiceRecommenderOutputSchema>;

// --- Exported Function ---
export async function recommendServices(input: ServiceRecommenderInput): Promise<ServiceRecommenderOutput> {
  return serviceRecommenderFlow(input);
}

// --- Genkit Prompt ---
const recommendServicePrompt = ai.definePrompt(
  {
    name: 'serviceRecommenderPrompt',
    input: { schema: z.object({ query: z.string(), services: z.any() }) },
    output: { schema: ServiceRecommenderOutputSchema },
    prompt: `You are an expert, friendly, and helpful medical assistant for a premier cosmetic and dental clinic called NovaSculpt Clinic.

A user will describe their concern or desired outcome. Your task is to analyze their query and recommend the most relevant services from the list provided below.

IMPORTANT RULES:
1.  For each service you recommend, you MUST provide the exact \`serviceId\`, \`serviceSlug\`, \`categorySlug\`, and a brief, helpful 'reasoning' (1-2 sentences) explaining why this service is a good match.
2.  Only recommend services that are in the provided list. Do not invent services.
3.  If the user's query is vague, nonsensical, or completely unrelated to aesthetic or dental treatments, you MUST return an empty list of recommendations.
4.  Base your recommendations solely on the user's query and the service descriptions.

---
USER QUERY:
"{{{query}}}"
---

---
AVAILABLE SERVICES (Format: [serviceId] [name] - [description] (slug: [categorySlug]/[serviceSlug])):
{{#each services}}
- [{{this.id}}] {{this.name}} - {{this.description}} (slug: {{this.categorySlug}}/{{this.slug}})
{{/each}}
---
`,
  }
);


// --- Genkit Flow ---
const serviceRecommenderFlow = ai.defineFlow(
  {
    name: 'serviceRecommenderFlow',
    inputSchema: ServiceRecommenderInputSchema,
    outputSchema: ServiceRecommenderOutputSchema,
  },
  async (input) => {
    const { output } = await recommendServicePrompt({
      query: input.query,
      services: allServicesWithDetails
    });

    if (!output) {
      return { recommendations: [] };
    }
    
    // Additional validation to ensure the AI didn't hallucinate services
    const validatedRecommendations = output.recommendations.filter(rec => 
      allServicesWithDetails.some(s => s.id === rec.serviceId)
    );
    
    return { recommendations: validatedRecommendations };
  }
);
