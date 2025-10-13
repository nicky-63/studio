'use server';

/**
 * @fileOverview Identifies skill gaps between a student's current skills and the requirements for a recommended career path.
 *
 * - identifySkillGaps - A function that handles the skill gap identification process.
 * - IdentifySkillGapsInput - The input type for the identifySkillGaps function.
 * - IdentifySkillGapsOutput - The return type for the identifySkillGaps function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifySkillGapsInputSchema = z.object({
  studentSkills: z
    .string()
    .describe("The student's current skills, as a comma-separated list."),
  careerPathRequirements: z
    .string()
    .describe("The required skills for the career path, as a comma-separated list."),
});
export type IdentifySkillGapsInput = z.infer<typeof IdentifySkillGapsInputSchema>;

const IdentifySkillGapsOutputSchema = z.object({
  skillGaps: z
    .string()
    .describe("The skills the student needs to acquire, as a comma-separated list."),
  suggestedActions: z
    .string()
    .describe("Suggested actions to acquire the skills, as a comma-separated list (e.g., courses, certifications, projects)."),
});
export type IdentifySkillGapsOutput = z.infer<typeof IdentifySkillGapsOutputSchema>;

export async function identifySkillGaps(input: IdentifySkillGapsInput): Promise<IdentifySkillGapsOutput> {
  return identifySkillGapsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifySkillGapsPrompt',
  input: {schema: IdentifySkillGapsInputSchema},
  output: {schema: IdentifySkillGapsOutputSchema},
  prompt: `You are a career advisor who identifies skill gaps and suggests actions.

  Analyze the student's current skills and the career path requirements to identify the skills the student needs to acquire.
  Suggest concrete actions (courses, certifications, projects) to acquire those skills.

  Student's current skills: {{{studentSkills}}}
  Career path requirements: {{{careerPathRequirements}}}

  Skill Gaps: (as a comma separated list)
  Suggested Actions: (as a comma separated list)
  `,
});

const identifySkillGapsFlow = ai.defineFlow(
  {
    name: 'identifySkillGapsFlow',
    inputSchema: IdentifySkillGapsInputSchema,
    outputSchema: IdentifySkillGapsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
