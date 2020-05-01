import React from "react";
import "../styles/photo.css";

export const Photo = props => {
  return (
    <div className="photo">
      <img alt="stock" src={props.url}></img>
    </div>
  );
};
