import React from "react";

interface LogoProps {
  withText?: boolean;
}

const Logo = ({ withText }: LogoProps) => {
  return (
    <div className="flex items-center">
      <div className="border-2 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      {withText && <span className="text-md font-medium ml-2">Wayframe</span>}
    </div>
  );
};

export default Logo;
