export const setChosenCategory = (category) => {
  return {
    type: 'CHOSEN',
    payload: category,
  }
}

export const setSelectedProduct = (product) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: product,
  }
}

export const removeSelectedProduct = (product) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product,
  }
}
