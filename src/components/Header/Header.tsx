import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

export interface HeaderProps {
  // Define any props needed for the Header component
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="sticky top-0 z-10 bg-white border-y">
      <div className="container">
        <div className="border-x flex justify-between divide-x">
          <Link href="/" className="flex items-center px-3 py-2">
            <Logo withText />
          </Link>

          <div className="divide-x border-l flex text-sm">
            <Link
              href="/login"
              className="px-4 flex items-center hover:opacity-80"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 bg-black text-white flex items-center hover:opacity-80"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
