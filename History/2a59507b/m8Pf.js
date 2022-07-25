import React from "react";
import ToDO from "./ToDo";

const ToDoList = (tasks) => {
  return (
    <div>
      <h1 className="m-3">Liste de tâches</h1>
      <ul className="list-group m-3">
        {tasks.map((i) => (
          <ToDO taches={i} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
