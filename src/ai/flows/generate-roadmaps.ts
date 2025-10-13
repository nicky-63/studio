'use server';

/**
 * @fileOverview AI-powered roadmap generator for engineering students.
 *
 * - generateRoadmap - A function that generates a personalized roadmap for a student.
 * - GenerateRoadmapInput - The input type for the generateRoadmap function.
 * - GenerateRoadmapOutput - The return type for the generateRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRoadmapInputSchema = z.object({
  careerPath: z.string().describe('The desired career path for the student.'),
  studentSkills: z.string().describe('A list of the student\u2019s current skills.'),
  requiredSkills: z.string().describe('A list of skills required for the desired career path.'),
  interests: z.string().describe('The interests of the student.'),
});
export type GenerateRoadmapInput = z.infer<typeof GenerateRoadmapInputSchema>;

const GenerateRoadmapOutputSchema = z.object({
  roadmap: z.string().describe('A personalized roadmap including courses, certifications, side projects, and internships.'),
});
export type GenerateRoadmapOutput = z.infer<typeof GenerateRoadmapOutputSchema>;

export async function generateRoadmap(input: GenerateRoadmapInput): Promise<GenerateRoadmapOutput> {
  return generateRoadmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRoadmapPrompt',
  input: {schema: GenerateRoadmapInputSchema},
  output: {schema: GenerateRoadmapOutputSchema},
  prompt: `You are a career advisor for engineering students.

  Based on the student's skills, interests and the skills required for their desired career path, generate a personalized roadmap for the student.

  Career Path: {{{careerPath}}}
  Student Skills: {{{studentSkills}}}
  Required Skills: {{{requiredSkills}}}
  Interests: {{{interests}}}

  Roadmap:`,
});

const generateRoadmapFlow = ai.defineFlow(
  {
    name: 'generateRoadmapFlow',
    inputSchema: GenerateRoadmapInputSchema,
    outputSchema: GenerateRoadmapOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
