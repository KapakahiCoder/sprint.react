import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
// import Upload from "./Upload.jsx";
import { listObjects } from "../utils/index.js";
import { getSingleObject } from "../utils/index.js";
// import ReactDOM from "react-dom";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState("");

  function updateCurrentView(view) {
    setCurrentView(view);
  }

  //use effect with this function as callback before any component mounting

  async function getImages() {
    const getObj = async () => {
      let list = await listObjects();
      return list;
    };

    const getKeys = async limit => {
      const list = await getObj();
      const keys = [];
      for (let i = 0; i < limit; i++) {
        keys.push(list[i].Key);
      }
      return keys;
    };

    const getUrls = async () => {
      const urls = [];
      const keys = await getKeys(6);
      for (let i = 0; i < keys.length; i++) {
        const string = await getSingleObject(keys[i]);
        urls.push(string);
      }
      console.log("urls:", urls);
      return urls;
    };

    return await getUrls();
  }

  console.log(getImages());

  return (
    <div className="app">
      <Navbar updateCurrentView={updateCurrentView} />
      <div>
        {currentView === "AllPhotos" ? (
          <AllPhotos photos={photos} />
        ) : (
          <SinglePhoto />
        )}{" "}
      </div>
    </div>
  );
}
