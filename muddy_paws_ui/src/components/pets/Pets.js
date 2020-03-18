import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/pets";

const Pets = props => {
  const { x, setx } = useState(0);

  useEffect(() => {
    props.getAllPets();
  }, []);

  return <div>Pets</div>;
};

const mapStateToProps = state => ({
  PetsList: state.pets.list
});

const mapActionToProps = {
  getAllPets: actions.getAll
};

export default connect(mapStateToProps, mapActionToProps)(Pets);
