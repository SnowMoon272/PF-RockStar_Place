import axios from "axios";

export const GET_DETAIL_PLACE = "GET_DETAIL_PLACE",
  GET_PLACES = "GET_PLACES",
  FILTERED_PLACES = "FILTERED_PLACES",
  GET_PLACES_BY_NAME = "GET_PLACES_BY_NAME",
  UPDATE_FILTERS = "UPDATE_FILTERS",
  POST_COMMENT = "POST_COMMENT",
  POPULARITY_SORT = "POPULARITY_SORT",
  GET_CITIES = "GET_CITIES",
  RESET_DETAILS = "RESET_DETAILS",
  GET_DETAIL_MUSIC_BAND = "GET_DETAIL_MUSIC_BAND",
  POST_REGISTER = "POST_REGISTER";

export function updateFilters(data) {
  return {
    type: UPDATE_FILTERS,
    payload: data,
  };
}

export function getPlacesByName(name) {
  const encodName = encodeURI(name);
  return async (dispatch) => {
    try {
      const json = await axios.get(`/places/names?search=${encodName}`);
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
      const results = await axios.get("/places");
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
      const json = await axios.get(`/place/${id}`);
      return dispatch({
        type: GET_DETAIL_PLACE,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getDetailMusicBand(id) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/musicband/${id}`);
      return dispatch({
        type: GET_DETAIL_MUSIC_BAND,
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
        json = await axios.get(`/places?city=${city}`);
      } else if (!city && sound) {
        json = await axios.get(`/places?sound=${sound}`);
      }
      if (city && sound) {
        json = await axios.get(`/places?city=${city}&sound=${sound}`);
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
      const results = await axios.get("/cities");
      return dispatch({
        type: GET_CITIES,
        payload: results.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function popularitySort(payload) {
  return {
    type: POPULARITY_SORT,
    payload,
  };
}

//Cambiar el nombre
export function postComment(payload) {
  return async (dispatch) => {
    const json = await axios({
      method: "post",
      url: "/placereviews",
      data: payload,
      headers: {
        Authorization: localStorage.getItem("user-token"),
      },
    });
    return json;
  };
}

export function resetDetails(payload) {
  return {
    type: RESET_DETAILS,
    payload,
  };
}

export function postData(payload) {
  return async (dispatch) => {
    const json = await axios.put("/musicband", payload);
    return json;
  };
}

export function updatePlaceData(payload) {
  return async (dispatch) => {
    const json = await axios.put("/place", payload);
    return json;
  };
}

export function registerBand(payload) {
  return async (dispatch) => {
    const json = await axios.post("http://localhost:3001/musicbands", payload);
    return json;
  };
}

export function registerPlace(payload) {
  return async (dispatch) => {
    const json = await axios.post("http://localhost:3001/places", payload);
    return json;
  };
}

export function getDetailPlaceByEmail(email) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/place-email/${email}`);
      return dispatch({
        type: GET_DETAIL_PLACE,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}
