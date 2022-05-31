import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Bigbox() {
  // const [page, setPage] = useState("About");

  return (
    <div className="bg-base-300">
      <Navbar />
      <h2 className="text-center text-6xl p-5">This is sharkby7e for sure</h2>
      <Footer />
    </div>
  );
}
