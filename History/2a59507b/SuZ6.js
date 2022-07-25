import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ tasks, match }) => {
  console.log("🚀 ~ file: ToDoList.js ~ line 5 ~ ToDoList ~ tasks", tasks);
  let filteredTasks;

  switch (match.params.filter) {
    case "completed":
      filteredTasks = tasks.filter((task) => task.completetd);
      break;

    default:
      filteredTasks = tasks;
      break;
  }
  return (
    <>
      <h1 className="m-3">Liste de tâches</h1>
      <ul className="list-group m-3">
        {tasks.map((task) => (
          <ToDo task={task} key={task.id} />
        ))}
        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
          Ranger la vaisselle
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Répondre appel d'offres
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Signer contrat
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Ranger la salon
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li> */}
      </ul>
    </>
  );
};

export default ToDoList;
