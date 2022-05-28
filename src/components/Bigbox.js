import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Bigbox() {
  const [page, setPage] = useState("About");

  return (
    <div className="bg-base-300">
      <Navbar />
      <h2>HERE IS THE FIRST COMPONENT</h2>
      <Footer />
    </div>
  );
}
