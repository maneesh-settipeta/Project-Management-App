import Tasks from "./Tasks";
import { CreateContext } from "../Store/Store-Projects-Data";
import { useContext } from "react";

function SelectedProject() {
  const { projectStateStatus, projects, updateProjectState } =
    useContext(CreateContext);

  const projectSelect = projects.find(
    (project) => project.id === projectStateStatus
  );

  return (
    <>
      <div className="w-5/6  bg-slate-100">
        <div className="flex justify-end ">
          <button
            onClick={() => updateProjectState("returnDashboard")}
            className="bg-sky-400 text-gray-950 py-2 px-2 text-md font-normal rounded-md mt-2  ml-2 mr-4"
          >
            Return Home
          </button>
          <button
            onClick={() => updateProjectState("delete", projectSelect?.id)}
            className="bg-sky-400 text-gray-950 py-2 px-2 text-md font-normal rounded-md mt-2  ml-2 mr-4"
          >
            Delete Project
          </button>
        </div>
        <hr className="mt-2"></hr>

        <div className=" flex justify-between mt-4 mb-4 ">
          <div className="ml-3 w-1/2">
            <h1 className="text-gray-800 py-2 px-1 font-semibold text-2xl">
              Title: {projectSelect?.title}
            </h1>

            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              {" "}
              DueDate: {projectSelect?.dueDate}
            </p>
            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              Requested by: {projectSelect?.requestedby}
            </p>
          </div>

          <div className="w-1/2">
            <h1 className="text-gray-800 py-2 px-1 font-semibold text-2xl">
              Assigned to: {projectSelect?.assignedto}
            </h1>
            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              {" "}
              Priority: {projectSelect?.priority}
            </p>
            <p className="text-gray-800 py-2 px-1 font-semibold text-1xl">
              Description: {projectSelect?.description}
            </p>
          </div>
        </div>

        <hr></hr>
        <div>
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default SelectedProject;
