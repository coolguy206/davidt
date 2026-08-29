// InteractiveViewport.tsx
import { useState } from 'react';

interface InteractiveViewportProps {
  embedUrl: string;
  label?: string; // ⚡ ADDED: Optional dynamic label (Defaults to 'Workspace')
}

export const InteractiveViewport = ({
  embedUrl,
  label = 'Workspace',
}: InteractiveViewportProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="w-full lg:w-1/2">
      {/* ⚡ DYNAMIC BUTTON TEXT CONTROLS */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="cta-btn w-full justify-center xl:hidden"
      >
        <span>{isExpanded ? `Hide ${label} -` : `View ${label} +`}</span>
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
          title={`${label} Interactive Live Project Preview`}
        />
      </div>
    </aside>
  );
};
