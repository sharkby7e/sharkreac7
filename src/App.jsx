import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio/";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="mb-32">
          <Routes>
            <Route path="/sharkreac7" element={<AboutMe />}></Route>
            <Route path="/sharkreac7/contact" element={<Contact />}></Route>
            <Route path="/sharkreac7/portfolio" element={<Portfolio />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
