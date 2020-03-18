import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Pets from "./components/pets/Pets";

function App() {
  return (
    <Provider store={store}>
      <Pets />
    </Provider>
  );
}

export default App;
