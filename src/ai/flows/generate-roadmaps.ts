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

const RoadmapSectionSchema = z.object({
  title: z
    .string()
    .describe(
      "The title of the roadmap section (e.g., 'Phase 1: Foundational Skills', 'Key Projects')."
    ),
  items: z
    .array(z.string())
    .describe('A list of items or steps within this section.'),
});

const GenerateRoadmapOutputSchema = z.object({
  roadmap: z
    .array(RoadmapSectionSchema)
    .describe(
      'A personalized, step-by-step roadmap with distinct sections like "Phase 1", "Projects", "Certifications", etc.'
    ),
});
export type GenerateRoadmapOutput = z.infer<typeof GenerateRoadmapOutputSchema>;


export async function generateRoadmap(input: GenerateRoadmapInput): Promise<GenerateRoadmapOutput> {
  return generateRoadmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRoadmapPrompt',
  input: {schema: GenerateRoadmapInputSchema},
  output: {schema: GenerateRoadmapOutputSchema},
  prompt: `You are a career advisor for engineering students. Your task is to generate a detailed, step-by-step, and efficient roadmap.

  Based on the student's skills, interests, and the skills required for their desired career path, generate a personalized roadmap. The roadmap should be broken down into logical sections, such as phases (e.g., "Phase 1: Foundational Skills"), key project ideas, and recommended certifications.

  Career Path: {{{careerPath}}}
  Student's Current Skills & Interests: {{{studentSkills}}}, {{{interests}}}
  Skills Required for Career Path: {{{requiredSkills}}}

  Generate the roadmap now.
  `,
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
