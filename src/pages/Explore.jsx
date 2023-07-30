import React from "react";
import { videos } from "../dataBase/Data";
import LeftNav from "../components/LeftNav";
import { useNavigate } from "react-router-dom"; // Don't forget to import useNavigate
import { MdOutlineWatchLater } from "react-icons/md";

const Explore = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-2 border-red-500 p-1">
          {"categorys"}
        </h2>
        <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
          {videos?.map((categgory) => {
            return (
              <div
                className="cursor-pointer mb-3 relative "
                onClick={() => navigate(`/singlevideopage/${categgory?._id}`)}
                key={categgory?._id}
              >
                <MdOutlineWatchLater className="text-cyan-400 absolute right-3 rounded-bl-lg text-4xl top-0 bg-white pl-2 pr-2" />
                <img
                  src={categgory?.thumbnail}
                  className="rounded-md"
                  alt={categgory?.title}
                />
                <h3 className="text-xl ml-1">{categgory?.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
