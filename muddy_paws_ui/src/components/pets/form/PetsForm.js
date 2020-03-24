import React, { Component } from "react";
import OwnerInfo from "./OwnerInfo";
import PetInfo from "./PetInfo";
import Confirm from "./Confirm";
import Success from "./Success";

export class PetsForm extends Component {
  state = {
    step: 1,
    PetName: "",
    Type: "",
    Size: "",
    SpecialNeeds: "",
    OwnersName: "",
    StreetAddress: "",
    City: "",
    State: "",
    ZipCode: "",
    Phone: "",
    Email: "",
    ProfilePicture: "",
    CheckinDate: "",
    CheckoutDate: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;
    const values = {
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
    };
    switch (step) {
      case 1:
        return (
          <PetInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <OwnerInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default PetsForm;
