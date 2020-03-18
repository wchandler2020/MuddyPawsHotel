import React from "react";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Pets from "./components/pets/Pets";
import "./styles/styles.css";

function App() {
  return (
    <Provider store={store}>
      <Pets />
    </Provider>
  );
}

export default App;
