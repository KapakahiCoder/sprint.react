import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import Upload from "./Upload.jsx";
import { listObjects } from "../utils/index.js";
import ReactDOM from "react-dom";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState("");

  function updateCurrentView(view) {
    setCurrentView(view);
  }

  async function getImages() {
    const list = await listObjects();
    setPhotos(list);
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
