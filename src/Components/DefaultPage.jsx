function DefaultPage({ onChangeOfPage }) {
  return (
    <>
      <div className="mt-48 w-2/3 text-center">
        <h1 className="text-gray-800 py-2 px-1 font-Serif text-3xl">
          No Projects Selected
        </h1>
        <p className="text-gray-800 py-2 px-1 font-serif text-lg">
          Please Select an Project to view details
        </p>
        <p>
          <button
            onClick={onChangeOfPage}
            className="bg-sky-300 text-gray-800 py-2 px-3 text-lg font-semibold rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2 "
          >
            + Add Project
          </button>
        </p>
      </div>
    </>
  );
}
export default DefaultPage;
