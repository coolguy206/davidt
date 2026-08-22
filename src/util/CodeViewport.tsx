import { useState } from 'react';

interface CodeViewportProps {
  code: string;
}

export const CodeViewport = ({ code }: CodeViewportProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="relative w-full overflow-x-auto overflow-y-auto lg:w-1/2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="cta-btn w-full justify-center xl:hidden"
      >
        <span>
          {isExpanded ? 'Hide Source Blueprint -' : 'View Source Blueprint +'}
        </span>
      </button>

      <div
        className={`w-full overflow-auto transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'max-h-[500px] sm:max-h-[700px] opacity-100'
            : 'max-h-0 opacity-0 xl:max-h-full xl:opacity-100'
        } `}
      >
        <pre className="py-10 top-0 left-0 w-full xl:absolute">
          <code className="block font-jet text-responsive text-dk-gray w-full">
            {code}
          </code>
        </pre>
      </div>
    </aside>
  );
};
