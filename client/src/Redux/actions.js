import axios from "axios";

export const GET_DETAIL_PLACE = "GET_DETAIL_PLACE",
  GET_PLACES = "GET_PLACES";

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
