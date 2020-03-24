import React, { Component, Fragment } from "react";
import logo from "../../../images/logo.png";
import "react-datepicker/dist/react-datepicker.css";

export class PetInfo extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
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
                <h4 className="pb-4">Please Enter Your Pets Information</h4>
                <form className="form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="PetName"
                        name="PetName"
                        defaultValue={values.PetName}
                        placeholder="Your Pet's Name"
                        className="form-control"
                        onChange={handleChange("PetName")}
                        type="text"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <select
                        id="Type"
                        className="form-control"
                        name="Type"
                        defaultValue={values.Type}
                        onChange={handleChange("Type")}
                      >
                        <option selected>Dog</option>
                        <option>Cat</option>
                        <option>Bird</option>
                        <option>Reptile</option>
                        <option>
                          Domestic Rodent(Guinea pig, hamster, ect...)
                        </option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        id="Size"
                        className="form-control"
                        name="Size"
                        defaultValue={values.Size}
                        onChange={handleChange("Size")}
                      >
                        <option selected>What Size is your pet...</option>
                        <option>Large (70lbs or more)</option>
                        <option>Meduim(40 - 70lbs)</option>
                        <option>Small (15 - 40lbs)</option>
                        <option>Very Small(less than 15lbs)</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <textarea
                        className="form-control"
                        id="SpecialNeeds"
                        name="SpecialNeeds"
                        rows={5}
                        placeholder="Please All Special Needs ie...Food, Medications, Sleeping Requirments"
                        defaultValue={values.SpecialNeeds}
                        onChange={handleChange("SpecialNeeds")}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Check In Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="CheckinDate"
                        name="CheckinDate"
                        placeholder="Checkin"
                        defaultValue={values.CheckinDate}
                        onChange={handleChange("CheckinDate")}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Check Out Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="CheckoutDate"
                        name="CheckoutDate"
                        defaultValue={values.CheckoutDate}
                        onChange={handleChange("CheckoutDate")}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        <strong>(OPTIONAL) Upload An Image</strong>
                      </label>
                      <input
                        id="ProfilePicture"
                        name="ProfilePicture"
                        defaultValue={values.ProfilePicture}
                        placeholder="upload an image"
                        className="form-control"
                        onChange={handleChange("ProfilePicture")}
                        type="file"
                      />
                    </div>
                    <div className="form-row">
                      <button
                        onClick={this.continue}
                        className="btn btn-outline-danger btn-lg ml-2"
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

export default PetInfo;
