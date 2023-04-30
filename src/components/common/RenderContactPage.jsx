const renderText = (buttonType, setActiveText, setActiveForm) => {
  if (buttonType === "sayHello") {
    setActiveText(
      "Thanks for taking the time to reach out. How can I help you today?"
    );
    setActiveForm();
  } else if (buttonType === "startProject") {
    setActiveText(
      "if you would like help with a specific project or task, I would be more than happy to assist you to the best of my abilities based on my programmed knowledge and understanding of language."
    );

    setActiveForm(
      <>
        <select
          type="text"
          className="text-darkblue bg-white cursor-pointer appearance-none font-poppins w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
        >
          <option selected>Budget</option>
        </select>
        <select
          type="text"
          className="text-darkblue cursor-pointer appearance-none bg-white font-poppins w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
        >
          <option selected>Budget</option>
        </select>
      </>
    );
  } else if (buttonType === "discussStartup") {
    setActiveText(
      "Want to discuss a startup collaboration ?  let me know what specific aspects of startup collaboration you would like to discuss. so let's get started."
    );

    setActiveForm(
      <>
        <select
          type="text"
          className="text-darkblue font-poppins cursor-pointer appearance-none bg-white w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
        >
          <option selected>Budget</option>
        </select>

        <select
          type="text"
          className="text-darkblue cursor-pointer appearance-none font-poppins bg-white w-full rounded shadow shadow-black py-3 px-[14px] text-base outline-none "
        >
          <option selected>Budget</option>
        </select>
      </>
    );
  }
};

export default renderText;
