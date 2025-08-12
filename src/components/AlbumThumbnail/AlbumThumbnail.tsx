import classNames from "classnames";
import moment from "moment";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export interface AlbumThumbnailProps {
  imageUrl: string;
  title: string;
  author: {
    name: string;
    imageUrl: string;
    username: string;
  };
  likes: number;
  comments: number;
  isLiked: boolean;
  date: string;
  endDate?: string;
  location: string;
  photoCount: number;
  onLike: () => void;
  onComment: () => void;
}

const AlbumThumbnail: React.FC<AlbumThumbnailProps> = ({
  imageUrl,
  title,
  author,
  likes,
  comments,
  isLiked,
  date,
  endDate,
  location,
  photoCount,
  onLike,
  onComment,
}) => {
  return (
    <div className="border-y mb-5 last:mb-0 text-slate-600">
      <div className="flex items-center justify-center text-xxs border-b">
        <div className="flex items-center gap-2 p-2 py-0 flex-grow">
          <img
            src={author.imageUrl}
            alt={author.name}
            className="w-5 h-5 border"
          />
          <span>{author.name}</span>
        </div>

        <div>
          <button className="py-2 px-3 border-l">Follow</button>
        </div>
      </div>

      <ScrollContainer className="flex p-2 h-[65vw] max-h-[300px] border-b !overflow-auto">
        <div className="flex space-x-2 flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-auto flex-shrink-0 border object-contain"
          />
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-auto flex-shrink-0 border object-contain"
          />
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-auto flex-shrink-0 border object-contain"
          />
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-auto flex-shrink-0 border object-contain"
          />
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-auto flex-shrink-0 border object-contain"
          />
        </div>
      </ScrollContainer>

      {/* <div className="relative aspect-[3/2] overflow-hidden border-b">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="flex items-center border-b text-xxs">
        <div className="border-r p-2 flex-grow">{location}</div>

        <div className="p-3 py-2">
          {photoCount} frame{photoCount !== 1 && "s"}
        </div>
      </div>

      <div className="py-3 px-2">
        <span className="text-xxs -mb-0 block">
          {moment(date).format("MMM D, YYYY")}
          {endDate && ` - ${moment(endDate).format("MMM D, YYYY")}`}
        </span>
        <h3 className="font-semibold text-md text-slate-900">{title}</h3>
      </div>

      {/* <div className="text-xs p-3 leading-relaxed">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quod
          eos eveniet magni! Qui facere magnam dicta necessitatibus error
          repellendus...
        </p>
      </div> */}

      <div className="flex items-center border-t text-xxs">
        <div className="w-1/4 flex border-r items-center justify-center p-3 py-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classNames("w-5 h-5 cursor-pointer", {
              "text-rose-500": isLiked,
            })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={isLiked ? "currentColor" : "none"}
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <span>{likes}</span>
        </div>

        <div className="w-1/4 flex border-r items-center justify-center p-3 py-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-h h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>

          <span>{comments}</span>
        </div>

        <div className="w-1/4 flex border-r items-center justify-center p-3 py-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>

        <div className="w-1/4 flex ago items-center justify-center p-3 py-2 gap-2">
          <span>20 May 22</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumThumbnail;
