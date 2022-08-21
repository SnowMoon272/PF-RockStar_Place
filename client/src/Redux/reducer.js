/* eslint-disable no-case-declarations */
import {
  GET_PLACES,
  GET_DETAIL_PLACE,
  FILTERED_PLACES,
  GET_PLACES_BY_NAME,
  GET_CITIES,
  UPDATE_FILTERS,
  POPULARITY_SORT,
  PRUEBA,
} from "./actions";

const initialState = {
  places: [],
  detail_place: [],
  cities: [],
  filters: {
    Ciudad: false,
    Sonido: false,
  },
  sort_places: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
        sort_places: action.payload,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case FILTERED_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case GET_PLACES_BY_NAME:
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
    case POPULARITY_SORT:
      return {
        ...state,
        places: action.payload.sort((a, b) => b.rating - a.rating),
      };
    case PRUEBA:
      return {
        ...state,
        places: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
