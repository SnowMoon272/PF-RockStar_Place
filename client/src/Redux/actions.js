import axios from "axios";

export const DEFAULT = "DEFAULT",
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
