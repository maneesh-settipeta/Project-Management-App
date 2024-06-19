import Tasks from "./Tasks";

function SelectedProject({
  passSelectedProject,
  deleteProject,
  onSendTasksData,
}) {
  function recievedTasks(dataTasks) {
    onSendTasksData(dataTasks);
  }

  return (
    <>
      <div className="w-5/6 h-screen bg-slate-100">
        <div className="flex justify-end ">
          <button
            onClick={() => deleteProject(passSelectedProject.id)}
            className="bg-sky-400 text-gray-950 py-2 px-2 text-md font-normal rounded-md mt-2  ml-2 mr-4"
          >
            Delete Project
          </button>
        </div>
        <hr className="mt-2"></hr>

        <div className=" flex justify-between mt-4 mb-4 ">
          <div className="ml-3 w-1/2">
            <h1 className="text-gray-800 py-2 px-1 font-semibold text-2xl">
              Title: {passSelectedProject.title}
            </h1>

            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              {" "}
              DueDate: {passSelectedProject.dueDate}
            </p>
            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              Requested by: {passSelectedProject.requestedby}
            </p>
          </div>

          <div className="w-1/2">
            <h1 className="text-gray-800 py-2 px-1 font-semibold text-2xl">
              Assigned to: {passSelectedProject.assignedto}
            </h1>
            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              {" "}
              Priority: {passSelectedProject.priority}
            </p>
            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              Description: {passSelectedProject.description}
            </p>
          </div>
        </div>

        <hr></hr>
        <div>
          <Tasks
            sendData={recievedTasks}
            passSelectedProject={passSelectedProject}
          />
        </div>
      </div>
    </>
  );
}

export default SelectedProject;
