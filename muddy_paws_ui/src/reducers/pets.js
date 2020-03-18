import { ACTION_TYPES } from "../actions/pets";

const initialState = {
  list: []
};

export const pets = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL:
      return {
        ...state,
        list: [...action.payload]
      };
      break;
    default:
      return state;
  }
};
