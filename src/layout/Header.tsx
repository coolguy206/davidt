import { URLs } from '@/util/URLs';
export const Header = () => {
  return (
    <header className="flex flex-wrap justify-between gap-5 border-b border-dk-gray py-10 text-center font-jet text-responsive uppercase">
      <span className="w-full text-gray lg:w-auto">David Thanphilom</span>
      <span className="w-full text-bronse lg:w-auto">
        Sr. systems & front-end engineer
      </span>
      <nav className="w-full text-dk-gray lg:w-auto">
        <URLs />
      </nav>
    </header>
  );
};
