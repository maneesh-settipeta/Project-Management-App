import { useContext } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";

function DefaultPage() {
  const { updateProjectState } = useContext(CreateContext);

  return (
    <>
      <div className="w-5/6  bg-slate-100 flex flex-col items-center justify-center  ">
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
          <button
            onClick={() => updateProjectState(null)}
            className="bg-[rgb(64,224,208)] text-gray-800 py-2 px-3 text-lg font-medium rounded-md mt-2 "
          >
            + Add Project
          </button>
        </p>
      </div>
    </>
  );
}
export default DefaultPage;
