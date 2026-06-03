import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { getProjects } from '@/lib/projects';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsExplorer projects={projects} />;
}
