import React from "react";

export default function Button({
  styling,
  button,
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
          className={`${
            styling ? styling : ""
          } gap-x-3 bg-transparent font-medium border border-greenblue rounded py-2 px-4 text-greenblue text-[14px] hover:border-r-4 hover:-translate-x duration-300 ease-in-out hover:scale-110 hover:border-b-4 hover:border-greenblue `}
          onClick={onClick}
          type={`${type ? type : "button"}`}
        >
          <span>{text}</span>
        </button>
      )}
      {link && (
        <div
          className={` ${
            styling ? styling : ""
          } inline-flex text-[16px] gap-2 items-center cursor-pointer font-light`}
        >
          {icon && <span className="text-[22px] text-greenblue"> {icon}</span>}
            {text}
        </div>
      )}
    </>
  );
}
