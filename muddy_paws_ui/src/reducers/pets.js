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
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.list.map(p =>
          p.id == action.payload.id ? action.payload : p
        )
      };
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        list: state.list.filter(p => p.id != action.payload)
      };
    default:
      return state;
  }
};
