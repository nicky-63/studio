'use server';

/**
 * @fileOverview Filters course options based on semantic similarity between skills, keywords, and course descriptions.
 *
 * - filterCourses - A function that filters the courses.
 * - FilterCoursesInput - The input type for the filterCourses function.
 * - FilterCoursesOutput - The return type for the filterCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterCoursesInputSchema = z.object({
  skills: z.string().describe('Skills of the user.'),
  keywords: z.string().describe('Keywords related to the career goals of the user.'),
  courseDescriptions: z.array(z.string()).describe('Course descriptions to filter.'),
});
export type FilterCoursesInput = z.infer<typeof FilterCoursesInputSchema>;

const FilterCoursesOutputSchema = z.array(z.string()).describe('Filtered list of course descriptions.');
export type FilterCoursesOutput = z.infer<typeof FilterCoursesOutputSchema>;

export async function filterCourses(input: FilterCoursesInput): Promise<FilterCoursesOutput> {
  return filterCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterCoursesPrompt',
  input: {schema: FilterCoursesInputSchema},
  output: {schema: FilterCoursesOutputSchema},
  prompt: `You are an AI assistant helping students find relevant courses based on their skills and career goals. Your task is to filter a list of course descriptions, keeping only those that are semantically similar to the student's skills and keywords.

Skills: {{{skills}}}
Keywords: {{{keywords}}}

Course Descriptions:
{{#each courseDescriptions}}{{{this}}}\n{{/each}}

Instructions:
1.  Analyze the skills and keywords provided by the student.
2.  Compare these against each course description.
3.  Return only the course descriptions that are highly relevant to the student's skills and career goals. Do not provide any explanations.

Filtered Course Descriptions:`,
});

const filterCoursesFlow = ai.defineFlow(
  {
    name: 'filterCoursesFlow',
    inputSchema: FilterCoursesInputSchema,
    outputSchema: FilterCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
