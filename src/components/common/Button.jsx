import React from "react";

export default function Button({
  styling,
  button,
  contactbutton,
  id,
  link,
  onClick,
  icon,
  type,
  text,
}) {
  return (
    <>
      {button && (
        <button
        id={id}
          className={`${
            styling ? styling : ""
          } group gap-x-3 bg-transparent font-medium border border-greenblue rounded py-2 px-4 text-greenblue text-[14px] hover:border-r-4 hover:-translate-x duration-300 ease-in-out hover:scale-110 hover:border-b-4 hover:border-greenblue `}
          onClick={onClick}
          type={`${type ? type : "button"}`}
        >
          <span>{text}</span>
        </button>
      )}
      {contactbutton && (
        <button
          className={`${
            styling ? styling : ""
          } group gap-x-3 bg-transparent font-medium border border-greenblue rounded py-2 px-4 text-greenblue text-[14px] hover:border-r-4 hover:-translate-x duration-300 ease-in-out hover:scale-110 hover:border-b-4 hover:border-greenblue `}
          onClick={onClick}
          type={`${type ? type : "button"}`}
        >
          <span>{text}</span>
        </button>
      )}
      {link && (
        <div
          onClick={onClick}
          className={` ${
            styling ? styling : ""
          } group inline-flex text-[16px]  gap-2 items-center cursor-pointer font-light`}
        >
          {icon && <span className="lg:text-[22px]"> {icon}</span>}
          <span>{text}</span>
        </div>
      )}
    </>
  );
}
