import { GET_PLACES, GET_DETAIL_PLACE, FILTERED_PLACES } from "./actions";

const initialState = {
  places: [],
  detail_place: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case FILTERED_PLACES:
      return {
        ...state,
        places: action.payload,
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
