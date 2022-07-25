import React from "react";
// import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client"; // depuis React 18
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
