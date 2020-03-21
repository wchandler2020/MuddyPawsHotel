import React, { Fragment } from "react";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Pets from "./components/pets/Pets";
import Navbar from "./components/Layout/Navbar";
// import Home from "./components/Home/Home";
import Registration from "./components/employees/Registration";
import Login from "./components/employees/Login";

import Footer from "./components/Layout/Footer";
import "./styles/styles.css";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        {/* <Registration /> */}
        {/* <Home /> */}
        <Login />
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
