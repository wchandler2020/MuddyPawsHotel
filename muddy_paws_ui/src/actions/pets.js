import api from "./api";

export const ACTION_TYPES = {
  GET_ALL: "GET_ALL",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE"
};

const formatData = data => ({
  ...data,
  PetOwnersZipCode: parseInt(data.PetOwnersZipCode ? data.PetOwnersZipCode : 0),
  PetOwnersNumber: parseInt(data.PetOwnersNumber ? data.PetOwnersNumber : 0)
});

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

export const create = (data, onSuccess) => dispatch => {
  data = formatData(data);
  api
    .pets()
    .create()
    .then(res => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data
      });
      onSuccess();
    })
    .catch(err => console.log(err));
};

export const update = (id, data, onSuccess) => dispatch => {
  data = formatData(data);
  api
    .pets()
    .update(id, data)
    .then(res => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data }
      });
      onSuccess();
    })
    .catch(err => console.log(err));
};

export const Delete = (id, onSuccess) => dispatch => {
  api
    .pets()
    .delete(id)
    .then(res => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: { id }
      });
      onSuccess();
    })
    .catch(err => console.log(err));
};
