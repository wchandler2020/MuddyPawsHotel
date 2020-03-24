import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

class AddNewPet extends Component {
  state = {
    PetName: "",
    Type: "",
    Size: "",
    OwnersName: "",
    StreetAddress: "",
    City: "",
    State: "",
    ZipCode: "",
    Number: "",
    Email: "",
    CheckinDate: "",
    CheckoutDate: "",
    SpecialNeeds: ""
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  render() {
    const {
      PetName,
      Type,
      Size,
      OwnersName,
      StreetAddress,
      City,
      State,
      ZipCode,
      Number,
      Email,
      SpecialNeeds
    } = this.state;
    return (
      <Fragment>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>Muddy Paws Reservation System</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="PetName"
                    value={PetName}
                    name="PetName"
                    placeholder="Pet Name"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div className="form-group col-md-6">
                  <select
                    id="Type"
                    className="form-control"
                    name="Type"
                    value={Type}
                    onChange={this.handleChange.bind(this)}
                  >
                    <option selected>What type of pet...</option>
                    <option>Large (70lbs or more)</option>
                    <option>Meduim(40 - 70lbs)</option>
                    <option>Small (15 - 40lbs)</option>
                    <option>Very Small(less than 15lbs)</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <select
                    id="Size"
                    className="form-control"
                    name="Size"
                    value={Size}
                    onChange={this.handleChange.bind(this)}
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Bird</option>
                    <option>Reptile</option>
                    <option>
                      Domestic Rodent(Guinea pig, hamster, ect...)
                    </option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <textarea
                    className="form-control"
                    id="SpecialNeeds"
                    name="SpecialNeeds"
                    rows={5}
                    placeholder="Please All Special Needs ie...Food, Medications, Sleeping Requirments"
                    value={SpecialNeeds}
                    onChange={this.handleChange}
                  />
                </div>
                <hr />
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="OwnersName"
                    value={OwnersName}
                    name="OwnersName"
                    placeholder="Owners Name"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    id="StreetAddress"
                    name="StreetAddress"
                    value={StreetAddress}
                    placeholder="Street Address"
                    className="form-control"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    id="City"
                    name="City"
                    value={City}
                    placeholder="City"
                    className="form-control"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <select
                    id="State"
                    className="form-control"
                    name="State"
                    value={State}
                    onChange={this.handleChange.bind(this)}
                  >
                    <option selected>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>District Of Columbia</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <input
                    id="ZipCode"
                    name="ZipCode"
                    value={ZipCode}
                    placeholder="Zip Code"
                    className="form-control"
                    required="required"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    id="Number"
                    name="Number"
                    value={Number}
                    placeholder="Phone Number"
                    className="form-control"
                    required="required"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    id="Email"
                    name="Email"
                    value={Email}
                    placeholder="Email Address"
                    className="form-control"
                    required="required"
                    type="password"
                    onChange={this.handleChange.bind(this)}
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
                <button type="submit" className="btn btn-outline-danger btn-lg">
                  Register
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default AddNewPet;
