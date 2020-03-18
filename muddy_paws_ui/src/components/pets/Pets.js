import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/pets";

const Pets = props => {
  // const { x, setx } = useState(0);
  console.log(props)
  useEffect(() => {
    props.getAllPets();
  }, []);

  return(
    <div>
      Test
      {
        props.PetsList.map((index, pet) => {
          return(
            <div key={index}>
                <h1>{pet.petName}</h1>
            </div>
          )
        })
      }
    </div>
  )
  
};

const mapStateToProps = state => ({
  PetsList: state.pets.list
});

const mapActionToProps = {
  getAllPets: actions.getAll
};

export default connect(mapStateToProps, mapActionToProps)(Pets);
