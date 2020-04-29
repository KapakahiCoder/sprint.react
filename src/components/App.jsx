import React, { useState } from "react";
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

  function updateCurrentView(view) {
    setCurrentView(view);
  }

  //use effect with this function as callback before any component mounting
  async function getImages() {
    let images = [];
    const list = await listObjects();

    for (let i = 0; i < 6; i++) {
      if (list[i]) {
        const data = await getSingleObject(list[i].Key);
        const result = `data:image/jpg;base64,${data}`;

        images.push(result);
      }
    }
    setPhotos(images);
  }
  getImages();

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
