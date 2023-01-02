import axios from "axios";
export const FETCH_DOGS = "FETCH_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const SORT = "SORT";
export const NEXT = "NEXT";
export const PREVIOUS = "PREVIOUS";
export const WEIGHT_FILTER = "WEIGHT_FILTER";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS";
export const FETCH_DOGS_TEMP = "FILTER_DOGS_TEMP";
export const FILTER_API = "FILTER_API";
export const FILTER_DB = "FILTER_DB";
export const DOGS = "DOGS";
export const PAGE = "PAGE";

export function fetchDogs() {
  return function (dispatch) {
    axios.get(`/dogs`).then((dogs) => {
      dispatch({
        type: FETCH_DOGS,
        payload: dogs.data,
      });
    });
  };
}

export function searchDogs(search) {
  return function (dispatch) {
    axios
      .get(`/dogs?name=${search}`)
      .then((dogs) => {
        if (Array.isArray(dogs.data)) {
          dispatch({
            type: SEARCH_DOGS,
            payload: dogs.data,
          });
        } else {
          alert("There no a dog");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    const response = await axios.post("/dogs", payload);
    return response;
  };
}

export function filterPeso(payload) {
  return {
    type: WEIGHT_FILTER,
    payload: payload,
  };
}

export function filterTemp(payload) {
  return {
    type: FILTER_TEMPERAMENTS,
    payload: payload,
  };
}

export function api(payload) {
  return {
    type: FILTER_API,
    payload: payload,
  };
}

export function database(payload) {
  return {
    type: FILTER_DB,
    payload: payload,
  };
}

export function dogs() {
  return function (dispatch) {
    axios.get(`/dogs`).then((dogs) => {
      dispatch({
        type: DOGS,
        payload: dogs.data,
      });
    });
  };
}

export function dataPage(payload) {
  return {
    type: PAGE,
    payload: payload,
  };
}
