/**
 * @fileoverview This file initializes the Genkit AI platform. It should be imported
 * once, and the exported `ai` object should be used to define flows, prompts,
 * and other Genkit constructs.
 */
import { genkit } from '@genkit-ai/ai';
import { googleAI } from '@genkit-ai/googleai';

// Initialize the Genkit AI platform with the Google AI plugin.
// This allows the application to use Google's generative models.
export const ai = genkit({
  plugins: [googleAI()],
});
