import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import Upload from "./Upload.jsx";
import { listObjects } from "../utils/index.js";
import { getSingleObject } from "../utils/index.js";
import ReactDOM from "react-dom";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState("");
  const [singlePhoto, setSinglePhoto] = useState("");

  function updateCurrentView(view) {
    setCurrentView(view);
  }

  async function getImages() {
    let list = await listObjects();
    const base64Array = list.map(obj => {
      const key = obj.Key;
      return getSingleObject(key);
    });
    Promise.all(base64Array).then(item => {
      setPhotos(item);
    });
  }

  useEffect(() => {
    getImages();
  }, []);

  // "data:image/jpeg;base64, "
  function sendIndex(index, base64string) {
    if (index && base64string) {
      setSelectedPhotos(base64string);
      setCurrentView("SinglePhoto");
      setSinglePhoto(base64string);
    }
  }

  return (
    <div className="app">
      <Navbar updateCurrentView={updateCurrentView} />
      <Upload />
      <div>
        {currentView === "AllPhotos" ? (
          <AllPhotos photos={photos} sendIndex={sendIndex} />
        ) : (
          <SinglePhoto singlePhoto={singlePhoto} />
        )}{" "}
      </div>
    </div>
  );
}
