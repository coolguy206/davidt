import Resume from '@/assets/Resume-Web.pdf';

export const URLs = () => {
  return (
    <ul className="inline-flex gap-5">
      <li>
        <a href={Resume} target="_blank">resume</a>
      </li>
      <li>
        <a href="https://github.com/coolguy206" target="_blank">
          github
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/david-thanphilom-4961329/"
          target="_blank"
        >
          linkedin
        </a>
      </li>
    </ul>
  );
};
