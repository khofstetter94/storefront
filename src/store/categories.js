const initialState = {
  categories: [
    { normalizedName: 'food', displayName: 'FOOD', description: 'Category Description Goes Here' },
    { normalizedName: 'electronics', displayName: 'ELECTRONICS', description: 'Category Description Goes Here' }
  ],
  activeCategory: '',
}

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHOSEN':
      return {
        ...state,
        activeCategory: payload.normalizedName,
      }
    default: return state;
  }
}

export const setChosenCategory = (category) => {
  return {
    type: 'CHOSEN',
    payload: category,
  }
}

export default categoriesReducer;
