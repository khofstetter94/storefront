import axios from "axios";

const initialState = {
  categories: [],
  activeCategory: '',
}

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHOSEN':
      return {
        ...state,
        activeCategory: payload.name.toUpperCase(),
        activeCategoryDescription: payload.description,
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }
    default: return state;
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setAllCategories(response.data.results));
}

export const setAllCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data,
  }
}

export default categoriesReducer;
