import React from "react";

export default function SinglePhoto(props) {
  return (
    <div>
      <img src={"data:image/jpeg;base64, " + props.singlePhoto} />
    </div>
  );
}
