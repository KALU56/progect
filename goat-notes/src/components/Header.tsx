import Image from 'next/image';
import { shadow } from '@/style/utiles';

function Header() {
  return (
    <header
      className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
      style={{
        boxShadow: shadow,
      }}
    >
      <div className="flex items-center">
        <Image
          src="/Note.png" // Corrected image path
          height={100}
          width={100}
          alt="logo"
          className="rounded-full"
          priority
        />
        <span className="ml-2 text-lg font-semibold">Note</span> {/* Added text */}
      </div>
    </header>
  );
}

export default Header;