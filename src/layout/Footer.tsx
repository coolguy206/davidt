import { Email } from '@/util/Email';
import { URLs } from '@/util/URLs';
import { Picture } from '@/util/Picture';
import WhiskeyFooterD from '@/assets/whiskey-cigar-footer-d.jpg';
import WhiskeyFooterM from '@/assets/whiskey-cigar-footer-m.jpg';

export const Footer = () => {
  return (
    <footer>
      <div className="text-right">
        <Picture
          imageSrcD={WhiskeyFooterD}
          imageSrcM={WhiskeyFooterM}
          imageAlt="Whiskey in a glass next to a cigar in a glass ashtray"
          breakPoint="768px"
          className="inline-block w-full md:w-1/2"
        />
      </div>

      <div className="my-10 flex flex-wrap justify-center gap-5 text-center font-jet text-responsive text-gray uppercase 2xl:justify-start 2xl:text-left">
        <span>
          <Email />
        </span>
        <URLs />
      </div>
    </footer>
  );
};
