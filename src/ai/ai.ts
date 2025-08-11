/**
 * @fileoverview This file initializes the Genkit AI platform. It should be imported
 * once, and the exported `ai` object should be used to define flows, prompts,
 * and other Genkit constructs.
 */
import {genkit, ai} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {firebase} from '@genkit-ai/firebase';

genkit({
  plugins: [
    firebase(),
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableDevUI: true,
});

export { ai };
