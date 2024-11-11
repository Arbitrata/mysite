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
    <footer className="relative h-fit">
      <div className="relative top-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#64ffda"
            fillOpacity="1"
            d="M0,160L18.5,170.7C36.9,181,74,203,111,186.7C147.7,171,185,117,222,117.3C258.5,117,295,171,332,181.3C369.2,192,406,160,443,165.3C480,171,517,213,554,213.3C590.8,213,628,171,665,149.3C701.5,128,738,128,775,149.3C812.3,171,849,213,886,208C923.1,203,960,149,997,138.7C1033.8,128,1071,160,1108,160C1144.6,160,1182,128,1218,122.7C1255.4,117,1292,139,1329,138.7C1366.2,139,1403,117,1422,106.7L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute lg:h-full min-h-full h-fit w-full grid place-content-center top-0 left-0 z-10 bg-gradient-to-b from-[rgba(15,23,42,0.9)] from-35% via-[rgba(15,23,42,0.7)] to-[rgba(15,23,42)]">
        <p className="text-white mx-auto text-center lg:py-0 py-6 lg:w-[50%] md:w-[70%] w-[80%] md:text-[15px] text-[14px] font-light font-roboto">
          Designed in Figma, crafted with care in Visual Studio Code. Built
          using React.js and Tailwind CSS, seamlessly deployed on Netlify.
          Typography set in the sleek and modern Inter typeface.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
