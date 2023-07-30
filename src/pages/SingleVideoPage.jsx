import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videos } from "../dataBase/Data";
import LeftNav from "../components/LeftNav";
import ReactPlayer from "react-player";
import { MdWatchLater } from "react-icons/md";
import { CgPlayListAdd } from "react-icons/cg";
import { BsMusicNoteList } from "react-icons/bs";
import { useGlobalHook } from "../contxt/Contexst";
const SingleVideoPage = () => {
  const { videoId } = useParams();
  const [renderData, setRender] = useState();
  const { addToWatchLater } = useGlobalHook();
  useEffect(() => {
    const filterData = videos.filter((video) => {
      return video?._id.toString() === videoId.toString();
    });
    setRender(filterData?.[0]);
  }, [videoId]);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
        <ReactPlayer
          url={renderData?.src}
          controls
          width="60vw"
          height="70%"
          style={{ backgroundColor: "#000000" }}
          playing={true}
        />
        <div className="flex flex-row justify-between items-center mt-4">
          <img
            src={renderData?.thumbnail}
            alt="User Avatar"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <div className=" font-bold text-sm md:text-xl  line-clamp-2 ">
            {renderData?.title}
          </div>
          <div className="icons flex flex-row justify-between items-center">
            <MdWatchLater
              className="text-2xl ml-3 cursor-pointer"
              onClick={() => addToWatchLater(renderData?._id)}
            />
            <CgPlayListAdd className="text-2xl ml-3 cursor-pointer" />
            <BsMusicNoteList className="text-2xl ml-3 cursor-pointer" />
          </div>
        </div>
        <hr
          style={{
            border: "2px solid #a8e4e6",
            opacity: "0.5",
            marginTop: "5px",
          }}
        />
      </div>
      <br />
    </div>
  );
};

export default SingleVideoPage;
