import Image from 'next/image';
import { shadow } from '@/style/utiles';
import { Button } from './ui/button';
import Link from 'next/link';

function Header() {
  const user = null;
  return (
    <header
      className="relative flex h-20 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <div className="flex items-center">
        <Image
          src="/Note.png"
          height={90}
          width={90}
          alt="logo"
          className="rounded-full"
          priority
        />
        <span className=" text-lg font-semibold">Note</span>
      </div>
      <div className="flex gap-4">
        {user ? (
          'logout'
        ) : (
          <>
            <Button asChild>
              <Link href="/signup"className='hidden sm:block'>
              signup
              </Link>
            </Button>
            <Button asChild variant={'outline'}>
              <Link href="/login">
               Login
              </Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;