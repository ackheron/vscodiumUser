import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import AddTask from "./AddTask";
import initialData from "../initialData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <section id="todo">
      <Router>
        <Routes>
          <Route path="/add-task" element={<AddTask />} />
          {/* Méthode pour passer des props à un élément depuis React-router 6
          voir: https://ui.dev/react-router-pass-props-to-components */}
          {/* <Route path="/*" element={<ToDoList tasks={initialData} />} /> */}
          <Route path="/*" element={<ToDoList />} />
          {/* Ancienne méthode avant React-router 6 */}
          {/* <Route
            path="*"
            render={(props) => <ToDoList {...props} tasks={initialData} />}
          /> */}
        </Routes>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
