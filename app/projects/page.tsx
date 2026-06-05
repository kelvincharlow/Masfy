import type { Metadata } from 'next';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { getProjects } from '@/lib/projects';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Projects | Masfy Consulting Engineers Kenya',
  description:
    'Explore Masfy project case studies across apartments, commercial, hospitality, industrial, infrastructure, and structural assessment work in Kenya.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsExplorer projects={projects} />;
}
