import { createClient } from '@sanity/client';

export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '';

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production';

export const isSanityConfigured =
  Boolean(sanityProjectId) && sanityProjectId !== '000000';

export const sanityClient = createClient({
  projectId: sanityProjectId || '000000',
  dataset: sanityDataset,
  apiVersion: '2025-01-01',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});
