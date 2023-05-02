import React from "react";
import Button from "../common/Button";
import { Cards } from "../common/Cards";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BiCodeBlock, BiSitemap } from "react-icons/bi";
import { handleScroll } from "../common/ScrollToTop";
import Navbar from "../common/Navbar";
import { Link } from "react-router-dom";
import { GoBrowser, GoProject, GoRepo } from "react-icons/go";
import { GiBrainstorm, GiSkills } from "react-icons/gi";
import { FaEye, FaRunning, FaServer } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { MdDeveloperMode } from "react-icons/md";

export const Hero = () => {
  return (
    <div
      id="home"
      className="h-fit pb-[118px] lg:px-[94px] px-4 w-full lg:pt-[100px] pt-[100px] relative overflow-hidden"
    >
      <div className="lg:text-[60px] text-[30px] text-darkblue font-poppins capitalize lg:mt-[48px]">
        <h1>Andrew Mbugua.</h1>
        <h1>I build things for the web.</h1>
      </div>
      <p className="lg:w-[820px] w-[100%] lg:text-[22px] text-md mt-2 font-poppins">
        As a passionate software developer, I have extensive experience in
        designing and developing high-quality digital products. My focus is on
        creating accessible and human-centered software solutions that are
        optimized for performance, reliability, and scalability.
      </p>

      <div className="w-fit h-fit mt-10">
        <Button
          button={true}
          onClick={() => handleScroll("mywork", "start")}
          text={"Checkout My Work"}
          styling={
            "lg:h-[68px] lg:w-[243px] lg:static absolute right-4 bg-darkblue "
          }
        />
      </div>
    </div>
  );
};

export const Services = () => {
  const frontendSkills = [
    "Html",
    "CSS",
    "Wordpress",
    "Tailwinds CSS",
    "Bootstrap CSS",
    "Javascript",
    "ReactJs",
    "Figma",
    "Miro",
    "Learning *Outsystem* ",
  ];
  const backendSkills = [
    "NodeJs",
    "ExpressJs",
    "PostgreSQL",
    "mySQL",
    "MongoDB",
    "Heroku",
    "Node Package Manager",
  ];
  const otherSkills = [
    "Agile methodology",
    "Project management",
    "Data modelling",
    "UI/UX design",
    "Srum master",
    "Github",
    "Data Structures & Algorithms",
    "Slack Communication",
    "Jira",
  ];
  return (
    <div className="w-full relative lg:h-[800px] grid place-items-center lg:pb-[200px]">
      <div className="grid lg:grid-cols-3 lg:px-0 px-4 h-fit w-fit gap-1 place-items-center lg:absolute relative -top-[130px]">
        <Cards
          services={true}
          icon={<BiCodeBlock size={50} />}
          title={"Front End Development"}
          description={
            " I prioritize creating clean and simple user interfaces with intuitive navigation and easy-to-use design patterns."
          }
          todo={"VS code,Sublime Text, github,"}
          like={" Tools and skills:"}
          children={
            <>
              {frontendSkills.map((skill) => (
                <li key={skill} className="py-2 text-[16px] font-poppins">
                  {skill}
                </li>
              ))}
            </>
          }
        />
        <Cards
          services={true}
          icon={<FaServer size={50} />}
          title={"Backend Development"}
          description={
            " I place a strong emphasis on developing secure and scalable systems that meet the unique requirements of each project."
          }
          todo={"PostgreSQL (DBMs), API dev tool (Thunder Client && Postman)"}
          like={" Tools and skills: "}
          children={
            <>
              {backendSkills.map((skill) => (
                <li key={skill} className="py-2 text-[16px] font-poppins">
                  {skill}
                </li>
              ))}
            </>
          }
        />

        <Cards
          services={true}
          icon={<GiSkills size={50} />}
          title={"Technical, Managerial & communication"}
          description={
            "Experienced in Project management with strong communication skills and knowledge of Agile methodologies and Git."
          }
          like={
            " My interests extend beyond coding softwares, and I also enjoy"
          }
          children={
            <>
              {otherSkills.map((skill) => (
                <li key={skill} className="py-2 text-[16px] font-poppins">
                  {skill}
                </li>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="h-fit lg:static relative w-full">
      <div
        id="about"
        className="z-10 text-center bg-darkblue text-lightgray lg:px-[94px] px-4 lg:h-[500px] h-[600px]"
      >
        <h1 className="text-[29px] font-poppins pt-[50px]">
          Hello, my name is Andrew.
        </h1>
        <div className="w-full h-fit grid place-content-center">
          <p className="text-[18px] text-center font-poppins mt-[18px] lg:w-[768.31px] w-auto">
            Since my journey as a full-stack software engineer began, I have
            dedicated myself to building efficient, scalable, and user-friendly
            software solutions. With expertise in modern frameworks such as
            React and Node.js, I'm committed to delivering high-quality code and
            exceeding my clients' expectations. I approach every project with
            enthusiasm and a positive attitude, always looking for new
            technologies and methodologies to improve my skills and create
            better software.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export const MyWork = () => {
  const myProjects = [
    {
      name: "Ujenzi",
      description:
        "Responsive web application using React with a server-side component built with Node.js & a PostgreSQL database management system.",
      image: "ujenzi.png",
      link: "View repository",
      icon: <BiSitemap />,
      href: "https://github.com/Arbitrata/ujenzi-platform"
    },
    {
      name: "SasaQuote",
      stage: "development",
      description:
        "Web-only site using React and a RESTful API, ie the RapidAPI hub API, that generate new quotes every time the page is reloaded.",
      image: "sasaquote.png",
      link: "Browse site with a desktop",
      icon: <GoBrowser />,
      href: "https://arbitrata.github.io/sasakazi_test/"
    },
    {
      name: "stawi",
      stage: "production",
      description:
        "A Client project that is developed using the React framework and styled using Tailwind CSS.",
      image: "stawi.png",
      link: "view site",
      icon: <FaEye />,
      href: "https://stawifood.co.ke/"
    },
    {
      name: "Crud application",
      stage: "development",
      description:
        "Collaborated with a team member on GitHub to create and develop various features for a to-do application.",
      image: "crud.png",
      link: "view site",
      icon: <FaEye />,
      href: "https://arbitrata.github.io/masters-crud-application/"
    },
  ];

  return (
    <div
      id="mywork"
      className="w-full lg:h-fit h-fit lg:bg-none lg:bottom-0 lg:px-0 lg:py-10"
    >
      <div className="h-fit w-full font-poppins text-center py-6">
        <h1 className="font-poppins text-darkblue text-[23px]">
          My Recent Work
        </h1>
        <h1 className="text-black lg:px-0 px-4">
          I've previously worked on several projects which I would be happy to
          share with you?
          <a
            href="https://github.com/Arbitrata"
            className="text-blue pl-3 hover:underline font-semibold"
          >
            Are you interested in seeing more?
          </a>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:static relative gap-6 h-fit w-full lg:place-items-center lg:px-[10%] px-4 lg:py-[50px] py-10">
        {myProjects.map((project) => (
          <div key={Math.random(100)}>
          <Cards
            project={true}
            description={project.description}
            image={project.image}
            to={project.link}
            icon={project.icon}
            name={project.name}
            todo={project.href}
          /></div>
        ))}
      </div>
    </div>
  );
};

export const Partner = () => {
  return (
    <div className="w-full pb-12">
      <div className="w-full h-fit py-14 text-center grid place-content-center">
        <h1 className="w-[580.72px] text-[28px] font-poppins">
          I'm proud to have collaborated with some awesome companies:
        </h1>
      </div>

      <div className="grid grid-cols-3 h-[107.78px] my-10 w-full px-[10%] gap-1">
        <div className="w-full h-full grid place-content-center  border-r border-greenblue">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3L1jxvJ1LaQ2i4Admni7aMEVHZsL_VVilC2KaqLZ30A&s" />
        </div>

        <div className="w-full h-full grid place-content-center border-r border-greenblue">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCx2IvG-xP4kxeWwVR4h_I9gJ6Mz0GKr_fkKGH17t5mQ&s"
            alt="stawi foods logo"
            className="h-full"
          />
        </div>
        <div className="w-full h-full grid place-content-center ">
          <img src="" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = () => {
  const startUpsProjects = [
    {
      name: "Agency",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhK1L3yByF5eaC7grNTEzprSiMyKwMiRD5g&usqp=CAU",
      description:
        "Maximize success by strengthening online presence and leveraging strategic advantages",
      stage: "Executing",
      icon: <FaRunning />,
      style: "bg-greenblue",
    },
    {
      name: "Ujenzi platform",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wsSC41vAExPH4FAfTZCRYmllsmMRsXruGw&usqp=CAU",
      description:
        "An online facilitation platform that streamlines the procurement process of acquiring materials.",
      stage: "in development",
      icon: <MdDeveloperMode />,
      style: "bg-lightgray",
    },
    {
      name: "E-eco-warrior",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTITCBuLl_V9cYMavW5MEJSO9-10RGKtm6p4IQGzXklxs94cLvowJVRgd7_Lz4GB8c_U&usqp=CAU",
      description:
        "sophisticated digital framework that integrates a vast array of environmental variables and factors",
      stage: "validating idea",
      icon: <FcIdea />,
      style: "bg-greenblue bg-opacity-20",
    },
    {
      name: "Farmerspace",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn89ThypG3ohjtX6vzMAxMTSWlTOJIs2TCYA&usqp=CAU",
      description:
        "A digital space designed simply and efficiently for farmers",
      stage: "validating idea",
      icon: <FcIdea />,
      style: "bg-greenblue bg-opacity-20",
    },
  ];

  return (
    <div className="w-full absolute lg:h-fit mb-11 grid grid-rows-4 place-items-center pb-[400px] lg:pb-[200px]">
      <div className="grid lg:grid-cols-3 h-fit w-fit gap-6 lg:px-0 px-4 place-items-center absolute -top-[130px]">
        {startUpsProjects.map((startUpProject) => (
          <div key={Math.random(200)}>
          <Cards
            startUp={true}
            name={startUpProject.name}
            description={startUpProject.description}
            image={startUpProject.image}
            icon={startUpProject.icon}
            styling={startUpProject.style}
            title={startUpProject.stage}
          /></div>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="lg:h-[1000px] h-[1800px] lg:static relative w-full mt-10 py-10">
      <div
        id="startUp"
        className="z-10 text-center bg-darkblue text-lightgray lg:px-[94px] px-4 lg:h-[469px] h-[550px]"
      >
        <h1 className="text-[29px] font-poppins pt-[49px]">
          My Startup Projects and Notions.
        </h1>
        <div className="w-full h-fit grid place-content-center">
          <p className="text-[18px] text-center font-normal mt-[17px] lg:w-[768.31px]">
            As an imaginative developer, I've recognized various problems and
            limitations within society and the technological sphere. My
            experience interacting with various virtual systems inspired me to
            transition my skills and pursue innovative solutions, leading me to
            generate several startup ideas that could benefit society.
          </p>
        </div>
      </div>
      <ProjectCard />
    </div>
  );
};

export const CallToAction = (props) => {
  const { renderText, setActiveForm, setActiveText } = props;
  return (
    <div className="w-full h-[400px] lg:px-[10%] px-4 relative lg:bottom-0 grid place-content-cente">
      <div className="lg:w-[500px] w-[200px] z-0 lg:-left-[250px] -left-[170px] bottom-0 h-[300px] skew-x-6 bg-gradient-to-tr to-lightgray from-darkblue absolute rounded-full"></div>
      <div className="py-8 px-4 z-20 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-[23px] tracking-tight font-poppins mt-8 leading-tight text-darkblue dark:text-white">
            Interested in collaborating with me?
          </h2>
          <p className="my-[25px] font-poppins text-[18px] ">
            I'm always open to having conversations about product design,
            software development work, or exploring potential collaboration and
            partnership opportunities.
          </p>
          <Link to={"contact"}>
            <Button
              link={true}
              onClick={() =>
                renderText("discussStartup", setActiveText, setActiveForm)
              }
              icon={<GiBrainstorm size={30} />}
              styling={
                "text-greenblue border hover:bg-greenblue hover:text-darkblue  border-greenblue bg-darkblue py-2 px-4 rounded-full"
              }
              text={"Brainstorm startup concept"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Testinoinials = () => {
  const slideshow = [
    {
      name: "Josephine Wairimu",
      title: "Product designer",
      image:
        "https://media.licdn.com/dms/image/C4E03AQFiP9my7PDd6g/profile-displayphoto-shrink_200_200/0/1650316273970?e=1687996800&v=beta&t=75NA77VCt_e-v0d1dpyEhTmpYakKkKqA1Gvd1KbfLQc",
      text: "I have been working with Andrew since January 2022 in an apprenticeship program and his expertise and professionalism are evident throughout the development cycle, and am all the team members are very pleased with the final product that he produced. He has shown enormous skill and vast domain knowledge and his software development expertise is reliable and trustworthy. I would recommend Andrew to anyone looking for quality Software development services, delivered in a professional manner.",
    },
    {
      name: "Alex Mwangi",
      title: "Product designer",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHxauh2UgkiRw/profile-displayphoto-shrink_200_200/0/1666429101465?e=1687996800&v=beta&t=EC7aOcPhsvInqR0A-AL8jLf58PMD0MpD7IrUPOxG3og",
      text: "I had a chance to interact and work with andrew at Apprentice Cloud with Andrew who is a self motivated and result driven individual who is committed to delivering the best results.",
    },
    {
      name: "Timothy munene",
      title: "Software Developer",
      image:
        "https://media.licdn.com/dms/image/C4D03AQFr-SHfP6b2ng/profile-displayphoto-shrink_800_800/0/1650641966669?e=1687996800&v=beta&t=L9IrMABdyzXL_v2C6UyIyXs-XQ466nt_MjcNn7ys96U",
      text: "I've known Andrew for almost a year and have found him to be hardworking, goal-oriented, tenacious, and an achiever. I believe that his academic credentials and technical skills will be extremely valuable to you as a client and to your company.",
    },
  ];

  return (
    <div className="w-full lg:h-[650px] h-fit lg:pb-0 pb-[100px] overflow-hidden relative">
      <div className="w-full h-fit grid place-content-center text-center text-darkblue py-[30px] gap-y-4">
        <h1 className="text-[27px] font-poppins">Testimonials</h1>
        <p className="text-[22px] font-poppins ">
          People I've worked with have said some nice things...
        </p>
      </div>

      <div className="lg:w-[500px] w-[200px] z-0 lg:-right-[350px] -right-[170px] bottom-0 h-[300px] lg:skew-x-12 skew-x-6 bg-gradient-to-tr to-lightgray from-darkblue absolute rounded-full"></div>

      <div className="lg:mx-[6%]">
        <Fade>
          {slideshow.map((testimonial) => (
            <div key={Math.random(300)}>
            <Cards
              image={testimonial.image}
              testimonial={true}
              title={testimonial.title}
              name={testimonial.name}
              description={testimonial.text}
            /></div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export const LastSection = (props) => {
  const { setActiveForm, setActiveText, renderText } = props;
  return (
    <div className="w-full relative lg:h-[150px] lg:pb-0 pb-10 lg:mt-0 mt-[100px] h-auto lg:px-[10%] px-4">
      <div className="lg:w-[1084px] grid lg:grid-cols-4 grid-cols-1 justify-center lg:absolute -bottom-20 lg:h-[166px] h-[400px] rounded-[12px] bg-black">
        <div className="text-[30px] text-lightgray font-poppins h-full items-center w-full grid place-content-center text-center col-span-1">
          Start a project
        </div>
        <div className="text-[17px] px-10 text-lightgray font-poppins h-full items-center grid place-content-center text-center col-span-2">
          Would you be interested in collaborating together? We can schedule a
          time to have a chat, and I'll treat you to coffee.
        </div>
        <div className="text-[30px] h-full items-center w-full grid place-content-center  col-span-1">
          <Link to={"contact"}>
            <Button
              link={true}
              icon={<GoProject size={25} />}
              onClick={() =>
                renderText("startProject", setActiveText, setActiveForm)
              }
              styling={
                "text-greenblue hover:bg-greenblue hover:text-darkblue border hover:bg-greenblue hover:text-darkblue  border-greenblue bg-darkblue py-2 px-4 rounded-full"
              }
              text={"Initiate an endeavor"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Home = (props) => {
  const { renderText, setActiveText, setActiveForm } = props;

  return (
    <>
      <Navbar
        renderText={renderText}
        setActiveText={setActiveText}
        setActiveForm={setActiveForm}
      />
      <div className="block">
        <Hero />
        <About />
        <MyWork />
        <Projects />
        <CallToAction
          setActiveForm={setActiveForm}
          setActiveText={setActiveText}
          renderText={renderText}
        />
        <hr className=" bg-greenblue h-[1px] border-0" />
        <Testinoinials />
        <LastSection
          setActiveForm={setActiveForm}
          setActiveText={setActiveText}
          renderText={renderText}
        />
      </div>
    </>
  );
};
