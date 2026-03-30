import React from "react";

export default function OffcanvasMenu() {
  return (
    <div
      className="offcanvas offcanvas-top bg-dark text-center text-white fs-5"
      style={{ height: "100vh" }}
      id="offcanvasTop"
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        <p>About</p>
        <p>Photos</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
    </div>
  );
}