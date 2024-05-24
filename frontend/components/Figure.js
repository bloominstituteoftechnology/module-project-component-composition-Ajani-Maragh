import React from "react";

export default function Figure({ imageURL, caption }) {
  return (
    <figure className="img">
      <img src={imageURL}></img>
      <figcaption className="fig">Awesome Picture on {caption}</figcaption>
    </figure>
  );
}
