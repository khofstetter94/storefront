import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories.js';
import productsReducer from './products.js';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
  // add other reducers here
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}
