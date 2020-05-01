import React from "react";
// import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils/index.js";

export default function Upload() {
  return (
    <div className="file-upload">
      <form>
        <label for="myfile">Upload a picture!</label>
        <input type="file" id="myfile"></input>
        <button>Upload!</button>
      </form>
    </div>
  );
}
