import React, { Component, Fragment } from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    axios.post(
      "https://localhost:44346/api/MuddyPawsPets",
      {
        PetName: this.props.PetName,
        Type: this.props.Type,
        Size: this.props.Size,
        SpecialNeeds: this.props.SpecialNeeds,
        OwnersName: this.props.OwnersName,
        StreetAddress: this.props.StreetAddress,
        City: this.props.City,
        State: this.props.State,
        State: this.props.ZipCode,
        CheckinDate: this.props.CheckinDate,
        CheckoutDate: this.props.CheckoutDate,
        Email: this.props.Email,
        Phone: this.props.Phone
      },
      console.log("submitted")
    );
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // Submit(e) {

  //   axios.post(
  //     "https://localhost:44346/api/MuddyPawsPets",
  //     {
  //       PetName: this.props.PetName,
  //       Type: this.props.Type,
  //       Size: this.props.Size,
  //       SpecialNeeds: this.props.SpecialNeeds,
  //       OwnersName: this.props.OwnersName,
  //       StreetAddress: this.props.StreetAddress,
  //       City: this.props.City,
  //       State: this.props.State,
  //       State: this.props.ZipCode,
  //       CheckinDate: this.props.CheckinDate,
  //       CheckoutDate: this.props.CheckoutDate,
  //       Email: this.props.Email,
  //       Phone: this.props.Phone
  //     },
  //     console.log("submitted")
  //   );
  // }

  render() {
    const {
      values: {
        PetName,
        Type,
        Size,
        SpecialNeeds,
        OwnersName,
        StreetAddress,
        City,
        State,
        ZipCode,
        CheckinDate,
        CheckoutDate,
        Email,
        Phone,
        ProfilePicture
      }
    } = this.props;
    console.log(ProfilePicture);
    return (
      <Fragment>
        <section className="testimonial py-5 mt-5" id="testimonial">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 py-5 bg-danger text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img src={logo} style={{ width: "50%" }} />
                    <h2 className="py-3">Please Confirm Your Information</h2>
                    <p>
                      Tation argumentum et usu, dicit viderer evertitur te has.
                      Eu dictas concludaturque usu, facete detracto patrioque an
                      per, lucilius pertinacia eu vel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Please Enter Your Pets Information</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>Pet Name</h2>
                    <p class="text-muted">{PetName}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>Type</h2>
                    <p class="text-muted">{Type}</p>
                  </li>
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>Size</h2>
                    <p class="text-muted">{Size}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>Special Needs</h2>
                    <p class="text-muted">{SpecialNeeds}</p>
                  </li>
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>Owner's Name</h2>
                    <p class="text-muted">{OwnersName}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>Street Address</h2>
                    <p class="text-muted">{StreetAddress}</p>
                  </li>
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>City</h2>
                    <p class="text-muted">{City}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>State</h2>
                    <p class="text-muted">{State}</p>
                  </li>
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>Zip Code</h2>
                    <p class="text-muted">{ZipCode}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>Email Address</h2>
                    <p class="text-muted">{Email}</p>
                  </li>
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>Phone Number</h2>
                    <p class="text-muted">{Phone}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>CheckIn Date</h2>
                    <p class="text-muted">{CheckinDate}</p>
                  </li>
                  <li class="list-group-item ">
                    <h2 style={{ fontWeight: "bold" }}>Checkout Date</h2>
                    <p class="text-muted">{CheckoutDate}</p>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    <h2 style={{ fontWeight: "bold" }}>Profile Image</h2>
                    <img src={ProfilePicture} alt="" />
                  </li>
                </ul>
                <div
                  class="btn-group mt-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={this.back}
                    className="btn btn-outline-danger btn-lg ml-1"
                  >
                    Back <i class="fad fa-arrow-to-left"></i>
                  </button>
                  <button
                    type="submit"
                    onClick={this.continue}
                    className="btn btn-outline-danger btn-lg ml-1"
                  >
                    Confirm & Submit <i class="fad fa-arrow-to-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Confirm;
