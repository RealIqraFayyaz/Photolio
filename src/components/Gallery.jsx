import React from "react";
import Column from "./Column";

export default function Gallery() {
  const column1 = [
    { src: "rocks.jpg", alt: "rocks" },
    { src: "sound.jpg", alt: "sound" },
    { src: "woods.jpg", alt: "woods" },
    { src: "rock.jpg", alt: "rock" },
    { src: "nature.jpg", alt: "nature" },
    { src: "mist.jpg", alt: "mist" },
  ];

  const column2 = [
    { src: "coffee.jpg", alt: "coffee" },
    { src: "bridge.jpg", alt: "bridge" },
    { src: "notebook.jpg", alt: "notebook" },
    { src: "london.jpg", alt: "london" },
    { src: "rocks (1).jpg", alt: "rocks" },
    { src: "avatar_g.jpg", alt: "avatar" },
  ];

  const column3 = [
    { src: "mist (1).jpg", alt: "mist" },
    { src: "workbench.jpg", alt: "workbench" },
    { src: "gondol.jpg", alt: "gondol" },
    { src: "skies.jpg", alt: "skies" },
    { src: "lights.jpg", alt: "lights" },
    { src: "workshop.jpg", alt: "workshop" },
  ];

  return (
    <div className="container-fluid mt-5 mb-5 pb-5">
      <div className="row">
        <Column images={column1} />
        <Column images={column2} />
        <Column images={column3} />
      </div>
    </div>
  );
}