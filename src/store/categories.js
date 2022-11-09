const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
}

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHOSEN':
      return {
        ...state,
        activeCategory: payload.name.toUpperCase(),
      }
    default: return state;
  }
}

export default categoriesReducer;
