import {
  FETCH_DOGS,
  SEARCH_DOGS,
  SORT,
  NEXT,
  PREVIOUS,
  WEIGHT_FILTER,
  FILTER_TEMPERAMENTS,
  FILTER_API,
  FILTER_DB,
  DOGS,
} from "../actions";

const initialState = {
  dogs: [],
  filteredDogs: [],
  page: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOGS:
      return {
        ...state,
        filteredDogs: action.payload,
      };
    case DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case SEARCH_DOGS:
      return {
        ...state,
        filteredDogs: { data: action.payload },
      };
    case NEXT:
      return {
        ...state,
        page: state.page + action.payload,
      };
    case PREVIOUS:
      return {
        ...state,
        page: state.page - action.payload,
      };
    case WEIGHT_FILTER:
      if (action.payload === "Heavier") {
        let data = state.filteredDogs.data
          .map((dog) => {
            if (dog.weight) {
              let weightData = dog.weight.split(" - ");
              return { ...dog, weightSort: Number(weightData[0]) };
            } else {
              return { ...dog, weightSort: dog.weight_min };
            }
          })
          .sort((a, b) => {
            if (a.weightSort > b.weightSort) {
              return -1;
            }
            if (a.weightSort < b.weightSort) {
              return 1;
            }
            return 0;
          });
        return {
          ...state,
          filteredDogs: { data: data },
        };
      } else {
        let data = state.filteredDogs.data
          .map((dog) => {
            if (dog.weight) {
              let weightData = dog.weight.split(" - ");
              return { ...dog, weightSort: Number(weightData[0]) };
            } else {
              return { ...dog, weightSort: dog.weight_min };
            }
          })
          .sort((a, b) => {
            if (a.weightSort > b.weightSort) {
              return 1;
            }
            if (a.weightSort < b.weightSort) {
              return -1;
            }
            return 0;
          });
        return {
          ...state,
          filteredDogs: { data: data },
        };
      }
    case SORT:
      let orderedDogs = state.filteredDogs.data.reverse();
      return {
        ...state,
        filteredDogs: { data: orderedDogs },
      };
    case FILTER_TEMPERAMENTS:
      return {
        ...state,
        filteredDogs: { data: action.payload },
      };
    case FILTER_API:
      let apiFilter = state.dogs.data.filter((dog) => {
        return typeof dog.id === "number";
      });
      return {
        ...state,
        filteredDogs: { data: apiFilter },
      };
    case FILTER_DB:
      let dbFilter = state.dogs.data.filter((dog) => {
        return typeof dog.id == "string";
      });
      console.log(dbFilter);
      return {
        ...state,
        filteredDogs: { data: dbFilter },
      };
    default:
      return state;
  }
}
