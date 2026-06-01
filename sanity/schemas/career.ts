import { defineType } from 'sanity';

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'employmentType', title: 'Employment Type', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] },
  ],
});
