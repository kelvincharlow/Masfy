import { isSanityConfigured, sanityClient } from '@/lib/sanity/client';

export type Project = {
  title: string;
  industry: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  fullDescription: string;
  services: string[];
  challenges: string;
  outcome: string;
  gallery: string[];
};

export const fallbackProjects: Project[] = [
  {
    title: 'Jubilee Insurance HQ',
    industry: 'Commercial',
    location: 'Nairobi, Kenya',
    year: 'To be specified',
    image: '/projects/Jubilee Isurance.jpg',
    summary: 'Commercial headquarters project in Nairobi, Kenya.',
    fullDescription:
      'A commercial headquarters project for Jubilee Insurance in Nairobi. Full project scope, delivery notes, and technical details can be added once the final project information is ready.',
    services: ['Structural engineering', 'Civil engineering', 'Technical coordination'],
    challenges: 'Detailed project challenges to be specified.',
    outcome: 'Project outcome and delivery impact to be specified.',
    gallery: ['/projects/Jubilee Isurance.jpg'],
  },
  {
    title: 'Ritz Carlton Maasai Mara Safari',
    industry: 'Hospitality',
    location: 'Maasai Mara',
    year: 'To be specified',
    image: '/projects/Ritz Carlton.jpeg',
    summary: 'Luxury hospitality project set within the Maasai Mara.',
    fullDescription:
      'A hospitality project connected to the Ritz Carlton Maasai Mara Safari development. Additional information can later describe the project scope, site requirements, services provided, and delivery outcome.',
    services: ['Structural engineering', 'Civil works support', 'Technical advisory'],
    challenges: 'Detailed project challenges to be specified.',
    outcome: 'Project outcome and delivery impact to be specified.',
    gallery: ['/projects/Ritz Carlton.jpeg'],
  },
  {
    title: 'Crescent Pearl',
    industry: 'Apartments',
    location: 'Westlands, Nairobi',
    year: 'To be specified',
    image: '/projects/Crescent Pearl.JPG',
    summary: 'Residential apartment development in Westlands, Nairobi.',
    fullDescription:
      'A residential apartment development in Westlands, Nairobi. More project details can later cover the design scope, services provided, challenges, and final outcomes.',
    services: ['Structural engineering', 'Civil engineering', 'Design coordination'],
    challenges: 'Detailed project challenges to be specified.',
    outcome: 'Project outcome and delivery impact to be specified.',
    gallery: ['/projects/Crescent Pearl.JPG'],
  },
];

const projectsQuery = `*[_type == "project"] | order(coalesce(order, 999) asc, title asc) {
  title,
  industry,
  location,
  "year": coalesce(year, "To be specified"),
  summary,
  "fullDescription": coalesce(fullDescription, summary),
  "services": coalesce(services, []),
  "challenges": coalesce(challenges, "Detailed project challenges to be specified."),
  "outcome": coalesce(outcome, "Project outcome and delivery impact to be specified."),
  "image": featuredImage.asset->url,
  "gallery": gallery[].asset->url
}`;

const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(coalesce(order, 999) asc, title asc)[0...$limit] {
  title,
  industry,
  location,
  "year": coalesce(year, "To be specified"),
  summary,
  "fullDescription": coalesce(fullDescription, summary),
  "services": coalesce(services, []),
  "challenges": coalesce(challenges, "Detailed project challenges to be specified."),
  "outcome": coalesce(outcome, "Project outcome and delivery impact to be specified."),
  "image": featuredImage.asset->url,
  "gallery": gallery[].asset->url
}`;

function normalizeProjects(projects: Project[]) {
  return projects.map((project) => ({
    ...project,
    image: project.image || '/projects/Jubilee Isurance.jpg',
    gallery:
      project.gallery && project.gallery.length > 0
        ? project.gallery
        : [project.image || '/projects/Jubilee Isurance.jpg'],
    services: project.services || [],
  }));
}

async function fetchSanityProjects(query: string, params: Record<string, unknown> = {}) {
  if (!isSanityConfigured) return [];

  try {
    const projects = await sanityClient.fetch<Project[]>(query, params, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    return normalizeProjects(projects);
  } catch {
    return [];
  }
}

export async function getProjects() {
  const projects = await fetchSanityProjects(projectsQuery);
  return projects.length > 0 ? projects : fallbackProjects;
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await fetchSanityProjects(featuredProjectsQuery, { limit });
  return projects.length > 0 ? projects : fallbackProjects.slice(0, limit);
}
