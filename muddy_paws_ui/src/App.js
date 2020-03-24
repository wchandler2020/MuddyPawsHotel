import React, { Fragment } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Pets from "./components/pets/Pets";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home/Home";
import EmployeeDashboard from "./components/employees/EmployeeDashboard";
import Registration from "./components/employees/Registration";
import Login from "./components/employees/Login";
import Footer from "./components/Layout/Footer";
import PetsForm from "./components/pets/form/PetsForm";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={EmployeeDashboard} />
          <Route exact path="/petsform" component={PetsForm} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
