import React, { useRef } from "react";
import "../styles/upload.css";
import { saveObject } from "../utils/index.js";

export default function Upload() {
  const file = useRef();

  return (
    <div className="file-upload">
      <button
        className="button"
        onClick={() => {
          file.current.click();
        }}
      >
        <input
          ref={file}
          type="file"
          className={"input"}
          accept="image/gif, image/jpeg, image/png"
          onChange={event => {
            saveObject(event.target.files[0]);
          }}
        ></input>
      </button>
    </div>
  );
}
