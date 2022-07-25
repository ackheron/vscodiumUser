import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import AddTask from "./AddTask";
import initialData from "../initialData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams, useLocation, useMatch } from "react-router-dom";

const App = () => {
  function ToDoList({ animate }) {
    let params = useParams();
    let location = useLocation();
    let match = useMatch();
  }
  return (
    <section id="todo">
      <Router>
        <Routes>
          <Route path="/add-task" element={<AddTask />} />
          {/* Méthode pour passer des props à un élément depuis React-router 6
          voir: https://ui.dev/react-router-pass-props-to-components */}
          <Route
            path="/*"
            element={<ToDoList tasks={initialData} animate={true} />}
          />
          {/* Ancienne méthode avant React-router 6 */}
          {/* <Route
            path="*"
            render={(props) => <ToDoList {...props} tasks={initialData} />}
          />  */}
        </Routes>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
