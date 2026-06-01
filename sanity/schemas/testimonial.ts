import { defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'project', title: 'Project Reference', type: 'reference', to: [{ type: 'project' }] },
  ],
});
