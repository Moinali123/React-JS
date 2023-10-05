import React, { useState } from "react";

export default function Users() {
  const [task, setCurrentTasks] = useState("");
  const [list, setList] = useState([]);

  const inputdata = (event) => {
    setCurrentTasks(event.target.value);
  };

  const sumbitbutton = () => {
    if (task.trim() !== "") {
      const newTask = {
        task: task,
        status: true,
      };
      setList([newTask, ...list]);
      setCurrentTasks("");
    }
  };

  const deletebutton = (index) => {
    const updatedarray = [...list];
    updatedarray.splice(index, 1);
    setList(updatedarray);
  };

  const donebutton = (index) => {
    const updatedarray = [...list];
    updatedarray[index].status = !updatedarray[index].status;

    if (!updatedarray[index].status) {
      const completedTask = updatedarray.splice(index, 1);
      updatedarray.unshift(...completedTask);
    }

    setList(updatedarray);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <label htmlFor="userinput">
        <input
          type="text"
          placeholder="Write here..."
          value={task}
          onChange={inputdata}
          className="w-50 py-2 px-4 border rounded"
        />
      </label>
      <br></br>
      <button type="button" onClick={sumbitbutton} className="bg-blue-500 text-white p-2 rounded mt-2">
        Submit
      </button>
      <ul className="mt-4">
        {list.map((addedTask, index) => (
          <li key={index} className="flex items-center mb-2">
            <span
              style={{ textDecoration: addedTask.status ? "" : "line-through" }}
            >
              {addedTask.task}
            </span>
            {addedTask.status && (
              <button
                onClick={() => deletebutton(index)}
                className="bg-red-500 text-white p-2 ml-2 rounded"
              >
                Delete
              </button>
            )}
            {addedTask.status && (
              <button
                onClick={() => donebutton(index)}
                className="bg-green-500 text-white p-2 ml-2 rounded"
              >
                Done
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
