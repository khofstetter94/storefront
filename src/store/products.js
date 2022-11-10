import axios from "axios";

const initialState = {
  products: [],
  filteredProducts: [],
};

function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHOSEN':
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === payload.name),
      }
    case 'SELECT_PRODUCT':
      console.log(payload)
      return {
        ...state,
      }
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      }
    default: return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`);
  dispatch(setProducts(response.data.results));
};

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
}

export default productsReducer;
