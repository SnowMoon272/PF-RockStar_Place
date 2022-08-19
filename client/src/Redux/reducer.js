import { DEFAULT, GET_DETAIL_PLACE } from "./actions";

const initiaState = {
  estadoprueba: [],
  detail_place: [],
};

function rootReducer(state = initiaState, action) {
  switch (action.type) {
    case DEFAULT:
      return {
        ...state,
      };
    case GET_DETAIL_PLACE:
      return {
        ...state,
        detail_place: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
