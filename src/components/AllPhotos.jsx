import React, { useEffect, useRef } from "react";
import _ from "lodash";
import { getSingleObject } from "../utils/index.js";

export default function AllPhotos({ photos }) {
  const photoBoxRef = useRef();

  async function getImages() {
    let images = [];
    for (let i = 0; i < 6; i++) {
      if (photos) {
        const data = await getSingleObject(photos[i].Key);
        const result = `data:image/jpg;base64,${data}`;

        images.push(result);
      }
    }
    return images;
  }

  // displayPhotos();

  return <div ref={photoBoxRef} className="photoContainer"></div>;
}
