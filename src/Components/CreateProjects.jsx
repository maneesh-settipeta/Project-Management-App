import InputVariables from "./InputsVariables";

function CreateProjects() {
  return (
    <div className="w-2/3 ">
      <div className="h-screen flex justify-between  mt-5 ml-5 mb-5 mr-5  p-3 bg-white  ">
        <div>
          <InputVariables label="Title" type="text" />
          <InputVariables label="Description" textArea={true} />
          <InputVariables label="dueDate" type="date" />
        </div>
        <div>
          <InputVariables label="Assigned to" />
          <InputVariables label="Priority" />
          <InputVariables label="Requested by" />
        </div>
      </div>
    </div>
  );
}

export default CreateProjects;
