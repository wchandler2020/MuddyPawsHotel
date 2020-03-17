import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";

function App() {
  return <Provider strore={store}></Provider>;
}

export default App;
