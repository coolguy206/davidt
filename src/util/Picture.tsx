type Props = {
  imageSrcD: string;
  imageSrcM: string;
  imageAlt?: string;
  breakPoint?: string;
  className?: string;
};

export const Picture = ({
  imageSrcD,
  imageSrcM,
  imageAlt,
  breakPoint = '1280px',
  className,
}: Props) => {
  return (
    <picture className={className}>
      <source srcSet={imageSrcD} media={`(min-width: ${breakPoint})`} />

      <img src={imageSrcM} alt={imageAlt} className="w-full" />
    </picture>
  );
};
