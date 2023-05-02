import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "./Button";
import { handleScroll } from "./ScrollToTop";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const links = [
    {
      to: "/",
    },
    {
      to: "about",
      position: "end",
      label: "Introduction",
    },
    {
      to: "mywork",
      position: "start",
      label: "Worked Projects",
    },
    {
      to: "startUp",
      position: "nearest",
      label: "StartUp Projects",
    },
  ];

  const [open, setOpen] = useState(false);
  const { renderText, setActiveText, setActiveForm } = props;

  return (
    <nav className="lg:h-[105px] h-[70px] justify-between lg:px-[94px] lg:fixed top-0 bg-white lg:w-full w-screen z-50 items-center flex">
      <div className="w-fit h-full grid place-content-center">
        <img
          src="andy-logo.png"
          className="lg:h-[90px] lg:pl-0 pl-4 h-[50px]"
        />
      </div>
      <ul
        className={`lg:flex block lg:gap-y-0 gap-y-4 lg:pb-0 pb-10 lg:w-auto w-[100%] place-content-center transition-all duration-300 lg:static absolute lg:justify-end items-center ${
          open
            ? "top-[70px] bg-white text-greenblue z-50 rounded-b-md grid place-content-center lg:py-0"
            : " -top-[400px] rounded-b-md grid place-content-center"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.to}
            onClick={() => setOpen(false)}
            className={`text-left font-poppins px-6 lg:mt-0 mt-3
            `}
          >
            <Button
              link={true}
              onClick={() => handleScroll(link.to, link.position, 100)}
              text={link.label}
              styling={"text-darkblue hover:text-blue"}
            />
          </li>
        ))}
        <li className="lg:w-[200px] h-full grid place-content-center">
          <Link to={"contact"}>
            <Button
              button={true}
              onClick={() =>
                renderText("sayHello", setActiveText, setActiveForm)
              }
              text={"Say hello"}
              styling={"bg-darkblue"}
            />
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden visible lg:pr-0 pr-4 text-greenblue"
      >
        {open ? <BiX size={30} /> : <BiMenu size={35} />}
      </button>
    </nav>
  );
};

export default Navbar;
