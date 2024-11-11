import React, { useEffect, useState } from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { handleScroll } from "../common/ScrollToTop";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SiMedium, SiUpwork } from "react-icons/si";
import {
  MdNavigateBefore,
  MdNavigateNext,
} from "react-icons/md";
import { ContactForm, Counter, ExpertiseCard } from "../common";
import { Tooltip, Button } from "antd";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";

export default function LandingPage() {
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
    {
      to: "contact",
      position: "start",
      label: "Contact",
      hidden: true,
    },
  ];

  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem("activeLink");
    return savedLink ? JSON.parse(savedLink) : links[0];
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1280: { items: 3 },
  };

  const handleClick = (link) => {
    localStorage.setItem("activeLink", JSON.stringify(link));
    handleScroll(link.to, link.position, 100);
    setActiveLink(link);
  };

  const handleContactSection = (to, position) => {
    localStorage.setItem("activeLink", JSON.stringify(links[3]));
    handleScroll(to, position, 100);
    setActiveLink(links[3]);
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

  const expertiseList = [
    {
      title: "Full-Stack Software Development",
      description:
        "Develop scalable and robust apps, from backend APIs to frontend user experiences.",
      coverImage: ["fwd.webp", "fwd1.webp"],
      skills: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "React",
        "Redux",
        "Next.js",
        "Html & CSS",
        "Tailwind CSS",
        "WebSockets",
        "MongoDB",
        "SQL",
        "REST APIs",
        "GraphQL",
        "Git",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Specializing in creating visually appealing and user-centered designs. Focused on intuitive interfaces and delightful user experiences.",
      coverImage: [
        "uiux.png",
        "ui-vs-ux.png",
        "UI-UX-Design.jpg",
        "https://images.unsplash.com/photo-1660806982611-0a41c0527966?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      skills: [
        "Adobe XD",
        "Figma",
        "Sketch",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Responsive Design",
        "Usability Testing",
      ],
    },
    {
      title: "WordPress Development",
      description:
        "Create custom WordPress solutions, from company sites to WooCommerce stores.",
      coverImage: [
        "wp2.jpg",
        "https://images.unsplash.com/photo-1678690832871-8b9993c76aa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "wp1.jpg",
      ],
      skills: [
        "WooCommerce",
        "Elementor",
        "Custom Themes",
        "Plugins",
        "SEO Optimization",
        "Responsive Design",
        "Site Performance",
        "Content Management",
        "Security Enhancements",
      ],
    },
    {
      title: "E-commerce Development",
      description:
        "Build high-performing online stores with seamless integrations and secure payments.",
      coverImage: ["ecommerce.png", "E-cd.jpg", "e-c1.jpg"],
      skills: [
        "WooCommerce",
        "Shopify",
        "Prestashop",
        "Magento",
        "Payment Gateways",
        "Inventory Management",
        "SEO for E-commerce",
        "Custom UX/UI Design",
      ],
    },
    {
      title: "Digital Marketing and Branding",
      description:
        "Strategizing and executing digital marketing campaigns to enhance brand visibility and drive targeted traffic.",
      coverImage: ["dm.avif", "brand.jpg", "brand.webp"],
      skills: [
        "Google Analytics",
        "SEO",
        "Content Marketing",
        "SMM",
        "Email Marketing",
        "Brand Identity",
        "PPC Campaigns",
        "Market Research",
      ],
    },
  ];

  const expertise = expertiseList.map((expertise) => (
    <div key={Math.random(100)} className="mx-1">
      <ExpertiseCard
        description={expertise.description}
        coverImages={expertise.coverImage}
        title={expertise.title}
        skills={expertise.skills}
      />
    </div>
  ));

  return (
    <div className="w-full h-fit min-h-screen">
      <div
        id="about"
        className=" w-full min-h-screen md:h-screen h-[1000px] relative flex flex-col"
      >
        <div className="w-full lg:h-screen h-full min-h-screen  overflow-hidden absolute top-0">
          <img
            src="bg-port.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full absolute top-0 lg:h-screen h-full bg-gradient-to-b from-[rgba(15,23,42,0.9)] from-35% via-[rgba(15,23,42,0.7)] to-[rgba(15,23,42)] flex ">
          <div className="w-full lg:h-screen min-h-screen max-h-[700px] h-fit lg:flex lg:flex-row flex-col justify-center md:block mx-auto 2xl:max-w-[1600px] lg:py-[80px] py-[50px] lg:pt-8 pt-[80px] lg:px-[120px] md:px-[60px] px-6 leading-relaxed">
            <div className="lg:w-2/5 w-full flex flex-col justify-between relative">
              <div className="lg:space-y-3 md:space-y-12 space-y-6">
                <h1 className="xl:text-[55px] 2xl:text-[55px] md:text-[35px] sm:text-[33px] text-[35px] font-semibold text-white tracking-wide">
                  Andrew Irungu
                </h1>
                <p className="text-white xl:text-[20px] lg:text-[16px] md:text-[14px] text-[14px] font-normal tracking-wide">
                  Software Engineer / UI & UX Designer
                </p>
                <p className="text-grayish lg:max-w-[100%] md:max-w-[70%] max-w-[99%] lg:text-[16px] md:text-[15px] text-[12px] font-light pr-[6%] font-roboto">
                  I craft seamless, high-performance software solutions that
                  drive user engagement and satisfaction.
                </p>
                <ul className="w-full h-fit list-none lg:pt-[8%] lg:pb-10 pb-4 md:pt-[4%] 2xl:space-y-6 space-y-3 md:flex hidden flex-col">
                  {links
                    .filter((link) => !link.hidden)
                    .map((link) => (
                      <li
                        key={link.to}
                        className={`cursor-pointer rounded-full text-[13px] font-medium ${
                          activeLink.to === link.to
                            ? "text-greenblue"
                            : "text-white opacity-60"
                        }`}
                        onClick={() => handleClick(link)}
                      >
                        {link.label}
                        <hr
                          className={`transition-all duration-300 ${
                            activeLink.to === link.to
                              ? "w-1/3 border border-greenblue"
                              : "w-1/5 border border-white"
                          }`}
                        />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="lg:absolute bottom-0 lg:mt-0 mt-12 w-full lg:flex hidden">
                <ul className="flex gap-x-4 w-full">
                  {socialLinks.map((link) => (
                    <li
                      key={Math.random()}
                      className="text-grayish hover:text-greenblue font-bold text-[16px] cursor-pointer rounded-full"
                    >
                      <Tooltip placement="top" title={link.text}>
                        <a href={link.link} target="_blank">
                          {link.icon}
                        </a>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-3/5 h-full w-full flex flex-col lg:pl-[10%] lg:pt-6 pt-6 relative">
              <li
                className={`cursor-pointer list-none rounded-full text-[13px] font-medium text-greenblue mb-6 lg:hidden flex flex-col`}
              >
                {"About"}
                <hr
                  className={`transition-all duration-300 w-1/3 border border-greenblue`}
                />
              </li>
              <p className="text-grayish md:text-[14px] text-[13px]  2xl:text-[20px] font-roboto">
                In 2022, I ventured into software development and quickly
                discovered a passion for building user-centric applications.
                Since then, I’ve worked with a variety of sectors, including
                startups and tech companies, creating responsive front-end
                solutions and robust back-end systems. Now, as a freelancer, I
                focus on delivering seamless digital experiences with tools like
                React, Vue.js, Node.js, and Express, crafting scalable,
                high-performance solutions tailored to my clients' needs. <br />
                <br /> I enjoy turning complex requirements into intuitive
                applications that balance design and performance. When not
                coding, I stay updated on tech trends or unwind with a good book
                or outdoor activities.
              </p>
              <div className="h-fit font-roboto lg:absolute bottom-0 lg:mt-0 mt-[40px] flex flex-grow lg:justify-center justify-center">
                <Button
                  type="secondary"
                  onClick={() => handleContactSection("contact", "start")}
                  icon={
                    <span className="relative flex">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-greenblue opacity-25"></span>
                      <VerticalAlignBottomOutlined className="relative inline-flex text-sky-500" />
                    </span>
                  }
                  iconPosition={"end"}
                  className="rounded-full border py-6 px-12 border-white text-white text-[14px] font-medium"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="expertise"
        className="w-full h-fit relative bg-gradient-to-b from-[rgba(15,23,42)] to-[rgba(15,23,42)]"
      >
        <div className="w-full h-fit py-10">
          <h1 className="xl:text-[55px] 2xl:text-[55px] md:text-[35px] sm:text-[33px] text-[35px] font-semibold text-white tracking-wide text-center">
            My Expertise
          </h1>
          <div className="w-full h-fit mx-auto 2xl:max-w-[1600px] lg:py-[50px] py-[40px] lg:px-[120px] md:px-[60px] px-6">
            <AliceCarousel
              autoPlayInterval={2000}
              infinite={true}
              responsive={responsive}
              items={expertise}
              autoPlay={false}
              disableDotsControls={false}
              disableButtonsControls={false}
              paddingLeft={0}
              paddingRight={0}
              renderPrevButton={({ isDisabled }) => (
                <button
                  type="button"
                  className={`absolute top-1/2 transform -translate-y-1/2 -left-4 text-greenblue bg-blackBg rounded-full p-2 ${
                    isDisabled ? "opacity-50" : "opacity-100"
                  }`}
                  disabled={isDisabled}
                >
                  <MdNavigateBefore size={20} />
                </button>
              )}
              renderNextButton={({ isDisabled }) => (
                <button
                  type="button"
                  className={`absolute top-1/2 transform -translate-y-1/2 -right-4 text-greenblue bg-blackBg rounded-full p-2 ${
                    isDisabled ? "opacity-50" : "opacity-100"
                  }`}
                  disabled={isDisabled}
                >
                  <MdNavigateNext size={20} />
                </button>
              )}
            />
          </div>
        </div>
      </div>
      <div id="projects" className="w-full h-fit bg-iceblue">
        <div className="w-full h-full md:flex justify-center items-center mx-auto 2xl:max-w-[1600px] lg:py-[60px] py-[40px] lg:px-[120px] md:px-[60px] px-6">
          <div className="md:w-1/2 h-fit md:space-y-12 space-y-6">
            <h1 className="xl:text-[55px] 2xl:text-[55px] md:text-[35px] sm:text-[33px] text-[35px] font-semibold text-black tracking-wide text-left">
              My Work
            </h1>
            <h3 className="text-black opacity-60 md:text-[14px] text-[12px lg:text-[16px] 2xl:text-[20px] font-normal tracking-wide font-roboto">
              I’ve built and deployed scalable applications using React,
              Next.js, Node.js, and PostgreSQL, ranging from e-commerce
              platforms to management systems. With over 15+ solo projects and
              10+ team collaborations, I’ve delivered efficient, visually
              appealing solutions for 10+ clients across various industries.
              Each project drives me to craft intuitive, high-performance
              applications and explore innovative ways to enhance user
              experience.
            </h3>
            <div className="w-full h-fit grid grid-cols-3 gap-6">
              <Counter label={"Projects"} start={10} end={25} />
              <Counter label={"Clients"} start={3} end={10} />
            </div>
          </div>
          <div className="md:w-1/2 h-full flex justify-center items-center md:mt-0 mt-12">
            <div
              className="relative w-full h-full bg-no-repeat bg-contain bg-center"
              style={{
                backgroundImage: `url('/smart.svg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "400px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full h-fit relative mx-auto 2xl:max-w-[1600px] overflow-hidden lg:py-[80px] py-[40px] lg:px-[120px] md:px-[60px] px-6 space-y-6"
      >
        <ContactForm />
      </div>
    </div>
  );
}
