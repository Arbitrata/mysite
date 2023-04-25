import React from "react";
import { BiArrowToRight, BiBulb, BiCode, BiDockLeft } from "react-icons/bi";
import Button from "./Button";

export const Cards = ({
  services,
  project,
  startUp,
  title,
  description,
  testimonial,
  like,
  to,
  icon,
  todo,
  tool,
  styling,
  children,
}) => {
  return (
    <div>
      {services && (
        <div className="w-[360px] h-[817px] py-[25px] px-2 text-center hover:shadow-darkblue hover:shadow-sm bg-lightgray rounded-[6px]">
          <div className="w-full grid place-content-center mb-6">
            <div className="rounded-full bg-greenblue shadow w-[100px] h-[100px] grid place-content-center text-darkblue">
              {icon}
            </div>
          </div>
          <h1 className="text-darkblue font-bold text-[22px] mb-[23px]">
            {title}
          </h1>
          <p className="text-[16px] font-poppins mb-[50px]">{description}</p>
          <div className="text-[16px] font-poppins">
            <span className="text-darkblue font-bold">{like}</span>
            <br />
            <span>{todo}</span>
          </div>
          <h1 className="text-darkblue font-bold pt-4">{tool}</h1>
          <ul className="list-none mt-4 font-poppins list-inside text-black gap-2">
            {children}
          </ul>
        </div>
      )}

      {project && (
        <div className="h-[255px] rounded-[12px] bg-blue w-[346px] relative">
          <div className="absolute h-full w-full top-0">
            <img
              src="logo.png"
              className="w-full h-full object-cover absolute rounded-[12px]"
            />
          </div>
          <div
            className={` ${
              styling ? styling : ""
            } w-full h-full cursor-pointer font-poppins absolute top-0 [transform-style:preserve-3d] transition-all duration-700 hover:[transform:rotateY(180deg)] rounded-[12px] grid place-content-center`}
          >
            <div className="text-darkblue hover:[transform:rotateY(180deg)] [perspective:1000px] [backface-visibility:visible] w-full h-full z-30 hover:text-lightgray font-bold text-[22px] absolute grid place-items-center text-center">
              {description}
              <div className=" inline-flex gap-3 items-center">
                <a href={to} className="hover:text-blue">
                  view site
                </a>
                <BiArrowToRight size={30} />
              </div>
            </div>
          </div>
        </div>
      )}
      {startUp && (
        <div className="h-[298px] w-[346px] hover:shadow-darkblue hover:shadow-sm p-4 text-center rounded-[12px] bg-white shadow-xl shadow-black/50">
          <div className=" inline-flex gap-2 text-[18px] items-center font-poppins">
            <div className="w-[80px] h-[80px] rounded bg-greenblue">
              <BiCode size={80} />
            </div>
            UJENZI PLATFORM
          </div>
          <div className="h-fit">
            <p className="text-[16px] text-center font-poppins mt-[17px]">
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and
            </p>
            <div className="w-full mt-4 grid place-content-center">
              <Button
                link={true}
                text={"Validating Idea"}
                icon={<BiBulb size={30} />}
                styling={"bg-lightgray rounded text-darkblue px-2 py-px"}
              />
            </div>
          </div>
        </div>
      )}
      {testimonial && (
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 grid place-content-center lg:px-6">
          <figure className="max-w-screen-md grid place-content-center mx-auto">
            <div className="w-full h-fit grid place-content-center">
              <img
                className="w-[96px] h-[96px] rounded-full mb-[39px]"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
            </div>
            <div className=" inline-flex gap-4">
              <BiDockLeft size={30} />
              <p className="text-[22px] font-poppins text-darkblue">
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </div>
            <h1 className="font-poppins pt-10 text-[22px]">Micheal Gough</h1>
            <a data-tooltip-target="tooltip-dark" href={to} className="text-[18px] pt-2 font-poppins cursor-pointer hover:text-blue hover:underline">CEO at Google</a>

          </figure>
        </div>
      )}
    </div>
  );
};
