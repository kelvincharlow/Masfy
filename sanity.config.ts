import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import project from './sanity/schemas/project';
import service from './sanity/schemas/service';
import industry from './sanity/schemas/industry';
import testimonial from './sanity/schemas/testimonial';
import teamMember from './sanity/schemas/teamMember';
import insight from './sanity/schemas/insight';
import career from './sanity/schemas/career';
import siteSettings from './sanity/schemas/siteSettings';

export default defineConfig({
  name: 'default',
  title: 'Engineering Company CMS',
  projectId: process.env.SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [siteSettings, project, service, industry, testimonial, teamMember, insight, career],
  },
});
