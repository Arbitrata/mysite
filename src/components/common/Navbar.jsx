import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = ({}) => {
  const links = [
    {
      to: "/",
    },
    {
      to: "about",
      label: "About",
    },
    {
      to: "work",
      label: "Work",
    },
    {
      to: "projects",
      label: "Projects",
    },
  ];

  const [open, setOpen] = useState(false);

  const activeLink =
    "text-[14.22px] text-blue md:font-medium font-bold cursor-pointer";
  return (
    <nav className="h-[105px] justify-between px-[94px] fixed top-0 bg-darkblue w-full z-50 items-center flex">
      <div className="w-fit h-full grid place-content-center">
        <img src="lg.jpg" className="h-[80px]" />
      </div>
      <ul
        className={`md:flex place-content-center transition-all duration-200 md:static absolute lg:justify-end items-center ${
          open
            ? "top-[90.89px] right-[33px] lg:py-0 py-4"
            : "right-[-400px] md:opacity-100 top-[90.89px]"
        }`}
      >
        {links.map((link) => (
          <li key={link.to} className="text-left font-poppins px-6 md:mt-0 mt-3">
            <Button link={true} text={link.label} styling={"text-lightgray hover:text-greenblue"} />
          </li>
        ))}
         <li className=" w-[200px] sm:pl-4 h-full grid place-content-center">
        <Button button={true} text={"Say hello"} />
      </li>
      </ul>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden visible md:pl-0 pl-4 text-green"
      >
        {open ? <BiX size={30} /> : <BiMenu size={35} />}
      </button>
    </nav>
  );
};

export default Navbar;
