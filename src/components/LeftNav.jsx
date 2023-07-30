import React from "react";

import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdWatchLater } from "react-icons/md";
import { RiPlayListAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const LeftNav = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`md:block w-[240px] min-w-[240px] overflow-y-auto h-full py-4 bg-gray-200 absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all h-60vh text-black`}
    >
      <div className="flex px-5 flex-col ">
        <div
          onClick={() => navigate("/")}
          className={
            " text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg  hover:bg-black/[0.15]"
          }
        >
          <span className="text-xl mr-5">
            <AiFillHome />
          </span>
          Home
        </div>
        <div
          onClick={() => navigate("/explore")}
          className={
            " text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg  hover:bg-black/[0.15] "
          }
        >
          <span className="text-xl mr-5">
            <MdExplore />
          </span>
          Explore
        </div>
        <div
          onClick={() => navigate("/playlist")}
          className={
            " text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg  hover:bg-black/[0.15] "
          }
        >
          <span className="text-xl mr-5">
            <RiPlayListAddLine />
          </span>{" "}
          Playlist
        </div>
        <div
          onClick={() => navigate("/watchlater")}
          className={
            " text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-black/[0.15] "
          }
        >
          <span className="text-xl mr-5">
            <MdWatchLater />
          </span>{" "}
          Watchlater
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
