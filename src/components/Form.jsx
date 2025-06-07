import React from "react";
import { useState } from "react";

export const Form = () => {
  const [tasks, setTasks] = useState(["Eat more","dont eat","hello"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {};
  const deleteTask = (index) => {};
  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};
  return (
    <>
      <div className="w-full my-5">
        <div>
          <input
            type="text"
            className="text-2xl border-2 border-gray-500 w-92 p-2 h-16 rounded placeholder:text-[20px] placeholder:font-semibold"
            placeholder="What's need to be done?"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="ml-4 py-2 px-4 bg-gray-800 text-white rounded font-semibold"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div>
          <ol>
            {tasks.map((task, index) =>
              <li key={index} className="text-2xl">
                <span>{task}</span>
                <button
                  className="ml-2 text-red-500"
                  onClick={() => deleteTask(index)}>
                  Delete
                  </button>
                      <button
                  className="ml-2 text-red-500"
                  onClick={() => moveTaskUp(index)}>
                👆
                  </button>
                      <button
                  className="ml-2 text-red-500"
                  onClick={() => moveTaskDown(index)}>
                👇
                  </button>
              </li>
            )}
          </ol>
        </div>
      </div>
    </>
  );
};
