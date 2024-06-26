import { useContext } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";

function ProjectsDashboard() {
  const { projects, updateProjectState } = useContext(CreateContext);
  const projectListCount = projects.length;
  return (
    <>
      <div className="w-5/6  bg-slate-100 flex flex-wrap overflow-y-auto ">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="flex items-center"
            onClick={() => updateProjectState(project.id)}
          >
            <div className="bg-white p-3 h-64 w-52 ml-9  mr-0 mb-2 mt-2 ">
              <h1 className="text-black text-2xl mb-3">
                <span className="font-medium text-black">Title:</span>
                {project.title}
              </h1>
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
  );
}
export default ProjectsDashboard;
