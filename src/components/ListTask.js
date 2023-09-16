// ListTask.js
import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = filter
    ? tasks.filter((task) => task.isDone === filter)
    : tasks;

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListTask;
