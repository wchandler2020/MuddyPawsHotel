import React, { useState } from "react";
import useForm from "../useForm";
const initialFieldValues = {
  PetName: "",
  PetType: "",
  PetSize: "",
  PetOwnersName: "",
  PetOwnersStreetAddress: "",
  PetOwnersCity: "",
  PetOwnersState: "",
  PetOwnersNumber: "",
  PetOwnersEmail: "",
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
            name="PetSize"
            value={values.PetSize}
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
            name="PetType"
            value={values.PetType}
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
            name="PetOwnersName"
            id="PetOwnersName"
            placeholder="Your Name"
            value={values.PetOwnersName}
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
            name="PetOwnersNumber"
            id="PetOwnersNumber"
            placeholder="Your Phone Number"
            value={values.PetOwnersNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">What is Your Email?</label>
          <input
            type="email"
            name="PetOwnersEmail"
            className="form-control"
            id="PetOwnersEmail"
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
            name="PetOwnersStreetAddress"
            id="PetOwnersStreetAddress"
            placeholder="Your Street Address"
            value={values.PetOwnersStreetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What City DO You Live In?
          </label>
          <input
            type="text"
            className="form-control"
            name="PetOwnersCity"
            id="PetOwnersCity"
            placeholder="Your City"
            value={values.PetOwnersCity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            What State Do You Live In?
          </label>
          <select
            className="form-control"
            id="PetOwnersState"
            name="PetOwnersState"
            value={values.PetOwnersState}
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
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-danger">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PetsForm;
