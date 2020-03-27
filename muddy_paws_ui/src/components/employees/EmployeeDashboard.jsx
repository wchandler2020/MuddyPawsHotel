import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { ButtonToolbar, Button } from "react-bootstrap";
import AddNewPet from "./AddNewPet";
import EmailForm from "../Email/EmailForm";

class EmployeeDashboard extends Component {
  state = {
    addModalShow: false,
    addModalShow2: false,
    AddPet: []
  };

  componentDidMount() {
    axios.get("https://localhost:44346/api/MuddyPawsPets").then(res => {
      console.log("response: " + res.data);
      this.setState({ AddPet: res.data });
    });
  }

  deleteHandler = id => {
    console.log(id);
    axios
      .delete(`https://localhost:44346/api/MuddyPawsPets/${id}`)
      .then(res => {
        const AddPet = res.data;
        this.setState({ AddPet });
      });
  };

  render() {
    let addModalClose = () => {
      this.setState({ addModalShow: false });
    };

    let addModalClose2 = () => {
      this.setState({ addModalShow2: false });
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
        </header>
        <h1 className="display-3" style={{ fontSize: "20px" }}>
          Our Current Guest{" "}
        </h1>
        {/* Page Features */}

        <div className="row text-center">
          {this.state.AddPet.map(pet => {
            return (
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://source.unsplash.com/random/300x300/?pets"
                    alt
                  />
                  <div className="card-body">
                    <p className="card-text">{pet.specialNeeds}</p>
                  </div>
                  <h4 className="card-title font-weight-bold">{pet.petName}</h4>
                </div>
              </div>
            );
          })}
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Owner</th>
                <th>Pet Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Arr</th>
                <th>Dep</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.AddPet.map(pet => {
                return (
                  <tr>
                    <td>
                      <small>{pet.ownersName}</small>
                    </td>
                    <td>
                      <small>{pet.petName}</small>
                    </td>
                    <td>
                      <small>{pet.type}</small>
                    </td>
                    <td>
                      <small>{pet.size}</small>
                    </td>
                    <td>
                      <small>{pet.streetAddress}</small>
                    </td>
                    <td>
                      <small>{pet.city}</small>
                    </td>
                    <td>
                      <small>{pet.state}</small>
                    </td>
                    <td>
                      <small>{pet.zipCode}</small>
                    </td>
                    <td>
                      <small>{pet.phone}</small>
                    </td>
                    <td>
                      <small>{pet.email}</small>
                    </td>
                    <td>
                      <small>{pet.checkinDate}</small>
                    </td>
                    <td>
                      <small>{pet.checkoutDate}</small>
                    </td>
                    <td>
                      <small>
                        <a href="" className=" btn btn-sm btn-outline-success">
                          Edit
                        </a>
                      </small>
                    </td>
                    <td>
                      <small>
                        <button
                          type="button"
                          href=""
                          className=" btn btn-sm btn-outline-danger"
                          onClick={() => this.deleteHandler(pet.petID)}
                        >
                          delete
                        </button>
                      </small>
                    </td>
                    <td>
                      <small>
                        <ButtonToolbar>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() =>
                              this.setState({
                                addModalShow2: true
                              })
                            }
                          >
                            email
                          </button>

                          <EmailForm
                            show={this.state.addModalShow2}
                            onHide={addModalClose2}
                          />
                        </ButtonToolbar>
                      </small>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeDashboard;
