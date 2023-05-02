import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  const socialLinks = [
    {
      icon: <BsFacebook size={20} />,
      link: "https://www.facebook.com/profile.php?id=100083791382825",
      label: "Facebook",
    },
    {
      icon: <BsInstagram size={20} />,
      link: "https://www.instagram.com/andy_andrew76/",
      label: "Instagram",
    },
    {
      icon: <BsTwitter size={20} />,
      link: "https://twitter.com/AndrewMbugua19",
      label: "Twitter",
    },
    {
      icon: <BsLinkedin size={20} />,
      link: "https://www.linkedin.com/in/andrew-mbugua-04a575237/",
      label: "LinkedIn",
    },
    {
      icon: <BsGithub size={20} />,
      link: "https://github.com/Arbitrata",
      label: "Github",
    },
    {
      icon: <BsWhatsapp size={20} />,
      link: "https://wa.me/+254700463499?text= Hello Andrew,",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="pt-[70px] bg-darkblue h-fit w-full">
      <div className="mx-auto w-full max-w-screen-xl grid place-content-center p-4 py-6 lg:py-8">
        <div className="grid place-content-center w-full h-fit">
          <img src="andy-logo.png" className="h-[104px] bg-lightgray w-auto" />
        </div>
        <h1 className="font-poppins text-center my-[35px] text-[22px] text-lightgray">
          Taking things one day at a time, <br /> I am constantly living,
          learning, and leveling up
        </h1>

        <div className="w-full h-100px gap-6 justify-center">
          <ul className="flex gap-4 w-full justify-between">
            {socialLinks.map((link) => (
              <li key={Math.random()} className="lg:p-4 p-2 text-greenblue border border-greenblue hover:bg-blue/20 hover:text-white cursor-pointer rounded-full">
                <a href={link.link} target="_blank">{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-poppins text-center my-[35px] text-[18px] text-lightgray">
          All Rights Reserved © Andrew 2023
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
