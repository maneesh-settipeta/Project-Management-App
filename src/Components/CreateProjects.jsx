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
    <div className="w-screen h-screen  mt-2  mb-14    bg-white border  border-gray-800 rounded-md  shadow-lg  ">
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
      <div className="pr-44 pl-44 pt-2">
        <InputVariables ref={description} label="Description" textArea={true} />
      </div>
      <p className="flex  mt-5  mr-36 justify-end">
        <button
          onClick={cancelButton}
          className="bg-sky-300 text-gray-800 py-2 px-3 text-lg font-semibold rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2 ml-4"
        >
          Cancel
        </button>
        <button
          onClick={onSaveButton}
          className="bg-sky-300 text-gray-800 py-2 px-3 text-lg font-semibold rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2  ml-2 mr-12"
        >
          Save
        </button>
      </p>
    </div>
  );
}

export default CreateProjects;
