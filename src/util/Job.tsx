interface JobProps {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export const Job = ({ company, role, duration, bullets }: JobProps) => {
  return (
    <div className="mb-10 last:mb-0">
      {/* Header Row */}
      <div className="mb-10 flex w-full flex-wrap items-center justify-center gap-5 text-center font-jet text-responsive text-gold uppercase lg:flex-nowrap lg:justify-between">
        <span className="w-full">{company}</span>
        <span className="hidden h-px w-1/2 bg-[gold] lg:block"></span>
        <span className="w-full">{role}</span>
        <span className="hidden h-px w-1/2 bg-[gold] lg:block"></span>
        <span className="w-full">{duration}</span>
      </div>

      <ul className="flex w-full list-disc flex-wrap gap-10 pl-5 font-inter text-responsive">
        {bullets.map((bullet, index) => (
          <li key={index} className="w-full">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};
