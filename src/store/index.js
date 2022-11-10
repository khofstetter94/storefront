import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories.js';
import productsReducer from './products.js';
import cartReducer from './cart.js';
import thunk from '../middleware/thunk';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
  // add other reducers here
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
