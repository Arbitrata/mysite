import React from "react";
import Button from "../common/Button";
import { Cards } from "../common/Cards";
import { BiLaptop, BiMessage } from "react-icons/bi";

export const Hero = () => {
  return (
    <div className="h-fit pb-[118px] px-[94px] w-full pt-[100px]">
      <div className="text-[60px] text-darkblue font-poppins capitalize mt-[48px]">
        <h1>Andrew Mbugua.</h1>
        <h1>I build things for the web.</h1>
      </div>
      <p className="w-[820px] text-[22px] mt-2 font-poppins">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Apprentice
      </p>

      <div className="w-fit h-fit mt-10">
        <Button
          button={true}
          text={"Checkout My Work"}
          styling={"h-[68px] w-[243px]"}
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
    "Outsystem",
  ];
  const backendSkills = [
    "NodeJs",
    "ExpressJs",
    "PostgreSQL",
    "mySQL",
    "MongoDB",
    "heroku",
  ];
  const otherSkills = [
    "agile methodology",
    "project management",
    "Data modelling",
    "UI/UX design",
    "Srum master",
    "Github",
    "Data Structures & Algorithms",
    "Slack Communication",
    "Jira",
  ];
  return (
    <div className="w-full relative h-[800px] grid place-items-center pb-[200px]">
      <div className="grid lg:grid-cols-3 h-fit w-fit gap-1 place-items-center absolute -top-[130px]">
        <Cards
          services={true}
          icon={<BiLaptop size={60} />}
          title={"Front End Development"}
          description={
            " I value simple content structure, clean design patterns, and thoughtful interactions."
          }
          todo={"Tools and skills: "}
          like={" Things I enjoy designing:"}
          children={
            <>
              {frontendSkills.map((skill) => (
                <li className="py-2 text-[16px] font-poppins">{skill} </li>
              ))}
            </>
          }
        />

        <Cards
          services={true}
          icon={<BiLaptop size={60} />}
          title={"Backend Development"}
          description={
            " I value simple content structure, clean design patterns, and thoughtful interactions."
          }
          todo={"Tools and skills: "}
          like={" Things I enjoy designing:"}
          children={
            <>
              {backendSkills.map((skill) => (
                <li className="py-2 text-[16px] font-poppins">{skill} </li>
              ))}
            </>
          }
        />

        <Cards
          services={true}
          icon={<BiLaptop size={60} />}
          title={" Technical, Managerial & communication"}
          description={
            " I value simple content structure, clean design patterns, and thoughtful interactions."
          }
          todo={"Tools and skills: "}
          like={" Things I enjoy designing:"}
          children={
            <>
              {otherSkills.map((skill) => (
                <li className="py-2 text-[16px] font-poppins">{skill} </li>
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
    <div className="h-fit w-full">
      <div className="z-10 bg-darkblu text-center bg-darkblue text-lightgray px-[94px] h-[469px]">
        <h1 className="text-[29px] font-poppins pt-[29px]">
          Hi, I’m Andrew. Nice to meet you.
        </h1>
        <div className="w-full h-fit grid place-content-center">
          <p className="text-[18px] text-center font-poppins mt-[18px] w-[768.31px]">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export const MyWork = () => {
  return (
    <div className="w-full h-fit py-10">
      <div className="h-fit w-full font-poppins text-center py-12">
        <h1 className="font-bold text-darkblue text-[23px]">My Recent Work</h1>
        <h1 className="text-black">
          Here are a few past design projects I've worked on. Want to see more?
          <a href="" className="text-blue hover:underline font-semibold">
            Email me.
          </a>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 h-fit w-full place-items-center px-[10%] py-10">
        <Cards
          project={true}
          styling={"bg-darkblue opacity-70 hover:opacity-90"}
          description={
            "Accounting and tax services characterized by quality, reliability and trust."
          }
        />
        <Cards
          project={true}
          styling={"bg-darkblue opacity-70 hover:opacity-90"}
          description={
            "Accounting and tax services characterized by quality, reliability and trust."
          }
        />
        <Cards
          project={true}
          styling={"bg-darkblue opacity-70 hover:opacity-90"}
          description={
            "Accounting and tax services characterized by quality, reliability and trust."
          }
        />
        <Cards
          project={true}
          styling={"bg-darkblue opacity-70 hover:opacity-90"}
          description={
            "Accounting and tax services characterized by quality, reliability and trust."
          }
        />
        <Cards
          project={true}
          styling={"bg-darkblue opacity-70 hover:opacity-90"}
          description={
            "Accounting and tax services characterized by quality, reliability and trust."
          }
        />
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

export const Project = () => {
  return (
    <div className="w-full relative h-fit mb-11 grid place-items-center pb-[200px]">
      <div className="grid lg:grid-cols-3 h-fit w-fit gap-1 place-items-center absolute -top-[130px]">
        <Cards startUp={true} />
        <Cards startUp={true} />
        <Cards startUp={true} />
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="h-fit w-full mt-10 py-10">
      <div className="z-10 bg-darkblu text-center bg-darkblue text-lightgray px-[94px] h-[469px]">
        <h1 className="text-[29px] font-bold pt-[49px]">My Startup Projects</h1>
        <div className="w-full h-fit grid place-content-center">
          <p className="text-[18px] text-center font-normal mt-[17px] w-[768.31px]">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Eventually, I decided that it would be a fun challenge to
            try designing and building my own.
          </p>
        </div>
      </div>
      <Project />
    </div>
  );
};

export const CallToAction = () => {
  return (
    <div className="W-full h-[400px] px-[10%] relative grid place-content-cente">
      <div className="w-[500px] z-0 -left-[250px] bottom-0 h-[300px] skew-x-6 bg-gradient-to-tr to-lightgray from-darkblue absolute rounded-full"></div>
      <div className="py-8 px-4 z-20 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-[23px] tracking-tight font-bold mt-8 leading-tight text-darkblue dark:text-white">
            Interested in collaborating with me?
          </h2>
          <p className="my-[25px] font-poppins text-[18px] ">
            I’m always open to discussing product design work or partnership
            opportunities.
          </p>
          <Button
            link={true}
            icon={<BiMessage size={30} />}
            styling={
              "text-greenblue border hover:bg-blue border-greenblue bg-darkblue py-2 px-4 rounded-full"
            }
            text={"Start a Conversation"}
          />
        </div>
      </div>
    </div>
  );
};

export const Testinoinials = () => {
  return (
    <div className="w-full h-[650px] overflow-hidden relative">
      <div className="w-full h-fit grid place-content-center text-center py-[30px] gap-y-4">
        <h1 className="text-[27px] font-poppins">Testimonials</h1>
        <p className="text-[22px] font-poppins">
          People I've worked with have said some nice things...
        </p>
      </div>
      <div className="w-[400px] z-0 -right-[250px] bottom-0 h-[200px] skew-x-6 bg-gradient-to-tr to-lightgray from-darkblue absolute rounded-full"></div>
      <Cards testimonial={true} />
    </div>
  );
};

export const LastSection = () => {
  return (
    <div className="w-full relative h-[150px] px-[10%]">
      <div className="w-[1084px] grid grid-cols-4 justify-center  absolute -bottom-20 h-[166px] rounded-[12px] bg-black/90">
        <div className="text-[30px] text-lightgray font-poppins h-full items-center w-full grid place-content-center text-center col-span-1">
          Start a project
        </div>
        <div className="text-[17px] px-10 text-lightgray font-poppins h-full items-center grid place-content-center text-center col-span-2">
          Interested in working together? We should queue up a time to chat.
          I’ll buy the coffee.
        </div>
        <div className="text-[30px] h-full items-center w-full grid place-content-center  col-span-1">
          <Button
            link={true}
            icon={<BiMessage size={25} />}
            styling={
              "text-greenblue border hover:bg-blue border-greenblue bg-darkblue py-2 px-4 rounded-full"
            }
            text={"Let's do this, huh!"}
          />
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MyWork />
      {/* <Partner /> */}
      <Projects />
      <CallToAction />
      <hr className=" bg-greenblue h-[1px] border-0" />
      <Testinoinials />
      <LastSection />
    </div>
  );
};
