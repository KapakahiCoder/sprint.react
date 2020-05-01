import React from "react";
import "../styles/allphotos.css";

export default function AllPhotos(props) {
  console.log("props:", props);

  return (
    <div className="all-photos">
      {props.photos.map((string, index) => (
        <img
          className="all-photos"
          src={"data:image/jpeg;base64, " + string}
          alt=""
          key={index}
          onClick={() => {
            console.log(index, string);
            props.sendIndex(index, string);
          }}
        />
      ))}
    </div>
  );
}
