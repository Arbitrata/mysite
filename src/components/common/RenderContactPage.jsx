const renderText = (buttonType, setActiveText, setActiveForm) => {
  const discussStartupOption = [
    "Software development",
    "E-commerce",
    "Social media",
    "Clean energy",
  ];

  const startupProject = [
    "UI/UX design",
    "Web Application",
    "Mobile Application",
    "Fixing bugs",
  ];
  const startupProjectBudget = ["0 - $500", "$500 - $1000", "$1000 + "];

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
      <div className="mb-6 grid grid-cols-2 gap-x-4">
        <select
          name={"project"}
          required
          type="text"
          className="text-darkblue bg-white cursor-pointer font-poppins w-full rounded shadow shadow-black py-3 px-[6px] text-base outline-none "
        >
          <option selected disabled></option>
          {startupProject.map((project) => (
            <option value={project}>{project}</option>
          ))}
        </select>
        <select
          name={"budget"}
          required
          type="text"
          className="text-darkblue cursor-pointer bg-white font-poppins w-full rounded shadow shadow-black py-3 px-[6px] text-base outline-none "
        >
          <option selected disabled></option>
          {startupProjectBudget.map((projectBudget) => (
            <option value={projectBudget}>{projectBudget}</option>
          ))}
        </select>
      </div>
    );
  } else if (buttonType === "discussStartup") {
    setActiveText(
      "Want to discuss a startup collaboration ?  let me know what specific aspects of startup collaboration you would like to discuss. so let's get started."
    );

    setActiveForm(
      <div className="mb-6">
        <select
          name={"startup"}
          required
          type="text"
          className="text-darkblue font-poppins cursor-pointer bg-white w-full rounded shadow shadow-black py-3 px-[6px] text-base outline-none "
        >
          <option selected disabled></option>
          {discussStartupOption.map((startupProject) => (
            <option value={startupProject}>{startupProject}</option>
          ))}
        </select>
      </div>
    );
  }
};

export default renderText;
