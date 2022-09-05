/* eslint-disable no-case-declarations */
import {
  GET_PLACES,
  GET_DETAIL_PLACE,
  FILTERED_PLACES,
  GET_PLACES_BY_NAME,
  GET_ALL_BY_NAME,
  GET_CITIES,
  UPDATE_FILTERS,
  POPULARITY_SORT,
  RESET_DETAILS,
  GET_DETAIL_MUSIC_BAND,
  GET_DETAIL_EVENT,
  POST_REGISTER,
  GET_MUSIC_BANDS,
  GET_NOTIFICATIONS,
  REMOVE_NOTIFICATIONS,
  PLACE_COORDS,
  ADMIN_CLICK_BANDA,
  ADMIN_CLICK_LOCAL,
} from "./actions";

const initialState = {
  musicBands: [],
  places: [],
  allByName: [],
  detail_place: [],
  cities: [],
  filters: {
    Ciudad: false,
    Sonido: false,
    Evento: false,
  },
  sort_places: [],
  detail_music_band: {},
  detail_event: [],
  notifications: [],
  place_coords: {},
  admin_click: "default",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSIC_BANDS:
      return {
        ...state,
        musicBands: action.payload,
      };
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
    case GET_ALL_BY_NAME:
      return {
        ...state,
        allByName: action.payload,
      };
    case GET_DETAIL_PLACE:
      return {
        ...state,
        detail_place: action.payload,
      };
    case GET_DETAIL_MUSIC_BAND:
      return {
        ...state,
        detail_music_band: action.payload,
      };
    case GET_DETAIL_EVENT:
      return {
        ...state,
        detail_event: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload.filter((city) => {
          return city !== "";
        }),
      };
    case POPULARITY_SORT:
      return {
        ...state,
        places: action.payload.sort((a, b) => b.rating - a.rating),
      };
    case RESET_DETAILS:
      return {
        ...state,
        detail_place: action.payload,
        detail_music_band: action.payload,
      };
    case ADMIN_CLICK_LOCAL:
      return {
        ...state,
        admin_click: action.payload,
      };
    case ADMIN_CLICK_BANDA:
      return {
        ...state,
        admin_click: action.payload,
      };
    case POST_REGISTER:
      return {
        ...state,
      };
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    case REMOVE_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    case PLACE_COORDS:
      return {
        ...state,
        place_coords: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
