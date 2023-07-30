import React from "react";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import CategoryDetails from "./pages/CategoryDetails";
import SingleVideoPage from "./pages/SingleVideoPage";
import WatchLater from "./pages/WatchLater";
import Explore from "./pages/Explore";
import PlayList from "./pages/PlayList";
const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route
          path="/singlevideopage/:videoId"
          element={<SingleVideoPage />}
        ></Route>
        <Route
          path="/categorydetails/:categorys"
          element={<CategoryDetails />}
        ></Route>
        <Route path="/playlist" element={<PlayList />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/watchlater" element={<WatchLater />}></Route>
      </Routes>
    </div>
  );
};

export default App;
