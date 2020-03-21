import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/pets";
import PetsForm from "./form/PetsForm";

const Pets = props => {
  // const { x, setx } = useState(0);
  useEffect(() => {
    props.getAllPets();
  }, []);

  return (
    <div>
      {props.PetsList.map(pet => {
        return (
          <div key={pet.petID}>
            <h1>Pet: {pet.petName}</h1>
          </div>
        );
      })}
      <PetsForm />
    </div>
  );
};

const mapStateToProps = state => ({
  PetsList: state.pets.list
});

const mapActionToProps = {
  getAllPets: actions.getAll
};

export default connect(mapStateToProps, mapActionToProps)(Pets);
