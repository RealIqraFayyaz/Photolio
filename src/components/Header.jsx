import React from "react";
import ToggleButton from "./ToggleButton";

export default function Header() {
  return (
    <div className="mt-5 text-secondary text-center">
      <h1>PHOTOLIO</h1>
      <h6 className="mt-3">
        A template made by w3.css for photographers.
      </h6>

      <ToggleButton />
    </div>
  );
}