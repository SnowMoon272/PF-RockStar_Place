import axios from "axios";

export const GET_DETAIL_PLACE = "GET_DETAIL_PLACE",
  GET_PLACES = "GET_PLACES",
  FILTERED_PLACES = "FILTERED_PLACES";

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
