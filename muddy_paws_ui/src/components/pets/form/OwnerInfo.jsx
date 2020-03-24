import React, { Component, Fragment } from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

export class OwnerInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <section className="testimonial py-5 mt-5" id="testimonial">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 py-5 bg-danger text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img src={logo} style={{ width: "50%" }} />
                    <h2 className="py-3">Muddy Paws New Pet Information</h2>
                    <p>
                      Tation argumentum et usu, dicit viderer evertitur te has.
                      Eu dictas concludaturque usu, facete detracto patrioque an
                      per, lucilius pertinacia eu vel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Please Enter Your Information</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="OwnersName"
                        name="OwnersName"
                        defaultValue={values.OwnersName}
                        placeholder="Owner's Name"
                        className="form-control"
                        onChange={handleChange("OwnersName")}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="Email
                        "
                        Email
                        defaultValue={values.Email}
                        placeholder="Owner's Email"
                        className="form-control"
                        onChange={handleChange("Email")}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="Phone"
                        Email
                        defaultValue={values.Phone}
                        placeholder="Owner's Phone Number"
                        className="form-control"
                        onChange={handleChange("Phone")}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="StreetAddress"
                        name="StreetAddress"
                        defaultValue={values.StreetAddress}
                        placeholder="Street Address"
                        className="form-control"
                        onChange={handleChange("StreetAddress")}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="City"
                        name="City"
                        defaultValue={values.City}
                        placeholder="City"
                        className="form-control"
                        onChange={handleChange("City")}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        id="State"
                        className="form-control"
                        name="State"
                        defaultValue={values.State}
                        onChange={handleChange("State")}
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
                        defaultValue={values.ZipCode}
                        placeholder="Zip Code"
                        className="form-control"
                        onChange={handleChange("ZipCode")}
                        type="text"
                      />
                    </div>
                    <div className="form-row">
                      <button
                        onClick={this.back}
                        className="btn btn-outline-danger btn-lg ml-1"
                      >
                        Back <i class="fad fa-arrow-to-left"></i>
                      </button>
                      <button
                        onClick={this.continue}
                        className="btn btn-outline-danger btn-lg ml-1"
                      >
                        Continue <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default OwnerInfo;
