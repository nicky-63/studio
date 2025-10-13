export type Course = {
  id: string;
  title: string;
  provider: string;
  description: string;
  url: string;
};

export const allCourses: Course[] = [
  {
    id: 'cs50',
    title: "CS50's Introduction to Computer Science",
    provider: 'HarvardX on edX',
    description: 'An introduction to the intellectual enterprises of computer science and the art of programming.',
    url: 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x',
  },
  {
    id: 'py4e',
    title: 'Python for Everybody',
    provider: 'University of Michigan on Coursera',
    description: 'Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.',
    url: 'https://www.coursera.org/specializations/python',
  },
  {
    id: 'ml-spec',
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI & Stanford on Coursera',
    description: 'This Specialization is a foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology.',
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
  {
    id: 'google-da',
    title: 'Google Data Analytics Professional Certificate',
    provider: 'Google on Coursera',
    description: 'Get professional training from Google and have the opportunity to connect with top employers. You’ll learn in-demand skills that will have you job-ready in less than 6 months.',
    url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
  },
  {
    id: 'aws-cda',
    title: 'AWS Certified Developer - Associate',
    provider: 'Amazon Web Services',
    description: 'This certification helps you build and validate your skills to develop, deploy, and debug cloud-based applications by using AWS.',
    url: 'https://aws.amazon.com/certification/certified-developer-associate/',
  },
  {
    id: 'js-algo',
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    description: "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.",
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
  },
   {
    id: 'comptia-sec',
    title: 'CompTIA Security+ Certification',
    provider: 'CompTIA',
    description: 'Security+ provides a global benchmark for best practices in IT network and operational security, one of the fastest-growing fields in IT.',
    url: 'https://www.comptia.org/certifications/security',
  },
  {
    id: 'full-stack-open',
    title: 'Full Stack Open',
    provider: 'University of Helsinki',
    description: 'Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in this one-of-a-kind deep dive into modern web development.',
    url: 'https://fullstackopen.com/en/',
  },
  {
    id: 'ux-design-google',
    title: 'Google UX Design Professional Certificate',
    provider: 'Google on Coursera',
    description: 'This is your path to a career in UX design. In this program, you’ll learn in-demand skills that will have you job-ready in less than 6 months.',
    url: 'https://www.coursera.org/professional-certificates/google-ux-design',
  }
];
