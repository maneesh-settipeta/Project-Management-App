import { useContext } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";

function Header() {
  const { updateProjectState, projects, projectStateStatus } =
    useContext(CreateContext);

  return (
    <div>
      <div className="border-b border-b-slate-400 py-2 ">
        <h1 className>
          <button
            onClick={() => updateProjectState(undefined)}
            className="font-serif text-2xl  px-4  pt-0 pb-0"
          >
            Project-Management Dashboard
          </button>
        </h1>
      </div>
    </div>
  );
}

export default Header;
