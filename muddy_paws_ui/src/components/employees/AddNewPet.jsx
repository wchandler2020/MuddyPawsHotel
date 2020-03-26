import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

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
    Phone: "",
    Email: "",
    CheckinDate: "",
    CheckoutDate: "",
    SpecialNeeds: "",
    ProfilePicture: ""
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post(" https://localhost:44346/api/MuddyPawsPets", {
        PetName: this.state.PetName,
        Type: this.state.Type,
        Size: this.state.Size,
        SpecialNeeds: this.state.SpecialNeeds,
        OwnersName: this.state.OwnersName,
        StreetAddress: this.state.StreetAddress,
        City: this.state.City,
        State: this.state.State,
        State: this.state.ZipCode,
        CheckinDate: this.state.CheckinDate,
        CheckoutDate: this.state.CheckoutDate,
        Email: this.state.Email,
        Phone: this.state.Phone,
        ProfilePicture: this.state.ProfilePicture
      })
      .then(function(response) {
        this.props.history.push("/dashbooard");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    // if (this.state.PetName == null || this.state.OwnersName == null) {
    //   window.alert("Please complete Name Fields are required ");
    // } else if (this.state.PetName.length < 2) {
    //   window.alert("Please recheck pets name but be longer than characters");
    // } else if (this.state.OwnersName.length < 4) {
    //   window.alert("Please provide a first and Last Name");
    // } else {
    //   alert("it gets here");
    //   axios.post("https://localhost:44346/api/MuddyPawsPets", {
    //     PetName: this.state.PetName,
    //     Type: this.state.Type,
    //     Size: this.state.Size,
    //     SpecialNeeds: this.state.SpecialNeeds,
    //     OwnersName: this.state.OwnersName,
    //     StreetAddress: this.state.StreetAddress,
    //     City: this.state.City,
    //     State: this.state.State,
    //     State: this.state.ZipCode,
    //     CheckinDate: this.state.CheckinDate,
    //     CheckoutDate: this.state.CheckoutDate,
    //     Email: this.state.Email,
    //     Phone: this.state.Phone
    //   });
    // }
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
      Phone,
      Email,
      SpecialNeeds,
      ProfilePicture,
      CheckinDate,
      CheckoutDate
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
              <h2 className="text-center">Muddy Paws Reservation System</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit.bind(this)}>
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
                  <input
                    type="file"
                    className="form-control"
                    placeholder="OPTIONAL"
                    id="ProfilePicture"
                    value={ProfilePicture}
                    name="ProfilePicture"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Check In Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="CheckinDate"
                    name="CheckinDate"
                    value={CheckinDate}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Check Out Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="CheckoutDate"
                    name="CheckoutDate"
                    value={CheckoutDate}
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
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <hr />
                <div className="form-group col-md-6">
                  <input
                    type="text"
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
                    id="Phone"
                    name="Phone"
                    value={Phone}
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
                    type="text"
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
