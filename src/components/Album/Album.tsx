import classNames from "classnames";
import React, { useEffect, useState } from "react";

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

  return (
    <>
      {lightboxActive && (
        <div className="fixed inset-0 bg-slate-950 flex flex-col max-h-full">
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

      <div className="border">
        <div className="header p-3 py-2 border-b">
          <h1>Album Title</h1>
        </div>

        <div className="body text-xs p-3 space-y-3 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum,
            sint dolor ut quaerat ducimus atque, quod libero, exercitationem
            fugit animi doloribus. Maxime, alias voluptatibus! Optio asperiores
            dolor voluptatum aliquid.
          </p>

          <div className="-mx-3">
            <img
              src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Alt text"
              className="w-full border-y"
              onClick={() => {
                setLightboxActive(!lightboxActive);
              }}
            />

            <div className="metadata text-xxs">
              <div className="flex justify-between border-b p-2 py-1">
                <span className="text-slate-500">Camera</span>
                <span>Fujifilm XS20</span>
              </div>

              <div className="flex justify-between border-b p-2 py-1 text-right">
                <span className="text-slate-500 flex-shrink-0">Lens</span>
                <span>SIGMA 18-50mm F2.8 DC DN | Contemporary 021</span>
              </div>

              <div className="flex justify-between border-b p-2 py-1">
                <span className="text-slate-500">Exposure</span>
                <span className="flex space-x-3">
                  <span>1/250</span>
                  <span>f/2.8</span>
                  <span>ISO 100</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
