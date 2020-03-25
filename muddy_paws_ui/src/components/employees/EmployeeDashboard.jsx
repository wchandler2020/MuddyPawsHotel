import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { ButtonToolbar, Button } from "react-bootstrap";
import AddNewPet from "./AddNewPet";

class EmployeeDashboard extends Component {
  state = {
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("https://localhost:44346/api/MuddyPawsEmployees")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        console.log("will complete");
      });
  }

  render() {
    let addModalClose = () => {
      this.setState({ addModalShow: false });
    };

    return (
      <div className="container">
        {/* Jumbotron Header */}
        <header className="jumbotron my-4">
          <h1 className="display-3">Muddy Paws Dashboard!</h1>
          <p className="lead">{}</p>
          <ButtonToolbar>
            <button
              type="button"
              style={{ marginRight: 30 }}
              className="btn btn-outline-danger btn-lg"
              onClick={() =>
                this.setState({
                  addModalShow: true
                })
              }
            >
              Register a new guest.
            </button>
            <AddNewPet show={this.state.addModalShow} onHide={addModalClose} />
          </ButtonToolbar>
          {/* <a href="#" className="btn btn-outline-danger btn-lg">
            Register a new guest.
          </a> */}
        </header>
        <h1 className="display-3" style={{ fontSize: "20px" }}>
          Our Current Guest
        </h1>
        {/* Page Features */}
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/500x325"
                alt
              />
              <div className="card-body">
                <h4 className="card-title">Pet Name</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDashboard;
