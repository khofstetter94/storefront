const initialState = {
  selectedProducts: [],
}

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT-PRODUCT':
      return {
        ...state,
        selectedProducts: [
          ...state.selectedProducts,
          payload,
        ],
      }
    case 'REMOVE-PRODUCT':
      const selectedProducts = [...state.selectedProducts];
      const matchingIndex = selectedProducts.findIndex(product => product.name === payload.name);
      delete selectedProducts[matchingIndex];
      return {
        ...state,
        selectedProducts: selectedProducts.filter(Boolean),
      }
    default: return state;
  }
}


export default cartReducer;
