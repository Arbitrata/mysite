import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { FloatButton } from "antd";
import { MailFilled, PhoneFilled } from "@ant-design/icons";
import { MdUnfoldMore } from "react-icons/md";
import { SiMedium, SiUpwork } from "react-icons/si";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

function SocialLinksFloatButton({ socialLinks }) {
  return (
    <FloatButton.Group
      trigger="click"
      placement="top"
      type="primary"
      icon={<MdUnfoldMore />}
      style={{
        zIndex: 1000,
      }}
    >
      {socialLinks.map(({ icon, link, text }, index) => (
        <FloatButton
          key={index}
          icon={icon}
          type="secondary"
          className="bg-white"
          onClick={() => window.open(link, "_blank", "noopener noreferrer")}
          tooltip={text}
        />
      ))}
    </FloatButton.Group>
  );
}

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

  const socialLinks = [
    {
      icon: <BsLinkedin size={22} />,
      link: "https://www.linkedin.com/in/andrew-irungu-04a575237/",
      text: "LinkedIn",
    },
    {
      icon: <BsGithub size={22} />,
      link: "https://github.com/Arbitrata",
      text: "Github",
    },
    {
      icon: <SiMedium size={22} />,
      link: "https://medium.com/@andyirungu",
      text: "Medium",
    },
    {
      icon: <BsWhatsapp size={22} />,
      link: "https://wa.me/+254700463499?text= Hello Andrew,",
      text: "Whatsapp",
    },
    {
      icon: <BsTwitter size={22} />,
      link: "https://x.com/arbitrata",
      text: "X",
    },
    {
      icon: <BsInstagram size={22} />,
      link: "https://www.instagram.com/_andy.irungu/",
      text: "Instagram",
    },
    {
      icon: <BsFacebook size={22} />,
      link: "https://www.facebook.com/profile.php?id=100083791382825",
      text: "Facebook",
    },
    {
      icon: <SiUpwork size={22} />,
      link: "https://www.upwork.com/freelancers/~01a1300c6f5b2ac3f2",
      text: "Upwork",
    },
    // {
    //   icon: "Fivver",
    //   link: "https://github.com/Arbitrata",
    //   text: "Fivver",
    // },
  ];

  const currentPath = window.location.pathname;

  return (
    <main>
      {showNavbar && currentPath === "/" && (
        <div className="lg:flex hidden">
          <Navbar />
        </div>
      )}
      {currentPath === "/contact" && (
        <div className="lg:flex hidden">
          <Navbar />
        </div>
      )}
      {
        <div className="w-full h-fit lg:hidden visible">
          <Navbar />
        </div>
      }
      <div className="w-full relative">
        <Outlet />
        <div className="w-fit h-fit">
          <div className="flex lg:hidden">
            <SocialLinksFloatButton socialLinks={socialLinks} />
          </div>
          {showNavbar && currentPath === "/" && (
            <div className="flex">
              <SocialLinksFloatButton socialLinks={socialLinks} />
            </div>
          )}
          {currentPath === "/contact" && (
            <div className="flex">
              <SocialLinksFloatButton socialLinks={socialLinks} />
            </div>
          )}
          <FloatButton.Group
            shape="circle"
            style={{
              position: "fixed",
              insetInlineEnd: 4,
              bottom: "20%",
              right: 24,
              zIndex: 900,
            }}
          >
            <FloatButton
              icon={<MailFilled />}
              type="secondary"
              className="bg-[#BB001B] text-white"
              tooltip={<div>Send email</div>}
              href="mailto:andyafreelancer@gmail.com"
            />
            <FloatButton
              icon={<PhoneFilled />}
              type="secondary"
              className="bg-[#A4C639] text-white"
              tooltip={<div>Phone Call</div>}
              href="tel:+254700463499"
            />
          </FloatButton.Group>
        </div>
      </div>
      <Footer />
    </main>
  );
}
