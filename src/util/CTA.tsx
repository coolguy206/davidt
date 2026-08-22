import Arrow from '@/assets/arrow.svg';

type Props = {
  buttonText: string;
  buttonLink: string;
  newTab?: boolean;
  className?: string;
  arrowRight?: boolean;
  onClick?: () => void;
};

export const CTA = ({
  buttonText,
  buttonLink,
  newTab = false,
  className,
  arrowRight = false,
  onClick,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. If the link is just "#", prevent the browser from jumping to the top
    if (buttonLink === '#') {
      e.preventDefault();
    }

    // 2. Safely execute openForm() to mount your modal interface
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={buttonLink}
      className={`cta-btn ${className}`}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
    >
      <span className="mr-5">{buttonText}</span>{' '}
      <img src={Arrow} alt="" className={`${arrowRight ? `-rotate-90` : ``}`} />
    </a>
  );
};
