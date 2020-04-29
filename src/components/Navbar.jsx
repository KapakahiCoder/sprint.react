import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import App from "./App.jsx";
import Upload from "./Upload.jsx";

export default function Navbar({ updateCurrentView }) {
  // console.log(props)
  return (
    <div className="navbar">
      <h1
        onClick={() => {
          updateCurrentView("AllPhotos");
        }}
      >
        Photo Upload App
      </h1>
      <Upload />
    </div>
  );
}
