import React from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";

export default function Navbar({ updateCurrentView }) {
  return (
    <div className="navbar">
      <h1
        onClick={() => {
          updateCurrentView("AllPhotos");
        }}
      >
        CCgram
      </h1>
      <Upload />
    </div>
  );
}
