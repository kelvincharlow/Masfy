import { defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'overview', title: 'Overview', type: 'text' },
    { name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }] },
    { name: 'icon', title: 'Icon', type: 'string' },
  ],
});
