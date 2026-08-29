// ProjectDetails.tsx
import type { ProjectData } from '@/util/Types';
import { CTA } from './CTA';

interface ProjectDetailsProps {
  project: Omit<ProjectData, 'codeSnippet'>;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <article className="w-full lg:w-3/8">
      <header className="mb-10 flex flex-wrap gap-5">
        <span className="font-jet text-responsive text-gold">
          {project.id} / FEATURED PROJECT
        </span>
        <h2 className="font-corm text-[clamp(30px,8vw,50px)] lg:text-[clamp(30px,4vw,40px)]">
          {project.title}
        </h2>
        <span className="text-inter text-responsive">{project.techStack}</span>
      </header>

      {/* Challenge Section */}
      <div className="mb-10">
        <h3 className="mb-7 font-jet text-responsive text-gold">
          {project.challengeHeading || 'The Challenge'}
        </h3>
        <p className="font-inter text-responsive">{project.challenge}</p>
      </div>

      {/* Solution Section */}
      <div className="mb-10">
        <h3 className="mb-7 font-jet text-responsive text-gold">
          {project.solutionHeading || 'The Solution'}
        </h3>

        {Array.isArray(project.solutions) ? (
          <ul className="list-disc space-y-7 pl-5 font-inter text-responsive">
            {project.solutions.map((item, index) => (
              <li className="mb-7" key={index}>
                <strong>{item.label}:</strong> {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-inter text-responsive">{project.solutions}</p>
        )}
      </div>

      {/* Impact Section */}
      <div className="mb-10">
        <h3 className="mb-7 font-jet text-responsive text-gold">
          {project.impactHeading || 'The Impact'}
        </h3>
        <p className="font-inter text-responsive">{project.impact}</p>
      </div>

      {project.githubUrl && (
        <div className="mt-12 pt-4">
          <CTA
            buttonText="Inspect Source Code"
            buttonLink={project.githubUrl}
            className=""
            newTab={true} // Opens securely in a fresh browser tab
            arrowRight={true} // Rotates your arrow icon cleanly
          />
        </div>
      )}
    </article>
  );
};
