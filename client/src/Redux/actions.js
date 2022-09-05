import axios from "axios";

export const GET_DETAIL_PLACE = "GET_DETAIL_PLACE",
  GET_PLACES = "GET_PLACES",
  FILTERED_PLACES = "FILTERED_PLACES",
  GET_PLACES_BY_NAME = "GET_PLACES_BY_NAME",
  GET_ALL_BY_NAME = "GET_ALL_BY_NAME",
  UPDATE_FILTERS = "UPDATE_FILTERS",
  POPULARITY_SORT = "POPULARITY_SORT",
  GET_CITIES = "GET_CITIES",
  RESET_DETAILS = "RESET_DETAILS",
  GET_DETAIL_MUSIC_BAND = "GET_DETAIL_MUSIC_BAND",
  GET_DETAIL_EVENT = "GET_DETAIL_EVENT",
  POST_REGISTER = "POST_REGISTER",
  PLACE_COORDS = "PLACE_COORDS",
  ADMIN_CLICK_BANDA = "ADMIN_CLICK_BANDA",
  ADMIN_CLICK_LOCAL = "ADMIN_CLICK_LOCAL",
  GET_MUSIC_BANDS = "GET_MUSIC_BANDS",
  GET_NOTIFICATIONS = "GET_NOTIFICATIONS",
  REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

export function getNotifications(role, email) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `/${role}s/notifications`,
        data: {
          // eslint-disable-next-line object-shorthand
          email,
        },
      });
      return dispatch({
        type: GET_NOTIFICATIONS,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function removeNotifications() {
  return async (dispatch) => {
    return dispatch({
      type: REMOVE_NOTIFICATIONS,
      payload: [],
    });
  };
}

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

export function getDetailEvent(email) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/musicbandemail/${email}`);
      return dispatch({
        type: GET_DETAIL_EVENT,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getDetailPlaceEvent(email) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/place-email/${email}`);
      return dispatch({
        type: GET_DETAIL_EVENT,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getDetailMusicBandByEmail(email) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/musicbandemail/${email}`);
      return dispatch({
        type: GET_DETAIL_MUSIC_BAND,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getMusicOrPlacesByName(name) {
  const encodName = encodeURI(name);
  return async (dispatch) => {
    try {
      const json = await axios.get(`/combinedsearch/?search=${encodName}`);
      return dispatch({
        type: GET_ALL_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function filteredPlaces(city, sound, dates) {
  return async (dispatch) => {
    try {
      let json;
      if (city && sound && dates) {
        json = await axios.get(`/places?city=${city}&sound=${sound}&dates=${dates}`);
      }
      if (city && !sound && !dates) {
        json = await axios.get(`/places?city=${city}`);
      }
      if (!city && sound && !dates) {
        json = await axios.get(`/places?sound=${sound}`);
      }
      if (city && sound && !dates) {
        json = await axios.get(`/places?city=${city}&sound=${sound}`);
      }
      if (city && !sound && dates) {
        json = await axios.get(`/places?city=${city}&dates=${dates}`);
      }
      if (!city && sound && dates) {
        json = await axios.get(`/places?sound=${sound}&dates=${dates}`);
      }
      if (!city && !sound && dates) {
        json = await axios.get(`/places?dates=${dates}`);
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

export function resetDetails(payload) {
  return {
    type: RESET_DETAILS,
    payload,
  };
}

export function registerBand(payload) {
  return async (dispatch) => {
    const json = await axios.post("/musicbands", payload);
    return json;
  };
}

export function registerPlace(payload) {
  return async (dispatch) => {
    const json = await axios.post("/places", payload);
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

export function getMusicBands() {
  return async (dispatch) => {
    try {
      const json = await axios.get("/musicbands");
      return dispatch({
        type: GET_MUSIC_BANDS,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function updatePlaceCoords(coords) {
  return {
    type: PLACE_COORDS,
    payload: coords,
  };
}

export function resetCoords() {
  return {
    type: PLACE_COORDS,
    payload: {},
  };
}

export function adminClickLocal(payload) {
  return {
    type: ADMIN_CLICK_LOCAL,
    payload,
  };
}

export function adminClickBanda(payload) {
  return {
    type: ADMIN_CLICK_BANDA,
    payload,
  };
}
