function SideBarRight({
  sendProjectsToSideBar,
  onSaveProjectID,
  redirectCreateProject,
}) {
  return (
    <>
      <aside className="bg-sky-200 text-gray-900 rounded-l-md py-6 md:w-72 w-1/3 ml-auto">
        <div className="flex">
          <h1 className=" text-gray-800 p-4 font-serif text-2xl">Projects</h1>
          <button
            onClick={redirectCreateProject}
            className="bg-white text-gray-800 py-2 px-3 text-sm font-semibold rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2 "
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
                  className="bg-sky-500 text-gray-800  p-3 m-1 ml-2 rounded-md"
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
