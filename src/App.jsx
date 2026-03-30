import React from "react";
import Navbar from "./components/Navbar";
import OffcanvasMenu from "./components/OffcanvasMenu";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";

export default function App() {
  return (
    <>
      <Navbar />
      <OffcanvasMenu />
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}