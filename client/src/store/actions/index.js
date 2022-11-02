import axios from "axios";
export const FETCH_DOGS = "FETCH_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const SORT = "SORT";

export function fetchDogs() {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/dogs").then((dogs) => {
      dispatch({
        type: FETCH_DOGS,
        payload: dogs,
      });
    });
  };
}

export function searchDogs(search) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/dogs?name=${search}`)
      .then((dogs) => {
        dispatch({
          type: SEARCH_DOGS,
          payload: dogs.data,
        });
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
