import Link from "next/link";
import { FC } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  return (
    <header className="w-screen h-16 bg-slate-50 sticky top-0 left-0">
      <nav className="w-[85vw] h-full mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div>shivaji.dev</div>
        </Link>
        <div className="flex space-x-6 items-center">
          <ThemeToggle />
          <div>
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton />
            </SignedIn>
            <SignedOut>
              {/* Signed out users get sign in button */}
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
