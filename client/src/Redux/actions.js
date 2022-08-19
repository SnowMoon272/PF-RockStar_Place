import axios from "axios";

export const GET_DETAIL_PLACE = "GET_DETAIL_PLACE",
  GET_PLACES = "GET_PLACES",
  FILTERED_PLACES = "FILTERED_PLACES",
  GET_PLACES_BY_NAME = "GET_PLACES_BY_NAME";
  FILTERED_PLACES = "FILTERED_PLACES",
  GET_CITIES = "GET_CITIES";

export function getPlacesByName(name) {
  const encodName = encodeURI(name);
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/places/names?search=${encodName}`);
      return dispatch({
        type: GET_PLACES_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getPlaces() {
  return async (dispatch) => {
    try {
      const results = await axios.get("http://localhost:3001/places");
      return dispatch({
        type: GET_PLACES,
        payload: results.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getDetailPlace(id) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/place/${id}`);
      return dispatch({
        type: GET_DETAIL_PLACE,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function filteredPlaces(city, sound) {
  return async (dispatch) => {
    try {
      let json;
      if (city && !sound) {
        json = await axios.get(`http://localhost:3001/places?city=${city}`);
      } else if (!city && sound) {
        json = await axios.get(`http://localhost:3001/places?sound=${sound}`);
      }
      if (city && sound) {
        json = await axios.get(`http://localhost:3001/places?city=${city}&sound=${sound}`);
      }
      return dispatch({
        type: FILTERED_PLACES,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}
export function getCities() {
  return async (dispatch) => {
    try {
      const results = await axios.get("http://localhost:3001/cities");
      return dispatch({
        type: GET_CITIES,
        payload: results.data,
      });
    } catch (error) {
      return error;
    }
  };
}
