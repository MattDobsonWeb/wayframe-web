import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import Logo from "../Logo/Logo";

const Album = () => {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxInfoActive, setLightboxInfoActive] = useState(false);
  const [lightboxImageFullFocus, setLightboxImageFullFocus] = useState(false);

  // create a esc key listener to close the lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // add no scroll to body when lightbox is active
  useEffect(() => {
    if (lightboxActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxActive]);

  return (
    <>
      <div className="flex items-center p-2 border-b">
        <Logo withText />
      </div>

      {lightboxActive && (
        <div className="fixed inset-0 bg-slate-950 flex flex-col max-h-full z-100">
          {!lightboxImageFullFocus && (
            <div className="header flex text-white justify-end items-center">
              <button
                className="p-2 cursor-pointer"
                onClick={() => setLightboxActive(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          <div
            className={classNames("relative flex-grow", {
              "mb-3": !lightboxImageFullFocus,
            })}
            onClick={() => {
              setLightboxImageFullFocus(!lightboxImageFullFocus);
            }}
          >
            <img
              // src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src="https://images.unsplash.com/photo-1734760381824-f52cb9960b9e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Alt text"
              className="absolute w-full h-full object-contain"
            />
          </div>

          {!lightboxImageFullFocus && lightboxInfoActive && (
            <div className="border-t text-xxs text-white p-3 py-2">
              <p>Metadata in here</p>
            </div>
          )}

          {!lightboxImageFullFocus && (
            <div className="text-white text-xxs border-t flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className={classNames("border-r p-3 py-2 cursor-pointer", {
                    ["bg-white text-black"]: lightboxInfoActive,
                  })}
                  onClick={() => setLightboxInfoActive(!lightboxInfoActive)}
                >
                  Info
                </button>
                <div className="border-r p-3 py-2">Purchase Print</div>
              </div>
              <div className="p-3 py-2 border-l">1/12</div>
            </div>
          )}
        </div>
      )}

      <div className="mb-5">
        <div className="sticky top-0 z-10 bg-white">
          <div className="border-b text-xs flex items-center justify-between">
            <h1 className="font-semibold p-3 py-2">Album Title</h1>

            <div className="text-xs flex border-l items-center justify-center p-3 py-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={classNames("w-4 h-4 cursor-pointer", {
                  "text-rose-500": true,
                })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill={true ? "currentColor" : "none"}
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <span>33</span>
            </div>
          </div>

          <nav className="flex text-xxs divide-x border-b">
            <button className="w-1/3 py-1.5 bg-black text-white">Story</button>
            <button className="w-1/3 py-1.5">Map</button>
            <button className="w-1/3 py-1.5">Comments</button>
          </nav>
        </div>

        <div className="flex items-center justify-center text-xxs fixed z-10 bg-white bottom-0 w-full left-0 border-t">
          <div className="flex items-center gap-2 p-2 py-0 flex-grow">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
              alt="Author"
              className="w-5 h-5 border"
            />
            <span>John Doe</span>
          </div>

          <div>
            <button className="py-2 px-3 border-l">Follow</button>
          </div>
        </div>

        <div className="body text-xs leading-relaxed">
          <p className="text-justify py-3 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum,
            sint dolor ut quaerat ducimus atque, quod libero, exercitationem
            fugit animi doloribus. Maxime, alias voluptatibus! Optio asperiores
            dolor voluptatum aliquid.
          </p>

          <div className="space-y-5 mb-10">
            <ImageWrapper
              lightboxActive={lightboxActive}
              setLightboxActive={setLightboxActive}
              frameNumber={1}
            />

            <ImageWrapper
              lightboxActive={lightboxActive}
              setLightboxActive={setLightboxActive}
              frameNumber={2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface ImageWrapperProps {
  lightboxActive: boolean;
  setLightboxActive: (active: boolean) => void;
  frameNumber: number;
}

const ImageWrapper = ({
  lightboxActive,
  setLightboxActive,
  frameNumber,
}: ImageWrapperProps) => {
  return (
    <div className="divide-y border-t">
      <div className="flex justify-between items-center bg-black  text-white p-2 py-1">
        <span className="opacity-80">Frame</span>
        <span>{frameNumber}/12</span>
      </div>

      <img
        src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Alt text"
        className="w-full"
        onClick={() => {
          setLightboxActive(!lightboxActive);
        }}
      />

      <div className="metadata text-xxs divide-y border-b">
        <div className="p-2 text-xs leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt
          quo quasi ullam omnis sapiente. Quisquam, fugit dicta velit laboriosam
          eveniet, quia minima excepturi, modi non quae reiciendis in ipsum.
        </div>

        <div className="flex justify-between p-2 py-1">
          <span className="text-slate-500">Camera</span>
          <span>Fujifilm XS20</span>
        </div>

        <div className="flex justify-between p-2 py-1 text-right">
          <span className="text-slate-500 flex-shrink-0">Lens</span>
          <span>SIGMA 18-50mm F2.8 DC DN | Contemporary 021</span>
        </div>

        <div className="flex justify-between p-2 py-1">
          <span className="text-slate-500">Exposure</span>
          <span className="flex space-x-3">
            <span>1/250</span>
            <span>f/2.8</span>
            <span>ISO 100</span>
          </span>
        </div>

        <div className="flex justify-between p-2 py-1">
          <span className="text-slate-500">Location</span>
          <span>Looe, Cornwall, United Kingdom</span>
        </div>
      </div>
    </div>
  );
};

export default Album;
