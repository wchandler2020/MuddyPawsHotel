import React, { Fragment } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Pets from "./components/pets/Pets";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home/Home";
import EmployeeDashboard from "./components/employees/EmployeeDashboard";
import Registration from "./components/employees/Registration";
import Login from "./components/employees/Login";
import Footer from "./components/Layout/Footer";
import "./styles/styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={EmployeeDashboard} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
