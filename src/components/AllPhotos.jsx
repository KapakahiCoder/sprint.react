import React, { useEffect } from "react";
import _ from "lodash";
import { getSingleObject } from "../utils/index.js";
import "../styles/allphotos.css";

export default function AllPhotos(props) {
  console.log("props:", props.photos);

  return (
    <div className="all-photos">
      {props.photos.map((string, index) => (
        <img
          src={"data:image/jpeg;base64, " + string}
          key={index}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}
