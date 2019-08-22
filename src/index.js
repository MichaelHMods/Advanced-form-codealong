import React from "react";
import ReactDOM from "react-dom";
import AnimalForm from "./components/AnimalForm";
import * as Yup from "yup";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AnimalForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
