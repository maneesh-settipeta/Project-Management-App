function SideBarRight({ sendProjectsToSideBar, onSaveProjectID }) {
  return (
    <>
      <aside className="bg-sky-200 text-gray-900 rounded-l-md py-6 md:w-72 w-1/3 ml-auto">
        <h1 className=" text-gray-800 p-4 font-serif text-2xl">Projects</h1>
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
