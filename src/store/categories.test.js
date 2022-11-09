import categoriesReducer  from'./categories';
import productsReducer from './products';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import { setChosenCategory } from './actions';

describe('Category Reducer', () => {

  const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
  });

  const store = createStore(reducers);

  it('delivers initial state', () => {
    let state = store.getState();

    expect(state.categories.categories[0].name).toEqual('electronics');
    expect(state.categories.categories[1].name).toEqual('food');
    expect(state.categories.categories[2].name).toEqual('clothing');
    expect(state.categories.activeCategory).toEqual('');
    expect(state.products[0].name).toEqual('TV');
    expect(state.products[1].name).toEqual('Radio');
    expect(state.products[2].name).toEqual('Shirt');
    expect(state.products[3].name).toEqual('Socks');
    expect(state.products[4].name).toEqual('Apples');
    expect(state.products[5].name).toEqual('Eggs');
    expect(state.products[6].name).toEqual('Bread');
  });
  it('sets active category', () => {
    let state = store.getState();
    let { categories } = state.categories;

    store.dispatch(setChosenCategory(categories[0]))
    let newState = store.getState();

    expect(newState.categories.activeCategory).toEqual('ELECTRONICS');
  });
})
