import { GET_PLACES } from "./actions";

const initiaState = {
  places: [],
};

function rootReducer(state = initiaState, action) {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
