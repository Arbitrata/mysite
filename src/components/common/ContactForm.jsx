import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import { message } from "antd";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_7dzc46j",
        "template_a35aeeu",
        form.current,
        "R9iqdZ-m5qnfm40UJ"
      )
      .then(
        (results) => {
          setLoading(false);
          setSuccess(true);
          message.success(
            `Mail sent successfully! You'll receive an email shortly.`
          );
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          message.error(
            `There was an error sending the mail. Please try again.`
          );
        }
      );
  };

  const services = [
    "WordPress Development",
    "UI/UX Design",
    "Web Application Development",
    "Mobile Application Development",
    "E-commerce Development",
    "Bug Fixing",
    "Website Development",
    "Digital Marketing and Branding",
  ];

  return (
    <section className="relative w-full h-fit">
      <div className="lg:flex block flex-wrap lg:justify-between">
        <div className="lg:w-1/2 w-full flex flex-col">
          <div className="max-w-[570px] lg:mb-0">
            <h1 className="md:text-[35px] sm:text-[33px] text-[25px] font-semibold text-black tracking-wide text-left">
              Currently Available for Freelance Projects
            </h1>
            <h3 className="text-black opacity-60 md:text-[14px] text-[12px lg:text-[16px] 2xl:text-[20px] font-normal tracking-wide font-roboto">
              Have an exciting project you need help with? I’m here to bring
              your vision to life with professionalism and expertise. Whether
              you're looking for innovative solutions, precise execution, or
              adaptability to evolving technologies, I’m ready to help you
              succeed.
            </h3>
            <div className="w-full flex flex-col space-y-6 my-12">
              <p>Great Benefits In:</p>
              <ul className="w-full h-fit space-y-6">
                <li class="flex items-center space-x-3 rtl:space-x-reverse font-roboto text-[16px] text-blackBg">
                  🔍 Problem-Solving Skills
                </li>
                <li class="flex items-center space-x-3 rtl:space-x-reverse font-roboto text-[16px] text-blackBg">
                  🎯 Attention to Detail
                </li>
                <li class="flex items-center space-x-3 rtl:space-x-reverse font-roboto text-[16px] text-blackBg">
                  🚀 Adaptability
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:px-12 md:px-6">
          <div className="relative rounded-lg bg-white p-4 shadow-black/50 shadow-lg sm:p-6 lg:mt-0 mt-12">
            <h1 className="sm:text-[33px] pb-6 text-[35px] font-semibold text-black tracking-wide text-left">
              Get a quote!
            </h1>
            <form id="formToClear" onSubmit={sendEmail} ref={form}>
              <div className="mb-6 grid grid-cols-2 gap-x-4">
                <input
                  required
                  name="fullname"
                  type="text"
                  placeholder="Your fullname"
                  className="text-darkblue font-poppins w-full rounded border border-grayish py-3 px-[14px] text-base outline-none "
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="text-darkblue font-poppins w-full rounded border border-grayish py-3 px-[14px] text-base outline-none "
                />
              </div>
              <div className="mb-6">
                <select
                  name={"project"}
                  placeholder="Select a field"
                  required
                  type="text"
                  className="text-darkblue bg-white cursor-pointer font-poppins w-full rounded border border-grayish py-3 px-[6px] text-base outline-none "
                >
                  <option value="" selected disabled>
                    Select a subject
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <textarea
                  required
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="text-darkblue font-poppins w-full resize-none rounded border border-grayish py-3 px-[14px] text-base outline-none "
                ></textarea>
              </div>
              <div>
                <Button
                  button={true}
                  type={"submit"}
                  text={loading ? "Sending message... " : "Send Message"}
                  styling={"w-full bg-darkblue"}
                  disabled={loading}
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
    </section>
  );
}
