import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../dataBase/Data";
import { MdOutlineWatchLater } from "react-icons/md";
import LeftNav from "../components/LeftNav";
const CategoryDetails = () => {
  const navigate = useNavigate();
  const { categorys } = useParams();

  const [renderData, setRender] = useState([]);
  useEffect(() => {
    const filterData = videos?.filter((video) => {
      return video.category == categorys;
    });
    setRender([...filterData]);
  }, [categorys]);
  console.log(renderData);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-2 border-red-500 p-1">
          {categorys}
        </h2>
        <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
          {renderData?.map((categgory) => {
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

export default CategoryDetails;
