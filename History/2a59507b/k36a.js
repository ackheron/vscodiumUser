import React from "react";

export const ToDoList = () => {
  return (
    <ul className="list-group m-3">
      <li className="list-group-item d-flex justify-content-between align-items-center">
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
      </li>
    </ul>
  );
};

export default ToDoList;
