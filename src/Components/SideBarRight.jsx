import { CreateContext } from "../Store/Store-Projects-Data";
import { useContext } from "react";

function SideBarRight({}) {
  const { updateProjectState, projects } = useContext(CreateContext);

  return (
    <>
      <aside className="bg-[rgb(64,224,208)] text-gray-900  py-4 w-1/6 border  border-l-slate-400 ">
        <div className="flex">
          <h1 className=" text-gray-800 p-4 font-serif text-2xl">Projects</h1>
          <button
            onClick={() => updateProjectState(null)}
            className=" text-gray-800 py-2 px-3 text-sm font-semibold rounded-md hover:text-gray-950 mt- "
          >
            + Add Project
          </button>
        </div>
        <hr className="my-6 h-px bg-gray-500 border-0"></hr>

        <ul className="flex flex-col ">
          {projects?.map((project) => (
            <p key={project.id}>
              <button
                onClick={() => updateProjectState(project.id)}
                className="bg-gray-200 text-gray-800  text-md p-1  ml-1 rounded-md mb-1 w-56 text-start"
              >
                {project.title}
              </button>
            </p>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default SideBarRight;
