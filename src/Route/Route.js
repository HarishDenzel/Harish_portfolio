import React from "react";
import { BrowserRouter, Route, Routes ,N} from "react-router-dom";
import Features from "../Pages/Features/Features";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";


function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/portfolio" element={<Portfolio />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
