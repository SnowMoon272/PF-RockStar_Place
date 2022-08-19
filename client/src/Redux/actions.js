import axios from "axios";

export const DEFAULT = "DEFAULT";
export const GET_DETAIL_PLACE = "GET_DETAIL_PLACE";

export function deffault(payload) {
  return {
    type: DEFAULT,
    payload,
  };
}

export function getDetailPlace(email) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/place/${email}`);
      return dispatch({
        type: GET_DETAIL_PLACE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}
