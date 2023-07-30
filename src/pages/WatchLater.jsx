import React from "react";
import { useGlobalHook } from "../contxt/Contexst";
import LeftNav from "../components/LeftNav";
import { useNavigate } from "react-router-dom";

const WatchLater = () => {
  const navigate = useNavigate();
  const { watchLater } = useGlobalHook();
  console.log(watchLater);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />

      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-2 border-red-500 p-1">
          Watch Later
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {watchLater?.length === 0 ? (
            <h1>Nothing is added in Watch Later</h1>
          ) : (
            watchLater?.map((categgory) => {
              return (
                <div
                  className="cursor-pointer mb-3"
                  onClick={() =>
                    navigate(`/categorydetails/${categgory?.category}`)
                  }
                  key={categgory?._id}
                >
                  <img
                    src={categgory?.thumbnail}
                    className="rounded-md"
                    alt={categgory?.category}
                  />
                  <h3 className="text-xl ml-1">{categgory?.category}</h3>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
