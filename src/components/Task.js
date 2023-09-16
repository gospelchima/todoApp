// Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./actions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (editedDescription.trim() !== "") {
      dispatch(editTask(task.id, editedDescription));
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          {task.description}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
