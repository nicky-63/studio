'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing a student's skills and interests based on their questionnaire responses.
 *
 * - analyzeSkills - An async function that takes questionnaire responses as input and returns an analysis of the student's skills and interests.
 * - AnalyzeSkillsInput - The input type for the analyzeSkills function, representing the questionnaire responses.
 * - AnalyzeSkillsOutput - The output type for the analyzeSkills function, representing the analysis of skills and interests.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSkillsInputSchema = z.object({
  interests: z
    .string()
    .describe('The student\'s interests as free text.'),
  strengths: z
    .string()
    .describe('The student\'s perceived strengths as free text.'),
  pastCoursework: z
    .string()
    .describe('A list of past coursework the student has completed.'),
  preferredIndustries: z
    .string()
    .describe('The student\'s preferred industries as free text.'),
  softSkills: z
    .string()
    .describe('The student\'s soft skills as free text.'),
});
export type AnalyzeSkillsInput = z.infer<typeof AnalyzeSkillsInputSchema>;

const AnalyzeSkillsOutputSchema = z.object({
  skillAnalysis: z
    .string()
    .describe('A detailed analysis of the student\'s skills and interests.'),
});
export type AnalyzeSkillsOutput = z.infer<typeof AnalyzeSkillsOutputSchema>;

export async function analyzeSkills(input: AnalyzeSkillsInput): Promise<AnalyzeSkillsOutput> {
  return analyzeSkillsFlow(input);
}

const analyzeSkillsPrompt = ai.definePrompt({
  name: 'analyzeSkillsPrompt',
  input: {schema: AnalyzeSkillsInputSchema},
  output: {schema: AnalyzeSkillsOutputSchema},
  prompt: `You are an AI career counselor. Analyze the following information about a student and provide a detailed analysis of their skills and interests. Focus on extracting key skills, potential career paths, and areas for improvement.

Interests: {{{interests}}}
Strengths: {{{strengths}}}
Past Coursework: {{{pastCoursework}}}
Preferred Industries: {{{preferredIndustries}}}
Soft Skills: {{{softSkills}}}

Provide a concise and actionable summary.
`,
});

const analyzeSkillsFlow = ai.defineFlow(
  {
    name: 'analyzeSkillsFlow',
    inputSchema: AnalyzeSkillsInputSchema,
    outputSchema: AnalyzeSkillsOutputSchema,
  },
  async input => {
    const {output} = await analyzeSkillsPrompt(input);
    return output!;
  }
);
