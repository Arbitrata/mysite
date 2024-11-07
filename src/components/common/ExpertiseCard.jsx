import { Carousel } from "antd";
import React from "react";
import Button from "./Button";
import { MdCallMade } from "react-icons/md";

export default function ExpertiseCard({
  coverImages = [],
  skills = [],
  title,
  description,
}) {
  const contentStyle = {
    margin: 0,
    height: "200px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="w-[100%] min-h-[420px] h-fit bg-iceblue relative group overflow-hidden rounded">
      <div className="">
        <Carousel arrows infinite={false} autoplay>
          {coverImages.map((image, index) => (
            <div key={index}>
              <img
                style={contentStyle}
                src={image}
                alt={`Andrew Irungu ${title}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full h-fit px-4 py-2 space-y-2">
        <h1 className="text-blackBg lg:text-[16px] md:text-[14px] text-[12px] font-semibold">
          {title}
        </h1>
        <p className="text-blackBg md:text-[13px] text-[12px] font-light font-roboto">
          {description}
        </p>
        <div className="w-full h-fit flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="w-fit h-fit py-1 px-2 text-[12px] font-medium bg-darkblue text-greenblue rounded-full"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute lg:-top-10 top-4 right-4 delay-300 duration-500 group-hover:top-4  group-hover:scale-100">
        <Button
          link={true}
          text={"More Info"}
          icon={<MdCallMade size={14} />}
          styling={
            "px-4 py-1 bg-darkblue rounded-full text-greenblue border border-greenblue text-[13px] font-medium"
          }
        />
      </div>
    </div>
  );
}
