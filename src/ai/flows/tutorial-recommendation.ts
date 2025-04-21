/**
 * @fileOverview A tutorial video recommendation AI agent.
 *
 * - recommendTutorial - A function that handles the tutorial recommendation process.
 * - RecommendTutorialInput - The input type for the recommendTutorial function.
 * - RecommendTutorialOutput - The return type for the recommendTutorial function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {searchYouTubeVideos, YouTubeVideo} from '@/services/youtube';

const RecommendTutorialInputSchema = z.object({
  query: z.string().describe('The search query or filters applied to call alerts.'),
});
export type RecommendTutorialInput = z.infer<typeof RecommendTutorialInputSchema>;

const RecommendTutorialOutputSchema = z.array(z.object({
  title: z.string().describe('The title of the recommended tutorial video.'),
  description: z.string().describe('A short description of the tutorial video.'),
  thumbnailUrl: z.string().describe('The URL of the video thumbnail.'),
  videoId: z.string().describe('The YouTube video ID.'),
}));
export type RecommendTutorialOutput = z.infer<typeof RecommendTutorialOutputSchema>;

export async function recommendTutorial(input: RecommendTutorialInput): Promise<RecommendTutorialOutput> {
  return recommendTutorialFlow(input);
}

const tutorialRecommendationPrompt = ai.definePrompt({
  name: 'tutorialRecommendationPrompt',
  input: {
    schema: z.object({
      query: z.string().describe('The search query or filters applied to call alerts.'),
    }),
  },
  output: {
    schema: z.array(z.object({
      title: z.string().describe('The title of the recommended tutorial video.'),
      description: z.string().describe('A short description of the tutorial video.'),
      thumbnailUrl: z.string().describe('The URL of the video thumbnail.'),
      videoId: z.string().describe('The YouTube video ID.'),
    })),
  },
  prompt: `You are an AI assistant that recommends relevant tutorial videos based on the user's query on call alerts.

  Based on the following search query or filters applied to call alerts: {{{query}}}
  Recommend relevant tutorial videos for the user to better understand the coins or strategies involved.
  Return an array of objects with the following information for each video: title, description, thumbnailUrl, and videoId.
  `,
});

const recommendTutorialFlow = ai.defineFlow<
  typeof RecommendTutorialInputSchema,
  typeof RecommendTutorialOutputSchema
>({
  name: 'recommendTutorialFlow',
  inputSchema: RecommendTutorialInputSchema,
  outputSchema: RecommendTutorialOutputSchema,
},
async input => {
  const videos = await searchYouTubeVideos(input.query);
  return videos;
  // const { output } = await tutorialRecommendationPrompt(input);
  // return output!;
});
