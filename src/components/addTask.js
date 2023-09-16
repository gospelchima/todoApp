// AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (description.trim() !== "") {
      const taskId = Date.now(); // Unique ID for each task
      dispatch(addTask(taskId, description));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTask;
