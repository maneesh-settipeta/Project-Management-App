import { useRef, useState } from "react";

function Tasks() {
  const [inputValue, setInpuValue] = useState("");
  const [arrayOfTasks, setArrayTasks] = useState([]);

  function handleCreateTask() {
    setArrayTasks([...arrayOfTasks, inputValue]);
    setInpuValue("");
  }

  function clearTask(index) {
    const newArray = [...arrayOfTasks];
    newArray.splice(index, 1);
    setArrayTasks(newArray);
  }

  return (
    <>
      <div>
        <div className="m-3">
          <input
            value={inputValue}
            onChange={(valuee) => setInpuValue(valuee.target.value)}
            type="text"
            className=" outline-offset-2 border border-black/50 rounded-md p-2 shadow-md mx-2"
          />
          <button
            onClick={handleCreateTask}
            className="bg-sky-300 text-gray-800 py-2 px-3 text-lg font-semibold rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2 ml-4"
          >
            Create Task
          </button>
        </div>
        <div className=" w-1/3 m-1 ">
          {arrayOfTasks?.map((createdTask, index) => (
            <div
              key={index}
              className="flex justify-between mb-2 p-2 bg-white rounded-md shadow-md border border-black/50 "
            >
              <p className="text-gray-900 p-1 font-serif font-bold">
                {createdTask}
              </p>
              <button
                onClick={() => clearTask(index)}
                className=" text-gray-800   text-md font-light rounded-md hover:text-gray-950 "
              >
                {" "}
                Clear{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Tasks;
