import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { Home } from "./components/pages/Home";
import Footer from "./components/common/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
