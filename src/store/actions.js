export const setChosenCategory = (category) => {
  return {
    type: 'CHOSEN',
    payload: category,
  }
}

export const setSelectedProduct = (product) => {
  return {
    type: 'SELECT-PRODUCT',
    payload: product,
  }
}

export const removeSelectedProduct = (product) => {
  return {
    type: 'REMOVE-PRODUCT',
    payload: product,
  }
}
