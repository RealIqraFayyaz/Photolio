import React from "react";

export default function ImageCard({ src, alt }) {
  return (
    <div className="hhh">
      <img className="w-100" src={src} alt={alt} />
    </div>
  );
}