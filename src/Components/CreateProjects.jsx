import { useRef } from "react";
import InputVariables from "./InputsVariables";
import Input from "./InputsVariables";

function CreateProjects({ cancelButton, onSendData }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const assignedto = useRef();
  const priority = useRef();
  const requestedby = useRef();
  const category = useRef();

  function onSaveButton() {
    const titleData = title.current.value;
    const descriptionData = description.current.value;
    const duedateData = dueDate.current.value;
    const assignedtoData = assignedto.current.value;
    const priorityData = priority.current.value;
    const requestedbyData = requestedby.current.value;
    const categoryData = category.current.value;

    onSendData({
      title: titleData,
      description: descriptionData,
      dueDate: duedateData,
      assignedto: assignedtoData,
      priority: priorityData,
      requestedby: requestedbyData,
      category: categoryData,
    });
  }

  return (
    <div className="w-5/6   bg-slate-100 shadow-lg">
      <div>
        <h1 className="text-xl text-slate-950 font-serif text-center pt-2 pb-1">
          Projects Form
        </h1>
      </div>
      <div className="flex justify-around">
        <div>
          <InputVariables type="text" ref={title} label="Title" />
          <InputVariables ref={assignedto} label="Assigned to" />
          <InputVariables type="date" ref={dueDate} label="dueDate" />
        </div>
        <div>
          <InputVariables ref={priority} label="Priority" />
          <InputVariables ref={requestedby} label="Requested by" />
          <InputVariables ref={category} label="category" />
        </div>
      </div>
      <div className="mr-50 ml-50 pt-2">
        <InputVariables ref={description} label="Description" textArea={true} />
      </div>
      <p className="flex  mt-5  mr-40 justify-end">
        <button
          onClick={cancelButton}
          className="bg-slate-50  text-gray-900 py-2 px-3 text-lg rounded-md mt-2 ml-4 border border-slate-500
          hover:bg-red-200 hover:border-none hover:font-medium hover:shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
        >
          Cancel
        </button>
        <button
          onClick={onSaveButton}
          className="bg-[rgb(64,224,208)] text-gray-350 py-2 px-3 text-lg hover:font-medium rounded-md mt-2 ml-2 mr-12 hover:bg-[rgb(72,209,204)] hover:text-black hover:shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
        >
          Save
        </button>
      </p>
    </div>
  );
}

export default CreateProjects;
