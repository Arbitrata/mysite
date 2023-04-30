import React from "react";
import {
  BiArrowToRight,
  BiBulb,
  BiCode,
  BiDockLeft,
  BiHeart,
} from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";
import Button from "./Button";

export const Cards = ({
  services,
  project,
  startUp,
  title,
  description,
  testimonial,
  name,
  image,
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
        <div className="lg:w-[380px] w-[100%] h-[817px] py-[25px] px-2 text-center hover:shadow-darkblue hover:shadow-sm bg-lightgray rounded-[6px]">
          <div className="w-full grid place-content-center mb-6">
            <div className="rounded-full bg-greenblue shadow w-[100px] h-[100px] grid place-content-center text-darkblue">
              {icon}
            </div>
          </div>
          <h1 className="text-darkblue font-poppins text-[22px] mb-[23px]">
            {title}
          </h1>
          <p className="text-[16px] font-poppins mb-[50px]">{description}</p>
          <div className="text-[16px] font-poppins">
            <span className="text-darkblue font-poppins">{like}</span>
            <br />
            <span>{todo}</span>
          </div>
          <h1 className="text-darkblue font-poppins pt-4">{tool}</h1>
          <ul className="list-none mt-4 font-poppins list-inside text-black gap-2">
            {children}
          </ul>
        </div>
      )}

      {project && (
        <div className="lg:h-[300px] [transform-style:preserve-3d] transition-all duration-700 hover:[transform:rotateY(180deg)] h-[200px] rounded-[12px] bg-blue lg:w-[346px] w-full lg:my-0 my-12 relative">
         
          <div className="absolute h-full w-full top-0">
            <img
              src={image}
              className="w-full h-full object-cover absolute rounded-[12px]"
            />
          </div>


        
         
        </div>
      )}

      {startUp && (
        <div className="lg:h-fit lg:w-[346px] shadow-darkblue shadow-sm px-4 py-10 text-center rounded-[12px] bg-white">
          <div className=" inline-flex gap-2 text-[18px] items-center font-poppins">
            <div className="w-[80px] h-[80px] rounded bg-greenblue">
              <BiCode size={80} />
            </div>
            {name}
          </div>
          <div className="h-fit">
            <p className="text-[16px] text-center font-poppins mt-[17px]">
              {description}
            </p>
            <div className="w-full mt-4 grid place-content-center">
              <Button
                link={true}
                text={title}
                icon={<BiBulb size={30} />}
                styling={ `${styling ? styling : ""} px-2 py-px text-darkblue `}
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
                src={image}
                alt="profile picture"
              />
            </div>
            <p className="text-[18px] font-poppins text-darkblue">
              {description}
            </p>
            <h1 className="font-poppins pt-10 text-[22px]">{name}</h1>
            <a
              data-tooltip-target="tooltip-dark"
              href={to}
              className="text-[18px] pt-2 font-poppins cursor-pointer hover:text-blue hover:underline"
            >
              {title}
            </a>
          </figure>
        </div>
      )}
    </div>
  );
};











{/* <div
className={`bg-darkblue bg-opacity-20 hover:bg-opacity-90 w-full h-full cursor-pointer font-poppins absolute top-0  rounded-[12px] grid place-content-center`}
>
<div className="text-darkblue/10 hover:[transform:rotateY(180deg)] [perspective:1000px] [backface-visibility:visible] w-full h-full z-30 hover:text-lightgray font-poppins text-[22px] absolute grid place-items-center text-center">
  <div className="absolute top-0 right-0 inline-flex items-center gap-2 m-2 h-fit w-fit">
    <span className="text-[12px]"></span>
    <BiHeart />
  </div>
  {description}
  <div className=" inline-flex gap-3 items-center">
    <a href={to} className="hover:text-blue">
      view site
    </a>
  </div>
  </div>
  </div> */}