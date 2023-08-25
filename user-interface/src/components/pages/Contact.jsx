import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { BiHome, BiMailSend, BiMenu, BiPhoneCall, BiX } from "react-icons/bi";
import Button from "../common/Button";
import { MdWavingHand } from "react-icons/md";
import { GiBrainstorm } from "react-icons/gi";
import { GoProject } from "react-icons/go";

export default function Contact(props) {
  const { activeText, setActiveText, renderText, setActiveForm, activeForm } =
    props;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("sent");
    emailjs
      .sendForm(
        "service_7dzc46j",
        "template_a35aeeu",
        form.current,
        "R9iqdZ-m5qnfm40UJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "mail sent successfully, You'll receive an email shortly",
            result.status,
            result.text
          );
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[70px] bg-darkblue px-6 items-center lg:hidden visible flex justify-between">
        <Link to={"/"} className="lg:hidden visible text-greenblue">
          <BiHome size={30} />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden visible text-greenblue"
        >
          {open ? <BiX size={30} /> : <BiMenu size={35} />}
        </button>
      </div>
      <ul
        className={`lg:flex block lg:px-[10%] place-content-center lg:bg-darkblue lg:h-[70px] h-fit lg:pb-0 pb-20 lg:gap-y-0 gap-y-10 lg:bg-none z-50 bg-darkblue items-center w-full lg:justify-end lg:gap-x-6 transition-all duration-300 lg:static absolute ${
          open
            ? "top-[70px] text-greenblue grid place-content-center lg:py-0"
            : " -top-[400px] rounded-b-md grid place-content-center"
        }`}
      >
        <li className="lg:visible invisible lg:absolute left-10">
          <Link to={"/"}>
            <Button
              link={true}
              icon={<BiHome size={25} />}
              styling={
                "text-greenblue border hover:bg-greenblue hover:text-darkblue border-greenblue bg-darkblue py-2 lg:px-4 px-1  rounded-full"
              }
              text={"Home"}
            />
          </Link>
        </li>
        <li onClick={() => setOpen(!open)} className="">
          <Button
            link={true}
            onClick={() => renderText("sayHello", setActiveText, setActiveForm)}
            icon={<MdWavingHand size={25} />}
            styling={
              "text-greenblue border hover:bg-greenblue hover:text-darkblue border-greenblue bg-darkblue py-2 px-4 rounded-full"
            }
            text={"Say hello"}
          />
        </li>
        <li onClick={() => setOpen(!open)} className="">
          <Button
            link={true}
            onClick={() =>
              renderText("startProject", setActiveText, setActiveForm)
            }
            icon={<GoProject size={25} />}
            styling={
              "text-greenblue border hover:bg-greenblue hover:text-darkblue border-greenblue bg-darkblue py-2 px-4 rounded-full"
            }
            text={"Initiate new endeavor"}
          />
        </li>
        <li onClick={() => setOpen(!open)} className="">
          <Button
            link={true}
            onClick={() =>
              renderText("discussStartup", setActiveText, setActiveForm)
            }
            icon={<GiBrainstorm size={25} />}
            styling={
              "text-greenblue border hover:bg-greenblue hover:text-darkblue border-greenblue bg-darkblue py-2 px-4 rounded-full"
            }
            text={"Brainstorm startup concept"}
          />
        </li>
      </ul>
      <section className="relative w-full h-full px-[10%] z-10 overflow-hidden py-20 lg:py-[130px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="text-darkblue mb-6 text-[18px] uppercase sm:text-[16px] text-left font-poppins lg:text-[26px]">
                  {activeText
                    ? activeText
                    : "I’m excited to learn about your project. Ready to get started?"}
                </h2>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-darkblue mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <BiPhoneCall size={35} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-darkblue mb-1 text-[22px] font-bold">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+254700463499"
                      className="text-darkblue font-poppins text-base"
                    >
                      +254 700463499
                    </a>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-darkblue mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <BiMailSend size={35} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-darkblue mb-1 text-[22px] font-bold">
                      Email Address
                    </h4>
                    <a
                      href="mailto:andrewirunguj@gmail.com?subject = Feedback&body = Message"
                      className="text-darkblue font-poppins text-base"
                    >
                      andrewirunguj@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-black/50 shadow-lg sm:p-12">
                <form id="formToClear" onSubmit={sendEmail} ref={form}>
                  <div className="mb-6 grid grid-cols-2 gap-x-4">
                    <input
                      required
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      className="text-darkblue font-poppins w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
                    />
                    <input
                      required
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      className="text-darkblue font-poppins w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="text-darkblue font-poppins w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
                    />
                  </div>
                  {activeForm ? activeForm : ""}
                  <div className="mb-6">
                    <textarea
                      required
                      name="message"
                      rows="6"
                      placeholder="Your Message"
                      className="text-darkblue font-poppins w-full resize-none rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
                    ></textarea>
                  </div>
                  <div>
                    <Button
                      button={true}
                      type={"submit"}
                      text={"Send Message"}
                      styling={"w-full bg-darkblue"}
                    />
                  </div>
                </form>
                <div>
                  <span className="absolute w-[100px] h-[100px] bg-greenblue rounded-full  -top-10 -right-9 z-[-1]"></span>
                  <span className="absolute bg-dotted-spacing-[9px] bg-dotted-greenblue w-[100px] h-[200px]  -right-10 top-[90px] z-[-1]"></span>
                  <span className="absolute  bg-dotted-spacing-[9px] bg-dotted-greenblue w-[100px] h-[200px] -left-7 -bottom-7 z-[-1]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
