import { ProjectDetails } from '@/util/ProjectDetails';
import { CodeViewport } from '@/util/CodeViewport';
import { FigmaViewport } from '@/util/FigmaViewport';
import type { ProjectData } from '@/util/Types';

interface ProjectSectionProps {
  project: ProjectData;
}

export const ProjectSection = ({ project }: ProjectSectionProps) => {
  return (
    <div className="relative mb-20 flex w-full flex-wrap items-stretch justify-between gap-10 text-white">
      <ProjectDetails project={project} />
      {project.codeSnippet && <CodeViewport code={project.codeSnippet} />}

      {project.figmaEmbedUrl && (
        <FigmaViewport embedUrl={project.figmaEmbedUrl} />
      )}
    </div>
  );
};
