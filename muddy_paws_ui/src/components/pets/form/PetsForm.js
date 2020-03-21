import React, { useState } from "react";
import useForm from "../../useForm";
import { connect } from "react-redux";
import * as actions from "../../../actions/pets";

const initialFieldValues = {
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

const PetsForm = props => {
  const { values, setValues, errors, setErrors, handleChange } = useForm(
    initialFieldValues
  );
  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
    props.CreatePet(values, () => console.log("it worked"));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Pet's Name</label>
          <input
            type="text"
            className="form-control"
            name="PetName"
            id="PetName"
            placeholder="Pet's Name"
            value={values.PetName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Pet Size</label>
          <select
            className="form-control"
            name="Size"
            value={values.Size}
            onChange={handleChange}
          >
            <option>Large (70lbs or more)</option>
            <option>Meduim(40 - 70lbs)</option>
            <option>Small (15 - 40lbs)</option>
            <option>Very Small(less than 15lbs)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Pet Type</label>
          <select
            className="form-control"
            name="Type"
            value={values.Type}
            onChange={handleChange}
          >
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Reptile</option>
            <option>Domestic Rodent(Guinea pig, hamster, ect...)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Does Your Pet Have Any Special Needs?
          </label>
          <textarea
            className="form-control"
            id="SpecialNeeds"
            name="SpecialNeeds"
            rows={5}
            placeholder="Special Needs"
            value={values.SpecialNeeds}
            onChange={handleChange}
          />
        </div>

        <hr />
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">What Is Your Name?</label>
          <input
            type="text"
            className="form-control"
            name="OwnersName"
            id="OwnersName"
            placeholder="Your Name"
            value={values.OwnersName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What Is Your Phone Number?
          </label>
          <input
            type="text"
            className="form-control"
            name="Number"
            id="Number"
            placeholder="Your Phone Number"
            value={values.Number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">What is Your Email?</label>
          <input
            type="email"
            name="Email"
            className="form-control"
            id="Email"
            value={values.Email}
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What Is Your Street Address?
          </label>
          <input
            type="text"
            className="form-control"
            name="StreetAddress"
            id="StreetAddress"
            placeholder="Your Street Address"
            value={values.StreetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What City Do You Live In?
          </label>
          <input
            type="text"
            className="form-control"
            name="City"
            id="City"
            placeholder="Your City"
            value={values.City}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            What State Do You Live In?
          </label>
          <select
            className="form-control"
            id="State"
            name="State"
            value={values.State}
            onChange={handleChange}
          >
            <option>Alabama</option>
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
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Zip Code</label>
          <input
            type="text"
            className="form-control"
            name="ZipCode"
            id="ZipCode"
            placeholder="12345"
            value={values.ZipCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  PetsList: state.pets.list
});

const mapActionToProps = {
  CreatePet: actions.create
};

export default connect(mapStateToProps, mapActionToProps)(PetsForm);
