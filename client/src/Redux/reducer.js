import { GET_PLACES, GET_DETAIL_PLACE, FILTERED_PLACES, GET_CITIES } from "./actions";

const initialState = {
  places: [],
  detail_place: [],
  cities: [],
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
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
