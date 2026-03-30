import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="text-center mt-5 pt-5 pb-5 bg-light">
        <i className="fa fa-facebook-official"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-snapchat"></i>
        <i className="fa fa-pinterest-p"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>

        <p className="mb-0 pt-3">
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp">
            w3.css
          </a>
        </p>
      </div>
    </footer>
  );
}