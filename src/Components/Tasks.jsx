import { useRef, useState } from "react";

function Tasks({ sendData, passSelectedProject }) {
  const [inputValue, setInpuValue] = useState("");
  const [arrayOfTasks, setArrayTasks] = useState([]);
  const [populateInput, setPopulateInput] = useState(null);
  const [updatedValues, setUpdateNewTask] = useState("");

  function populateInputElement(index, valueUpdated) {
    setPopulateInput(index);
    setUpdateNewTask(valueUpdated);
  }

  function updateInputElement(index) {
    const newUpdatedValues = [...arrayOfTasks];
    newUpdatedValues[index] = updatedValues;
    setArrayTasks(newUpdatedValues);
    setPopulateInput(null);
    setUpdateNewTask("");
    console.log(newUpdatedValues);
    sendData(newUpdatedValues);
  }

  function handleCreateTask() {
    setArrayTasks([...arrayOfTasks, inputValue]);
    setInpuValue("");
    sendData([...arrayOfTasks, inputValue]);
  }

  function clearTask(index) {
    const newArray = [...arrayOfTasks];
    newArray.splice(index, 1);
    setArrayTasks(newArray);
    sendData(newArray);
    console.log(newArray);
  }

  return (
    <>
      <div>
        <div className="w-full flex justify-center pt-6 pb-7">
          <input
            value={inputValue}
            onChange={(valuee) => setInpuValue(valuee.target.value)}
            type="text"
            className=" outline-offset-2 border border-black/50 rounded-md p-2 shadow-md mx-2"
          />
          <button
            onClick={handleCreateTask}
            className="bg-[rgb(64,224,208)] text-gray-950 py-2 px-2 text-md font-normal rounded-md mt-2  ml-2 mr-4"
          >
            Create Task
          </button>
        </div>
        <div className=" ">
          {passSelectedProject?.tasks?.length === 0 ? (
            <p className="text-sky-700  mt-1 ml-2">No Tasks Created </p>
          ) : (
            passSelectedProject?.tasks?.map((createdTask, index) => (
              <div
                key={index}
                className="flex justify-between m-2 p-2 w-80 mr-3 rounded-md  border border-black/50 "
              >
                {populateInput === index ? (
                  <input
                    value={updatedValues}
                    className="outline-offset-2 border border-black/50 rounded-md p-1 shadow-md mx-1"
                    onChange={(e) => setUpdateNewTask(e.target.value)}
                  />
                ) : (
                  <p className="text-gray-900 p-1 font-serif font-bold">
                    {createdTask}
                  </p>
                )}

                <div>
                  {populateInput === index ? (
                    <button
                      onClick={() => updateInputElement(index)}
                      className=" text-gray-800   text-md font-light rounded-md hover:text-gray-950 "
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => populateInputElement(index, createdTask)}
                      className=" text-gray-800   text-md font-light rounded-md hover:text-gray-950 "
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => clearTask(index)}
                    className=" text-gray-800  ml-3 text-md font-light rounded-md hover:text-gray-950 "
                  >
                    {"  "}
                    Clear{" "}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default Tasks;
