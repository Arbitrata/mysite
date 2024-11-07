import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

export default function EntryPage() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const landingPageHeight = window.innerHeight * 0.75; // 3/4 of screen height

      // Toggle navbar visibility based on scroll position
      if (scrollPosition > landingPageHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      {showNavbar && <Navbar />}
      <div className="w-full relative">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
