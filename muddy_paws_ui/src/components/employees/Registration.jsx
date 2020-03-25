import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../../images/logo.png";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class Registration extends Component {
  state = {
    EmployeeEmail: "",
    EmployeePhone: "",
    EmployeeName: "",
    EmployeeRole: "",
    Username: "",
    Password: "",
    ConfirmPassword: "",
    SecretKey: uuidv4()
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.Password !== this.state.ConfirmPassword) {
      window.alert("passwords do not match");
    } else if (
      this.state.Password.length < 6 ||
      this.state.Password.length > 50
    ) {
      window.alert("passwords must container 6 to 50 characters.");
    } else {
      axios.post("https://localhost:44346/api/MuddyPawsEmployees", {
        EmployeeEmail: this.state.EmployeeEmail,
        EmployeePhone: this.state.EmployeePhone,
        EmployeeName: this.state.EmployeeName,
        EmployeeRole: this.state.EmployeeRole,
        Username: this.state.Username,
        Password: this.state.Password,
        ConfirmPassword: this.state.ConfirmPassword,
        SecretKey: this.state.SecretKey
      });
    }
  }

  render() {
    const {
      EmployeeEmail,
      EmployeeName,
      EmployeePhone,
      EmployeeRole,
      Username,
      Password,
      ConfirmPassword
    } = this.state;
    return (
      <Fragment>
        <section className="testimonial py-5 mt-5" id="testimonial">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 py-5 bg-danger text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img src={logo} style={{ width: "50%" }} />
                    <h2 className="py-3">
                      Muddy Paws New Employee Registration
                    </h2>
                    <p>
                      Tation argumentum et usu, dicit viderer evertitur te has.
                      Eu dictas concludaturque usu, facete detracto patrioque an
                      per, lucilius pertinacia eu vel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Welcome, New Muddy Paws Associate.</h4>
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="EmployeeName"
                        name="EmployeeName"
                        value={EmployeeName}
                        placeholder="Full Name"
                        className="form-control"
                        type="text"
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="EmployeeEmail"
                        value={EmployeeEmail}
                        name="EmployeeEmail"
                        placeholder="Email"
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="EmployeePhone"
                        name="EmployeePhone"
                        value={EmployeePhone}
                        placeholder="Phone Number"
                        className="form-control"
                        type="text"
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        id="EmployeeRole"
                        className="form-control"
                        name="EmployeeRole"
                        value={EmployeeRole}
                        onChange={this.handleChange.bind(this)}
                      >
                        <option selected>What is your role...</option>
                        <option> Manager</option>
                        <option> Associate</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="Username"
                        name="Username"
                        value={Username}
                        placeholder="Username"
                        className="form-control"
                        required="required"
                        type="text"
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="Password"
                        name="Password"
                        value={Password}
                        placeholder="Password"
                        className="form-control"
                        required="required"
                        type="password"
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        value={ConfirmPassword}
                        placeholder="Confirm Password"
                        className="form-control"
                        required="required"
                        onChange={this.handleChange.bind(this)}
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="invalidCheck2"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck2"
                          >
                            <small>
                              By clicking Submit, you agree to our Terms &amp;
                              Conditions, Visitor Agreement and Privacy Policy.
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <button
                      type="submit"
                      className="btn btn-outline-danger btn-lg"
                      onClick={() => console.log("it might work")}
                    >
                      Register
                    </button>
                  </div>
                  <p className="lead text-left mt-3">
                    Already have an account? Please{" "}
                    <Link to="/login" className="text-danger">
                      Login.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Registration;
