const initialState = {
  products: [
    {category: 'FOOD', name: 'Pizza', description: 'Category Description Goes Here', price: '', inventoryCount: 0},
    {category: 'FOOD', name: 'Pasta', description: 'Category Description Goes Here', price: '', inventoryCount: 0},
    {category: 'Electronics', name: 'iPhone', description: 'Category Description Goes Here', price: '', inventoryCount: 0},
    {category: 'Electronics', name: 'TV', description: 'Category Description Goes Here', price: '', inventoryCount: 0}
  ],
  chosenProducts: [],
}

function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FILTERED-PRODUCTS':
      return {
        ...state,
        chosenProducts: initialState.products.filter(product => product.category === payload.normalizedName)
      }
    default: return state;
  }
}

export const setChosenProducts = (category) => {
  return {
    type: 'FILTERED-PRODUCTS',
    payload: category,
  }
}

export default productsReducer;
