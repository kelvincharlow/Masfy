import { defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'challenge', title: 'Challenge', type: 'text' },
    { name: 'solution', title: 'Solution', type: 'text' },
    { name: 'results', title: 'Results', type: 'text' },
    { name: 'industry', title: 'Industry', type: 'string' },
    { name: 'service', title: 'Service', type: 'string' },
    { name: 'featuredImage', title: 'Featured Image', type: 'image' },
  ],
});
