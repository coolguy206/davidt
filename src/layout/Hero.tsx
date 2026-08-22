import { Picture } from '@/util/Picture';
import { CTA } from '@/util/CTA';
import CigarD from '@/assets/whiskey-cigar-d.jpg';
import CigarM from '@/assets/whiskey-cigar-m.jpg';

export const Hero = () => {
  return (
    <section className="mb-10 flex flex-wrap items-center pt-10 lg:items-start">
      <div className="order-2 w-full lg:order-1 lg:w-1/2">
        <Picture
          imageSrcD={CigarD}
          imageSrcM={CigarM}
          imageAlt="whiskey in a glass and a cigar nearby"
          breakPoint="1024px"
        />
      </div>
      <div className="order-1 w-full font-corm lg:order-2 lg:w-1/2 lg:pl-10 2xl:p-0">
        <h1 className="mb-10 text-gray text-[clamp(32px,8vw,50px)]">
          Engineering high-performance storefronts, headless architectures, and
          robust data pipelines..
        </h1>
        <p className="mb-10 text-[clamp(22px,6vw,24px)] text-bronse">
          Senior Software Engineer with 8+ years of experience specializing in
          React, TypeScript, Node.js, and enterprise Shopify Plus ecosystems. I
          build scalable front-end systems that bridge the gap between complex
          backend constraints and flawless user experiences.
        </p>
        <CTA
          buttonText="View Technical Post-Mortem"
          buttonLink="#featured-projects"
          className="w-full justify-center md:w-auto"
        />
      </div>
    </section>
  );
};
