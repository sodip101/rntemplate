/* eslint-disable no-undef */
import getWeatherInfo from './util';

//State
const initialState = {
  loading: false,
  erro: null,
  currentCityInfo: null,
  defaultCitiesData: [],
  defaultCitiesNames: ['Kathmandu, NP', 'Cairo, EG'],
};

//Actions
const SEARCH = 'get weather info';
const ADD_CITY_NAME = 'add to default cities names';
const DELETE_DEFAULT = 'delete from default city list';
const FETCH_DEFAULT_REQUEST = 'make fetch request';
const FETCH_DEFAULT_SUCCESS = 'fetch successfull';
const FETCH_DEFAULT_FAILURE = 'fetch unsuccessfull';

//Action Creators
const fetchDefaultRequest = () => ({
  type: FETCH_DEFAULT_REQUEST,
});

const fetchDefaultSuccess = weatherData => ({
  type: FETCH_DEFAULT_SUCCESS,
  payload: weatherData,
});

const fetchDefaultFailure = error => ({
  type: FETCH_DEFAULT_FAILURE,
  payload: error,
});

export const getWeather = city => {
  return async dispatch => {
    try {
      const weatherData = await getWeatherInfo(city);
      dispatch({
        type: SEARCH,
        payload: weatherData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToDefault = cityName => ({
  type: ADD_CITY_NAME,
  payload: cityName,
});

export const getDefaultWeather = cities => {
  return async dispatch => {
    dispatch(fetchDefaultRequest());
    try {
      const allData = [];
      for (city of cities) {
        let data = await getWeatherInfo(city);
        allData.push(data);
      }

      dispatch(fetchDefaultSuccess(allData));
    } catch (error) {
      dispatch(fetchDefaultFailure(error.message));
    }
  };
};

export const deleteDefault = city => ({
  type: DELETE_DEFAULT,
  payload: city,
});

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, currentCityInfo: action.payload };
    case ADD_CITY_NAME:
      return {
        ...state,
        defaultCitiesNames: [...state.defaultCitiesNames, action.payload],
      };
    case DELETE_DEFAULT:
      return {
        ...state,
        defaultCitiesNames: state.defaultCitiesNames.filter(
          city => city !== action.payload,
        ),
      };
    case FETCH_DEFAULT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEFAULT_SUCCESS:
      return {
        ...state,
        loading: false,
        defaultCitiesData: [...action.payload],
        error: null,
      };
    case FETCH_DEFAULT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
