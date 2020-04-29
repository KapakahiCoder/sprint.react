import React, { useEffect, useRef } from "react";
import _ from "lodash";
import { getSingleObject } from "../utils/index.js";

export default function AllPhotos({ photos }) {
  const photoBoxRef = useRef();

  function displayPhotos() {
    photos.forEach(async photo => {
      const data = await getSingleObject(photo.Key);
      const result = `data:image/jpg;base64,${data}`;
      const element = <img src={result}></img>;
      // photoBoxRef.appendChild(<img src={result}></img>)

      // ReacdDom.render(result)
    });
  }

  //   const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />

  // ReactDOM.render(<Example data={data} />, document.getElementById('container'))

  displayPhotos();

  return <div ref={photoBoxRef} className="photoContainer"></div>;
}
