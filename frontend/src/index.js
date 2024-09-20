import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./LandingPages/Home/HomePage";
import "./index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Courses from "./LandingPages/Courses/Hero";
import Batch from "./LandingPages/Mybatch/Hero";
import Login from "./LandingPages/Login/Login";
import Signup from "./LandingPages/Login/Signup";
import Privacy from "./LandingPages/Help/Privacy";
import Terms from "./LandingPages/Help/Terms";
import Refund from "./LandingPages/Help/Refund";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/batch" element={<Batch/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/refund" element={<Refund/>}/>
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
