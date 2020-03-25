import React, { Fragment } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Pets from "./components/pets/Pets";
import Navbar from "./components/Layout/Navbar";
import DeluxeSuite from "./components/rooms/DeluxeSuite";
import Home from "./components/Home/Home";
import KittyCondo from "./components/rooms/KittyCondo";
import PetBoarding from "./components/rooms/PetBoarding";
import EmployeeDashboard from "./components/employees/EmployeeDashboard";
import Registration from "./components/employees/Registration";
import Login from "./components/employees/Login";
import Footer from "./components/Layout/Footer";
import PetsForm from "./components/pets/form/PetsForm";
import "./styles/styles.css";
import { StripeProvider } from "react-stripe-elements";
function App() {
  return (
    <StripeProvider apiKey="pk_test_PxZMuRYco84f49biOI5zgS1900rOYKYskd">
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={EmployeeDashboard} />
            <Route exact path="/petsform" component={PetsForm} />
            <Route exact path="/PetBoarding" component={PetBoarding} />
            <Route exact path="/DeluxeSuite" component={DeluxeSuite} />
            <Route exact path="/KittyCondo" component={KittyCondo} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </StripeProvider>
  );
}

export default App;
