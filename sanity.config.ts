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

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  'usf5rrf9';

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  'production';

export default defineConfig({
  name: 'default',
  title: 'Masfy CMS',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [siteSettings, project, service, industry, testimonial, teamMember, insight, career],
  },
});
