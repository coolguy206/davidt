export interface SolutionPoint {
  label: string;
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  techStack: string;

  challengeHeading?: string; // Defaults to "The Challenge"
  solutionHeading?: string; // Defaults to "The Solution"
  impactHeading?: string; // Defaults to "The Impact"

  challenge: string;
  solutions: string | SolutionPoint[];
  impact: string;
  codeSnippet?: string;
  embedUrl?: string;
  githubUrl?: string; 
  label?: string;
}
