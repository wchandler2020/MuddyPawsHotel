import api from "./api";

export const ACTION_TYPES = {
  GET_ALL: "GET_ALL",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE"
};

export const getAll = () => dispatch => {
  api
    .pets()
    .getAll()
    .then(response => {
      console.log(response);
      dispatch({
        type: ACTION_TYPES.GET_ALL,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const create = (data, onSuccess) => dispatch => {};
