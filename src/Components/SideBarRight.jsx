function SideBarRight({
  sendProjectsToSideBar,
  onSaveProjectID,
  redirectCreateProject,
}) {
  return (
    <>
      <aside className="bg-[rgb(64,224,208)] text-gray-900  py-4 w-1/6 border border-l-slate-400">
        <div className="flex">
          <h1 className=" text-gray-800 p-4 font-serif text-2xl">Projects</h1>
          <button
            onClick={redirectCreateProject}
            className=" text-gray-800 py-2 px-3 text-sm font-semibold rounded-md hover:text-gray-950 mt- "
          >
            + Add Project
          </button>
        </div>
        <hr className="my-6 h-px bg-gray-500 border-0"></hr>
        <div>
          <ul className="flex flex-col ">
            {sendProjectsToSideBar?.map((projects) => (
              <p key={projects.id}>
                <button
                  onClick={() => onSaveProjectID(projects.id)}
                  className="bg-gray-200 text-gray-800  text-md p-1  ml-1  mb-1 w-56 text-start"
                >
                  {projects.title}
                </button>
              </p>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBarRight;
