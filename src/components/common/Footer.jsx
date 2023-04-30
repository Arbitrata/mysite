import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

function Footer() {
  const socialLinks = [
    { icon: <BsFacebook size={20} />, link: "/", label: "Facebook" },
    { icon: <BsInstagram size={20} />, link: "/", label: "Instagram" },
    { icon: <BsTwitter size={20} />, link: "/", label: "Twitter" },
    { icon: <BsLinkedin size={20} />, link: "/", label: "LinkedIn" },
    { icon: <BsGithub size={20} />, link: "/", label: "Github" },
  ];

  return (
    <footer className="pt-[70px] bg-darkblue h-fit w-full">
      <div className="mx-auto w-full max-w-screen-xl grid place-content-center p-4 py-6 lg:py-8">
        <div className="grid place-content-center w-full h-fit">
          <img src="andy-logo.png" className="h-[104px] bg-lightgray w-auto" />
        </div>
        <h1 className="font-poppins text-center my-[35px] text-[22px] text-lightgray">
          Living, learning, & leveling up <br /> one day at a time.
        </h1>

        <div className="w-full h-100px gap-6 justify-center">
          <ul className="flex gap-4 w-full justify-between">
            {socialLinks.map((link) => (
              <li className="p-4 text-greenblue border border-greenblue hover:bg-blue/20 hover:text-white cursor-pointer rounded-full">
                <a href={link.link}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-poppins text-center my-[35px] text-[18px] text-lightgray">
          Handcoded by me © andrewmbugua
        </h1>
        <span className="w-full text-center text-lightgray font-medium">
          all rights reserved @ndrew 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
