import React, { createContext, useContext, useState } from "react";
import { videos } from "../dataBase/Data";
const context = createContext();

const Contexst = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  // add to watch later
  const addToWatchLater = (ids) => {
    // Check if the video with the given id already exists in watchLater
    if (!watchLater.some((video) => video?._id === ids)) {
      const obj = videos.find((video) => video?._id === ids);
      // Add the video object to the watchLater state
      setWatchLater((prevWatchLater) => [...prevWatchLater, obj]);
    }
  };
  return (
    <context.Provider value={{ watchLater, setWatchLater, addToWatchLater }}>
      {children}
    </context.Provider>
  );
};
// useGlobal Hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexst;
export { useGlobalHook };
