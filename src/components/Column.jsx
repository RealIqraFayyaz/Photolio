import React from "react";
import ImageCard from "./ImageCard";

export default function Column({ images }) {
  return (
    <div className="col-sm-4 p-0">
      {images.map((img, index) => (
        <ImageCard key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}