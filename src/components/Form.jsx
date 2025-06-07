import React from "react";
import { useState } from "react";

export const Form = () => {
  const [tasks, setTasks] = useState(["Take a shower", "Go to the gym", "Read a book"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === ""){
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks,newTask])
    setNewTask("");
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => i  !== index);
    setTasks(updatedTasks);
  };
  const moveTaskUp = (index) => {
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index - 1]] = 
      [updatedTasks[index - 1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] = 
      [updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };
  return (
    <>
      <div className="w-full my-5">
        <div className="flex items-center">
          <input
            type="text"
            className="font-medium text-3xl border-2 border-gray-500 w-[76%] p-3 h-18 rounded placeholder:text-[20px] placeholder:font-semibold"
            placeholder="What's need to be done?"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="ml-3 cursor-pointer py-[20px] px-5 h-16 bg-gray-800 text-white rounded font-semibold"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div>
          <ol className="list-decimal">
            {tasks.map((task, index) =>
              <li key={index} className="text-2xl flex justify-between items-center my-2 border-2 rounded p-3 font-semibold">
               <span>{index + 1 + '. '}{task}</span>
                <div className="">
                <button
                  className="cursor-pointer ml-2 bg-red-500 px-3 py-1 text-white rounded "
                  onClick={() => deleteTask(index)}>
                  Delete
                  </button>
                      <button
                  className="cursor-pointer ml-2 bg-green-500 px-3 py-1 text-white rounded"
                  onClick={() => moveTaskUp(index)}>
                👆
                  </button>
                      <button
                  className="cursor-pointer ml-2 bg-blue-500 px-3 py-1 text-white rounded"
                  onClick={() => moveTaskDown(index)}>
                👇
                  </button>
                  </div>
              </li>
            )}
          
          </ol>
        </div>
      </div>
    </>
  );
};
