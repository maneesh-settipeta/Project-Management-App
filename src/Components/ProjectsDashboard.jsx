import { useContext } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";
import { NavLink } from "react-router-dom";
function ProjectsDashboard() {
  const { projects, updateProjectState } = useContext(CreateContext);

  const handleDeleteClick = (e, projectId) => {
    e.stopPropagation();
    const ProjectTasksDetails = projects.find((P) => P.id === projectId);
    if (ProjectTasksDetails.tasks && ProjectTasksDetails.tasks.length > 0) {
      alert("Please Complete Tasks before clear project");
    } else {
      updateProjectState("delete", projectId);
    }
  };

  return (
    <>
      <div className="w-5/6  bg-slate-100  overflow-y-auto h-screen">
        {projects.length === 0 ? (
          <>
            <div className="w-5/6  bg-slate-100 flex flex-col mt-60 items-center justify-center  ">
              <h1 className="text-gray-800 py-2 px-1 font-Serif text-3xl">
                Start Project
              </h1>
              <p className="text-gray-800 py-2 px-1 font-serif text-lg">
                Please click{" "}
                <span className="text-neutral-950 font-bold  font-mono">
                  {" "}
                  + Add Project button{" "}
                </span>
                to create a project for your team
              </p>
              <p>
                <NavLink
                  to="/create-project"
                  onClick={() => updateProjectState(null)}
                  className="bg-[rgb(64,224,208)] text-gray-800 py-2 px-3 text-lg font-medium rounded-md mt-2 "
                >
                  + Add Project
                </NavLink>
              </p>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex justify-end p-4">
              <NavLink
                to="/create-project"
                onClick={() => updateProjectState(null)}
                className="bg-[rgb(64,224,208)] text-gray-800 py-2 px-3 text-lg font-medium rounded-md"
              >
                + Add Project
              </NavLink>
            </div>
            <div className="flex flex-wrap">
              {projects?.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center "
                  onClick={() => updateProjectState(project.id)}
                >
                  <div className="bg-white p-3 h-64 w-52 ml-9  mr-0 mb-2 mt-2 overflow-y-auto hover:shadow-[0_4px_10px_rgba(0,0,0,0.25)] ">
                    <div className="flex justify-between">
                      <h1 className="text-black text-base mb-3">
                        <span className="font-medium text-lg text-black">
                          Title:
                        </span>
                        {project.title}
                      </h1>
                      <p
                        className="font-medium pt-1 pr-1 text-lg"
                        onClick={(e) => handleDeleteClick(e, project.id)}
                      >
                        <button>X</button>
                      </p>
                    </div>
                    <hr></hr>
                    {project?.tasks?.map((projectTask, taskIndex) => (
                      <li key={taskIndex} className="text-sky-950 text-md">
                        {projectTask}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default ProjectsDashboard;
