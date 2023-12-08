import Link from 'next/link';
import { FC } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ThemeToggle } from '@/components/theme-toggle';

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
   return (
      <header className='sticky left-0 top-0 h-16 w-full shadow dark:shadow-white'>
         <nav className='mx-auto flex h-full w-[80vw] items-center justify-between '>
            <Link href={'/'}>
               <div>
                  <h2 className='text-lg font-bold text-zinc-600 dark:text-white lg:text-xl'>
                     Shivaji.dev
                  </h2>
               </div>
            </Link>
            <div className='flex items-center space-x-4 lg:space-x-6'>
               <div>
                  <SignedOut>
                     {/* Signed out users get sign in button */}
                     <Link href={'/sign-in'}>
                        <div className='dark:text-white'>SignIn</div>
                     </Link>
                  </SignedOut>
               </div>
               <ThemeToggle />
               <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton afterSignOutUrl='/' />
               </SignedIn>
            </div>
         </nav>
      </header>
   );
};

export default Header;
