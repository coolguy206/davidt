import { useState } from 'react';

interface FigmaViewportProps {
  embedUrl: string;
}

export const FigmaViewport = ({ embedUrl }: FigmaViewportProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <aside className="w-full lg:w-1/2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="cta-btn w-full justify-center xl:hidden"
      >
        <span>
          {isExpanded ? 'Hide Figma Workspace -' : 'View Figma Workspace +'}
        </span>
      </button>

      <div
        className={`w-full overflow-auto transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'max-h-[500px] opacity-100 sm:max-h-[700px]'
            : 'max-h-0 opacity-0 xl:max-h-full xl:opacity-100'
        } `}
      >
        <iframe
          className="block h-full min-h-[500px] w-full xl:min-h-[800px]"
          src={embedUrl}
          allowFullScreen
          loading="lazy"
          title="Figma Project Design Preview"
        />
      </div>
    </aside>
  );
};
