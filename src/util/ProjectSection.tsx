import { ProjectDetails } from '@/util/ProjectDetails';
import { CodeViewport } from '@/util/CodeViewport';
import { InteractiveViewport } from '@/util/InteractiveViewport';
import type { ProjectData } from '@/util/Types';

interface ProjectSectionProps {
  project: ProjectData;
}

export const ProjectSection = ({ project }: ProjectSectionProps) => {
  return (
    <div className="relative mb-20 flex w-full flex-wrap items-stretch justify-between gap-10 text-white">
      <ProjectDetails project={project} />
      {project.codeSnippet && <CodeViewport code={project.codeSnippet} />}

      {project.embedUrl && (
        <InteractiveViewport embedUrl={project.embedUrl} label={project.label} />
      )}
    </div>
  );
};
