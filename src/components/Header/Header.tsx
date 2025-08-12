import React from "react";
import Logo from "../Logo/Logo";

export interface HeaderProps {
  // Define any props needed for the Header component
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="mb-5 sticky top-0 z-10 bg-white">
      <div className="flex items-center p-2 border-b">
        <Logo withText />
      </div>

      <div className="text-xs flex items-center border-b">
        <button className="w-1/3 border-r py-2 bg-black text-white">
          Feed
        </button>
        <button className="w-1/3 border-r py-2">Following</button>
        <button className="w-1/3 py-2">Explore</button>
      </div>
    </div>
  );
};

export default Header;
