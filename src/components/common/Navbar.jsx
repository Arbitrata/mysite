import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "./Button";
import { handleScroll } from "./ScrollToTop";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const links = [
    {
      to: "about",
      position: "start",
      label: "About",
    },
    {
      to: "expertise",
      position: "start",
      label: "Expertise",
    },
    {
      to: "projects",
      position: "start",
      label: "Projects",
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem("activeLink");
    return savedLink ? JSON.parse(savedLink) : links[0];
  });

  const handleClick = (link) => {
    localStorage.setItem("activeLink", JSON.stringify(link));
    handleScroll(link.to, link.position, 100);
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScrollUpdate = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = links.find((l) => l.to === entry.target.id);
          if (link) {
            setActiveLink(link);
            localStorage.setItem("activeLink", JSON.stringify(link));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollUpdate, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    links.forEach((link) => {
      const section = document.getElementById(link.to);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-[70px] justify-between md:px-[60px] px-6 fixed top-0 bg-gradient-to-b from-[rgba(15,23,42,0.9)] from-35% via-[rgba(15,23,42,0.7)] to-[rgba(15,23,42)] lg:w-full w-screen z-50 items-center flex">
      <ul
        className={`lg:flex block lg:space-x-8 lg:py-0 py-14 w-[100%] lg:place-content-center transition-all duration-300 lg:static fixed lg:justify-center ${
          open
            ? "left-0 top-0 lg:w-full w-[50%] lg:h-fit h-screen z-50 px-4 lg:space-y-0 bg-iceblue bg-opacity-100 lg:bg-opacity-0 space-y-6 rounded-b-md lg:py-0"
            : "-left-[100%] top-0 lg:left-0 lg:h-fit h-screen rounded-b-md"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden visible text-blackBg rounded-full p-2 bg-grayish absolute right-4 top-4"
        >
          <BiX size={30} />
        </button>
        {links.map((link) => (
          <li
            key={link.to}
            className={`cursor-pointer rounded-full font-semibold ${
              activeLink.to === link.to
                ? "text-greenblue"
                : "lg:text-white text-blackBg opacity-60"
            }`}
            onClick={() => handleClick(link)}
          >
            {link.label}
            <hr
              className={`transition-all duration-300 ${
                activeLink.to === link.to
                  ? "w-1/1 border border-greenblue"
                  : "w-1/5 border lg:border-white border-blackBg"
              }`}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden visible lg:pr-0 pr-4 text-greenblue"
      >
        <BiMenu size={35} />
      </button>
    </main>
  );
};

export default Navbar;
