import React from "react";

export default function Navbar() {
  return (
    <div className="float-end">
      <i
        className="fa fa-bars"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        style={{ fontSize: "48px", cursor: "pointer" }}
      ></i>
    </div>
  );
}