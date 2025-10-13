'use server';

/**
 * @fileOverview A career path matching AI agent.
 *
 * - matchCareerPaths - A function that handles the career path matching process.
 * - MatchCareerPathsInput - The input type for the matchCareerPaths function.
 * - MatchCareerPathsOutput - The return type for the matchCareerPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchCareerPathsInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the student.'),
  strengths: z.string().describe('The strengths of the student.'),
  pastCoursework: z.string().describe('The past coursework of the student.'),
  preferredIndustries: z
    .string()
    .describe('The preferred industries of the student.'),
  softSkills: z.string().describe('The soft skills of the student.'),
});
export type MatchCareerPathsInput = z.infer<typeof MatchCareerPathsInputSchema>;

const MatchCareerPathsOutputSchema = z.object({
  careerPaths: z
    .array(z.string())
    .describe('The career paths that match the student.'),
});
export type MatchCareerPathsOutput = z.infer<typeof MatchCareerPathsOutputSchema>;

export async function matchCareerPaths(
  input: MatchCareerPathsInput
): Promise<MatchCareerPathsOutput> {
  return matchCareerPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchCareerPathsPrompt',
  input: {schema: MatchCareerPathsInputSchema},
  output: {schema: MatchCareerPathsOutputSchema},
  prompt: `You are a career counselor specializing in engineering students.

You will use this information to match the student to career paths.

Interests: {{{interests}}}
Strengths: {{{strengths}}}
Past Coursework: {{{pastCoursework}}}
Preferred Industries: {{{preferredIndustries}}}
Soft Skills: {{{softSkills}}}

Based on the above information, what are the most suitable career paths for the student?  List 3-5 options.

Respond with ONLY a JSON object that has a single field called careerPaths which is a list of strings.  Each string is the name of a career path.`, // Ensure the prompt adheres to the desired output format
});

const matchCareerPathsFlow = ai.defineFlow(
  {
    name: 'matchCareerPathsFlow',
    inputSchema: MatchCareerPathsInputSchema,
    outputSchema: MatchCareerPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
