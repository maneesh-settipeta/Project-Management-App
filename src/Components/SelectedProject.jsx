import Tasks from "./Tasks";

function SelectedProject({
  passSelectedProject,
  deleteProject,
  onSendTasksData,
}) {
  function recievedTasks(dataTasks) {
    onSendTasksData(dataTasks);
  }

  console.log(passSelectedProject, "MAhesh");
  return (
    <>
      <div className="w-screen h-screen  mt-2  mb-14   p-3 bg-white border  border-gray-800 rounded-md  shadow-lg ml-2 ">
        <header>
          <div className="bg-gray-200 flex justify-end p-2">
            <button
              onClick={() => deleteProject(passSelectedProject.id)}
              className="bg-sky-300 text-gray-800 py-2 px-3 text-lg font-semibold rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2  ml-2 mr-4"
            >
              Delete
            </button>
          </div>

          <h1 className="text-gray-800 py-2 px-1 font-bold text-4xl">
            Title: {passSelectedProject.title}
          </h1>

          <p className="text-gray-800 py-2 px-1 font-Serif text-lg">
            {" "}
            DueDate: {passSelectedProject.dueDate}
          </p>
          <p className="text-gray-800 py-2 px-1 font-Serif text-lg">
            Description: {passSelectedProject.description}
          </p>
          <h1 className="text-gray-800 py-2 px-1 font-bold text-2xl">
            Assigned to: {passSelectedProject.assignedto}
          </h1>
          <p className="text-gray-800 py-2 px-1 font-Serif text-lg">
            {" "}
            Priority: {passSelectedProject.priority}
          </p>
          <p className="text-gray-800 py-2 px-1 font-Serif text-lg">
            Requested by: {passSelectedProject.requestedby}
          </p>
        </header>
        <hr className="my-6 h-px bg-gray-500 border-0"></hr>
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
