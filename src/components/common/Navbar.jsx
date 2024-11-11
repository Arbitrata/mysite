import React, { useEffect, useState } from "react";
import { goToTop, handleScroll } from "./ScrollToTop";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentPath = window.location.pathname;

  const links = [
    {
      to: "about",
      position: "start",
      label: "About",
      disabled: currentPath === "/contact",
    },
    {
      to: "expertise",
      position: "start",
      label: "Expertise",
      disabled: currentPath === "/contact",
    },
    {
      to: "projects",
      position: "start",
      label: "Projects",
      disabled: currentPath === "/contact",
    },
    {
      to: "/contact",
      position: "start",
      label: "Contact",
      navigate: true,
    },
  ];

  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem("activeLink");
    return savedLink ? JSON.parse(savedLink) : links[0];
  });

  const navigate = useNavigate();

  const handleClick = (link) => {
    localStorage.setItem("activeLink", JSON.stringify(link));
    handleScroll(link.to, link.position, 100);
    setActiveLink(link);
  };

  const handleContactPage = (link) => {
    localStorage.setItem("activeLink", JSON.stringify(link));
    navigate(link.to);
    setActiveLink(link);
    goToTop();
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
    <main className="h-[70px] justify-between md:px-[60px] fixed top-0 bg-gradient-to-b from-[rgba(15,23,42,0.9)] from-35% via-[rgba(15,23,42,0.7)] to-[rgba(15,23,42)] lg:w-full w-screen z-50 items-center flex">
      <ul
        className={`flex space-x-8 lg:py-0 py-14 w-[100%] place-content-center transition-all duration-300 lg:static fixed lg:justify-center`}
      >
        {links.map((link) => (
          <li
            key={link.to}
            className={`cursor-pointer rounded-full text-[13px] font-medium ${
              activeLink.to === link.to
                ? "text-greenblue"
                : link.disabled
                ? "lg:text-grayish text-grayish cursor-default"
                : "lg:text-white text-white"
            }`}
            onClick={
              link.navigate
                ? () => handleContactPage(link)
                : () => handleClick(link)
            }
          >
            {link.label}
            <hr
              className={`transition-all duration-300 ${
                activeLink.to === link.to
                  ? "w-1/1 border border-greenblue"
                  : link.disabled
                  ? "w-1/5 border lg:border-grayish border-grayish"
                  : "w-1/5 border lg:border-white border-white"
              }`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Navbar;
